import { NextFunction, Request, Response } from "express";
import multer from "multer";

const configStorage = multer.diskStorage({
    destination: (req, file, cb): void => {
        cb(null, 'uploads');
    },

    filename: function (req: any, file: any, cb: any) {
        cb(null, file.originalname)
    }
});

const fileFilterConfig = (req: any, file: any, cb: any) => {
    if (file.mimetype === "image/jpg" ||
        file.mimetype === "image/jpeg" ||
        file.mimetype === "image/png") {

        cb(null, true);
    } else {
        cb(new Error("Image uploaded is not of type jpg/jpeg or png"), false);
    }
}

const multerMiddleware = multer({ storage: configStorage, fileFilter: fileFilterConfig });

export { multerMiddleware };