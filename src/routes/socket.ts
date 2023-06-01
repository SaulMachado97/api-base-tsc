import { Router } from "express";
import { connectSocket } from "../controllers/socketController";
import { checkJWT } from "../middleware/session";

const router = Router();

/**
 * Esta ruta solo la pueden acceder usuarios que tengan un JWT valido
 */
router.get('/', checkJWT, connectSocket);
router.get('/prueba', connectSocket);

export {router};