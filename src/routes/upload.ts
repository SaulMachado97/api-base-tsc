import { Router } from "express";
import { checkJWT } from "../middleware/session";
import { getFile, uploadFile } from "../controllers/uploadController";
import { multerMiddleware } from "../middleware/file";

const router = Router();

/**
 * Esta ruta solo la pueden acceder usuarios que tengan un JWT valido
 */
router.get('/', checkJWT, getFile);
router.post('/', checkJWT, uploadFile);

export {router};