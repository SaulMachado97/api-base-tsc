import "dotenv/config";
import { sign, verify } from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "790kasndo%210";

const generateToken = (idUsuario: string) => {
    const jwt = sign({idUsuario}, JWT_SECRET,{
        expiresIn: "2h"
    });

    return jwt;
};

const verifyToken = async (jwt: string) => {
    const decodeToken = verify(jwt, JWT_SECRET);
    return decodeToken;
};

export {generateToken, verifyToken};