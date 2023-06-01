import { Request, Response } from "express"
import { handleHttp } from "../utils/error.handle"
import { RequestExtend } from "../interfaces/RequestExtendInterface";

const getOrder = (req: RequestExtend, res: Response) => {
    try{
        res.status(200);
        res.send("Lista una orden");
    }catch(e){
        handleHttp(res, 'ERROR_GET_BLOG');
    }
}

const gerAllOrders = (req: RequestExtend, res: Response) => {
    try{
        res.status(200);
        res.send({
            message: "Esto es lo que retorna el controlador",
            user: req.user
        });
        // res.send({data: "Lista todas las ordenes, solo lo ven personas con JWT"});
    }catch(e){
        handleHttp(res, 'ERROR_GET_BLOGS');
    }
}

export {getOrder, gerAllOrders};