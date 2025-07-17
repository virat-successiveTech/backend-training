import { NextFunction } from "express";
import { JwtPayload } from "jsonwebtoken";
import { Request,Response } from "express";
import jwt from "jsonwebtoken"
export interface AuthenticatedReq extends Request {
    token ?: string | JwtPayload ;
}
export const secret_key = "my_secret";

export default function authentication (
    req: AuthenticatedReq,
    res:Response,
    next : NextFunction
){
    const auth = req.headers.authorization;  //"Bearer <token>"
    if (!auth || !auth.startsWith("Bearer"))
    {
        return res.status(401).json({meassage: "Missing Token"});
    }

    const token = auth?.split(" ")[1]!;
    try{
        const decoded = jwt.verify(token,secret_key);
        req.token = decoded ;
        next();
    }
    catch(error)
    {
        return res.status(401).json({message : "Invalid Token"});
    }
}