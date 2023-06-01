import { Router } from "express";
import {login, registerUser} from "../controllers/authController";

const router = Router();

router.post('/login', login);
router.post('/register', registerUser);

export {router};