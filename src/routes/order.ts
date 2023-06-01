import { Request, Response, Router } from "express";
import { getOrder, gerAllOrders } from "../controllers/orderController";
import { checkJWT } from "../middleware/session";

const router = Router();

/**
 * Esta ruta solo la pueden acceder usuarios que tengan un JWT valido
 */
router.get('/', checkJWT, gerAllOrders);

export {router};