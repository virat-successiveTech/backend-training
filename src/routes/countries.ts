import { Router } from 'express';
import country from '../models/country';

const router = Router();

router.get('/countries', async (_req, res) => {
  try {
    const countries = await country.find({});
    res.json(countries);
  } catch (err) {
    console.error('Error fetching countries:', err); // Log full error
    res.status(500).json({ error: 'Failed to fetch countries' });
  }
});



export default router;
