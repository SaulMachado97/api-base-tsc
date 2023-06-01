//Este es el encargado de la logica de negocio

import { User } from "../interfaces/userInterface";
import UserModel from "../models/userModel";
import userModelMySQL from "../models/userModelMySQL";
import { encrypt } from "../utils/bcrypt.handle";

const getAllUsers = async () => {
    const response = await UserModel.find();
    return {code: 0, message: "GET_USERS_SUCCESSFULL", data: response};
};

const getUserId = async (user: String) => {
    const response = await UserModel.findById(user);
    return {code: 0, message: "GET_USER_SUCCESSFULL", data: response};
};

const updateUserService = async (id: string, data: User) => {
    // const response = await UserModel.findOneAndUpdate(
    //     {_id: id},
    //     data,
    //     {new: true}
    // );

    const checkIs = await UserModel.findById(id);
    if(!checkIs) return {code: 100, message: "USER_NOT_FOUND", data: null};
    
    //Encriptamos la contraseña
    const passHash = await encrypt(data.password);
    data.password = passHash;
    const response = await UserModel.findByIdAndUpdate(id,data,{new: true});

    // return response;
    return {code: 0, message: "UPDATE_SUCCESSFULL", data: response};
};

const deleteUserService= async (id: String) => {

    const checkIs = await UserModel.findById(id);
    if(!checkIs) return {code: 100, message: "USER_NOT_FOUND", data: null};

    const response = await UserModel.findByIdAndRemove(id);
    return {code: 0, message: "DELETE_SUCCESSFULL", data: response};
};

const getUsersMySQLService = async () => {

    const response = await userModelMySQL.findAll();
    return {
        code: 0,
        message: "GET_USERS_OK",
        data: response
    }
}

export { getAllUsers, getUserId, updateUserService, deleteUserService, getUsersMySQLService };