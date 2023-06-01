import { Schema, Types, model, Model } from "mongoose";
import { User } from "../interfaces/userInterface";

const UserSchema = new Schema<User>(
    {
        user:{
            type: String,
            required: true,
            unique: true
        },
        password:{
            type: String,
            required: true
        },
        name:{
            type: String,
            required: true
        },
        lastname:{
            type: String,
            required: true
        },
        year:{
            type: Number,
            required: true
        },
        profession:{
            type: String,
            default: "N/A"
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
)

const UserModel = model('user',UserSchema);

export default UserModel;