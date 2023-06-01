import { Request, Response } from "express"
import { handleHttp } from "../utils/error.handle"
import { RequestExtend } from "../interfaces/RequestExtendInterface";

const uploadFile = (req: RequestExtend, res: Response) => {
    try{
        res.status(200);
        res.send("Subimos el archivo");
    }catch(e){
        handleHttp(res, 'ERROR_UPLOAD_FILE');
    }
}

const getFile = (req: RequestExtend, res: Response) => {
    try{
        res.status(200);
        res.send({
            message: "obtenemos el archivo",
            user: req.user
        });
        // res.send({data: "Lista todas las ordenes, solo lo ven personas con JWT"});
    }catch(e){
        handleHttp(res, 'ERROR_GET_FILE');
    }
}

export {uploadFile, getFile};