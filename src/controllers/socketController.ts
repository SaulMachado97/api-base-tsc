import { Request, Response } from "express"
import { handleHttp } from "../utils/error.handle"
import { io } from "socket.io-client";

const socket = io("ws://localhost:3002");

const connectSocket = async (req: Request, res: Response) => {
    try{
        console.log(req.headers.host);
        const host = req.headers.host;

        const dirHtml = (host == "localhost:3002") ? "/Users/saulmachado/Projects/api-tsc/src/client-socket/index.html" : "/app/dist/client-socket/index.html";
        socket.on("saludo", (arg) => {
            console.log(arg);
        });

        res.sendFile(dirHtml);

    }catch(e){
        handleHttp(res, 'ERROR_GET_ITEMS', e);
    }
}

export { connectSocket };