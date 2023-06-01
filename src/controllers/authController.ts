import { Request, Response } from "express";
import {loginService, registerUserService} from "../services/authService";

const registerUser = async ({body}: Request, res:Response) => {
    
    const response = await registerUserService(body);

    if(response.code != 0){
        res.status(403);
    }else{
        res.status(200);    
    }

    res.send(response);
}

const login = async ({body}: Request, res:Response) => {

    const {user, password} = body;
    const response = await loginService({user, password});

    if(response.code != 0){
        res.status(403);
    }else{
        res.status(200);    
    }
    res.send(response);
}

export { registerUser, login};