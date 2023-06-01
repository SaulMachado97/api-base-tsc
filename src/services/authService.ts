import { Auth } from "../interfaces/authInterface";
import { User } from "../interfaces/userInterface";
import UserModel from "../models/userModel";
import { encrypt, verified, } from "../utils/bcrypt.handle";
import { generateToken } from "../utils/jwt.handle";

const registerUserService = async ({user, password, name, lastname, year, profession}: User) => {
    
    //Primero validamos que ese usuario si exista
    const checkIs = await UserModel.findOne({user});
    if(checkIs) return {code: 100, message: "ALREADY_USER", data: null};

    const passHash = await encrypt(password);
    
    const registerNewUser = await UserModel.create(
        { user, password:passHash , name, lastname, year, profession}
    );
    
    if(registerNewUser){
        return {code: 0, message: "NEW_USER_ADD", data: registerNewUser};
    }else{
        return {code: 100, message: "FAIL_USER_ADD", data: null};
    }
}

const loginService = async ({user, password}: Auth) => {

    //Primero validamos que ese usuario si exista
    const usuario = await UserModel.findOne({user});
    if(!usuario) return {code: 100, message: "NOT_FOUND_USER", data: null};

    const checkPassword = await verified(password, usuario.password);
    if(!checkPassword) return {code: 100, message: "FAIL_PASSWORD", data: null};

    //Vamos a obtener el token
    const token = generateToken(usuario.user);
    const data = {
        token: token,
        user: usuario
    }
    return {code: 0, message: "LOGIN_SUCCESS", data: data};
   
}

export {registerUserService, loginService};