import { Request, Response } from "express"
import { handleHttp } from "../utils/error.handle"
import { getAllItems, insertItem, updateItem, deleteItem } from "../services/itemsService";
import ItemsModel from "../models/itemsModel";

// import { io } from "socket.io-client";

const getItem = async ({ params }: Request, res: Response) => {
    try{
        const { id } = params;
        const response = await ItemsModel.findById(id);
        const data = response ? response : "NOT_DATA";
        res.send(data);
    }catch(e){
        handleHttp(res, 'ERROR_GET_ITEM', e);
    }
}

const getItems = async (req: Request, res: Response) => {
    try{
        // const socket = io("ws://localhost:3002");
        
        // socket.on("saludo", (arg) => {
        //     console.log(arg);
        // });

        // socket.emit("saludo","Hola soy el controlador items");

        const response = await getAllItems();
        res.send(response);
    }catch(e){
        handleHttp(res, 'ERROR_GET_ITEMS', e);
    }
}

const updateItemId = async ({params , body}: Request, res: Response) => {
    try{
        const {id} = params;
        const response = await updateItem(id,body);
        res.send(response);
    }catch(e){
        handleHttp(res, 'ERROR_UPDATE_ITEM',e);
    }
}

const postItem = async ({body}: Request, res: Response) => {
    try{
        const responseInsert = await insertItem(body);
        res.send(responseInsert);
    }catch(e){
        handleHttp(res, 'ERROR_POST_ITEM', e);
    }
}

const deleteItemId = async ({params}: Request, res: Response) => {
    try{
        const {id} = params;
        const response = await deleteItem(id);
        res.send(response);
    }catch(e){
        handleHttp(res, 'ERROR_DELETE_ITEM', e);
    }
}

export {getItem, getItems, updateItemId, postItem, deleteItemId};