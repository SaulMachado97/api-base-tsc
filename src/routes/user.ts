import { Router } from "express";
import { deleteUser, getUser, getUsers, getUsersMySQL, updateUser } from "../controllers/usersController";

const router = Router();

router.get('/', getUsers);
router.get('/mysql', getUsersMySQL);
router.get('/:id', getUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

export {router};