import { Schema, Types, model, Model } from "mongoose";
import { Car } from "../interfaces/car.interface";

const ItemsSchema = new Schema<Car>(
    {
        color:{
            type: String,
            require: true
        },
        typeGas:{
            type:String,
            enum: ["gasoline", "electric"],
            require: true
        },
        year:{
            type: Number,
            require: true
        },
        factory:{
            type: String,
            minlength: 1,
            maxlength: 30
        },
        price:{
            type: Number,
            require: true
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
)

const ItemsModel = model('items',ItemsSchema);

export default ItemsModel;