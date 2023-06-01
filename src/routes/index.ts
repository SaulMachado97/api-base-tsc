/**
 * cargador dinamico de rutas
 */

import { Response, Router } from "express";
import {readdirSync} from "fs";

const PATH_ROUTER = `${__dirname}`;
const router = Router();

/**
 * 
 * @param fileName -> esta ingresando nameFile.ts (item.ts)
 * @returns -> debe retornar nameFile (item)
 */
const cleanFileName = (fileName: string) => {
    const file = fileName.split('.').shift()
    return file;
}

//Esta funcion escanea cuales son los archivos del PATH_ROUTER
readdirSync(PATH_ROUTER).filter((fileName) => {
    const cleanName = cleanFileName(fileName);
    if(cleanName !== 'index'){
        import(`./${cleanName}`).then((moduleRouter)=>{
            router.use(`/${cleanName}`, moduleRouter.router);
            console.log(`Se carga la ruta: ${cleanName}`);
        });
    }
})

export { router } ;