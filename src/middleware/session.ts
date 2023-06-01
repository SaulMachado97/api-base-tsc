import { NextFunction, Request, Response } from "express";
import { verifyToken } from "../utils/jwt.handle";
import { RequestExtend } from "../interfaces/RequestExtendInterface";

const checkJWT = async (req:RequestExtend, res: Response, next: NextFunction) => {

    try{
        const jwtUser = req.headers.authorization || '';

        const jwt = jwtUser.split(' ').pop();

        const token = await verifyToken(`${jwt}`);
        console.log(token);
        if(!token){
            res.status(401);
            res.send({error: true, message: 'INVALID_TOKEN'});
        }else{
            req.user = token;
            next();
        }

    }catch(e){
        res.status(400);
        res.send({error: true, message: 'SESSION_FAILED', details: e});
    }
};

export { checkJWT };