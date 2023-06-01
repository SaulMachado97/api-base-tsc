//Este es el encargado de la logica de negocio

import { Car } from "../interfaces/car.interface";
import ItemsModel from "../models/itemsModel";

const insertItem = async (item: Car) => {
    const response = await ItemsModel.create(item);
    return response;
};

const getAllItems = async () => {
    const response = await ItemsModel.find();
    return response;
};

const getItemId = async (item: String) => {
    const response = await ItemsModel.findById(item);
    return response;
};

const updateItem = async (id: string, data: Car) => {
    // const response = await ItemsModel.findOneAndUpdate(
    //     {_id: id},
    //     data,
    //     {new: true}
    // );
    const response = ItemsModel.findByIdAndUpdate(id,data,{new: true});
    return response;
};

const deleteItem= async (id: String) => {
    const response = await ItemsModel.findByIdAndRemove(id);
    return response;
};

export { insertItem, getAllItems, getItemId, updateItem, deleteItem };