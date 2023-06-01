import { Router } from "express";
import { deleteItemId, getItem, getItems, postItem, updateItemId } from "../controllers/itemsController";
import { logMiddleware } from "../middleware/log";

const router = Router();

router.get('/', getItems);

router.get('/:id', logMiddleware, getItem);

router.post('/', postItem);

router.put('/:id', updateItemId);

router.delete('/:id', deleteItemId);

export {router};