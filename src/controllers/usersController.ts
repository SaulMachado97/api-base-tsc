import { Request, Response } from "express"
import { handleHttp } from "../utils/error.handle"
import { deleteUserService, getAllUsers, getUserId, updateUserService, getUsersMySQLService } from "../services/usersService";

const getUser = async ({ params }: Request, res: Response) => {
    try{
        const { id } = params;
        const response = await getUserId(id);
        if(response.code != 0){
            res.status(403);
        }else{
            res.status(200);    
        }
        res.send(response);
    }catch(e){
        handleHttp(res, 'ERROR_GET_USER', e);
    }
}

const getUsers = async (req: Request, res: Response) => {
    try{
        const response = await getAllUsers();
        if(response.code != 0){
            res.status(403);
        }else{
            res.status(200);    
        }
        res.send(response);
    }catch(e){
        handleHttp(res, 'ERROR_GET_USERS', e);
    }
}

const updateUser = async ({params , body}: Request, res: Response) => {
    try{
        const {id} = params;
        const response = await updateUserService(id,body);
        // if(response.code != 0){
        //     res.status(403);
        // }else{
        //     res.status(200);    
        // }
        res.send(response);
    }catch(e){
        handleHttp(res, 'ERROR_UPDATE_USER',e);
    }
}

const deleteUser = async ({params}: Request, res: Response) => {
    try{
        const {id} = params;
        const response = await deleteUserService(id);

        if(response.code != 0){
            res.status(403);
        }else{
            res.status(200);    
        }

        res.send(response);
    }catch(e){
        handleHttp(res, 'ERROR_DELETE_USER', e);
    }
}

const getUsersMySQL = async (req: Request, res: Response) => {
    try{
        const response = await getUsersMySQLService();
        if(response.code != 0){
            res.status(403);
        }else{
            res.status(200);    
        }
        res.send(response);
    }catch(e){
        handleHttp(res, 'ERROR_GET_USERS', e);
    }
}

export {getUser, getUsers, updateUser, deleteUser, getUsersMySQL};