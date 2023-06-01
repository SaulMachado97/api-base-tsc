import { Request } from "express";
import { JwtPayload } from "jsonwebtoken";

export interface RequestExtend extends Request{
    user? : string | JwtPayload;
}