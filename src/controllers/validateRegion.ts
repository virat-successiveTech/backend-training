import { Request, Response, NextFunction } from 'express';
import geoip from 'geoip-lite';

const allowedCountries = ['US', 'CA', 'GB', 'IN'];

const getClientIp = (req: Request): string | null => {
  const forwarded = req.headers['x-forwarded-for'];
  const ip = typeof forwarded === 'string' ? forwarded.split(',')[0] : req.socket.remoteAddress;

  return ip?.replace('::ffff:', '') || null;
};

const validateRegion = (req: Request, res: Response, next: NextFunction) => {
  const clientIp = getClientIp(req);

  if (!clientIp) {
    return res.status(400).json({ error: 'Unable to determine client IP address.' });
  }

  const geo = geoip.lookup(clientIp);

  if (!geo) {
    return res.status(400).json({ error: 'Unable to determine geographic location.' });
  }

  if (!allowedCountries.includes(geo.country)) {
    return res.status(403).json({
      error: `Access denied. Your region (${geo.country}) is not permitted.`,
    });
  }

  next();
};

export default validateRegion;
