//Este es el encargado de la logica de negocio

import { User } from "../interfaces/userInterface";
import UserModel from "../models/userModel";

const getAllOrders = async () => {
    const response = await UserModel.find();
    return {code: 0, message: "GET_USERS_SUCCESSFULL", data: response};
};

const getOrderId = async (user: String) => {
    const response = await UserModel.findById(user);
    return {code: 0, message: "GET_USER_SUCCESSFULL", data: response};
};

export { getAllOrders, getOrderId };