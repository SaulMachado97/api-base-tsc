import { NextFunction, Request, Response } from "express";

const logMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const header = req.headers;
    const userAgent = header["user-agent"];
    const host = header["host"];
    console.log(userAgent);
    // console.log(host);
    next();
}

export { logMiddleware };