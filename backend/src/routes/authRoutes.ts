import {Router,Request,Response} from "express";
import { login,signup }  from "./../controllers/authController";

import { nanoid } from "nanoid";
import multer from 'multer';
import path from "path";

const router:Router = Router();



const storage = multer.diskStorage({
    destination(req:Request, file, cb) {
        cb(null, 'images');
    },
    filename(req, file, cb) {
        cb(null, nanoid(4) + '-' + Date.now() + path.extname(file.originalname));
    }
});


const fileFilter = (req:Request, file:Express.Multer.File, cb:(error:Error | null, answer:boolean ) => void ) => {
    const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png'];
    if(allowedFileTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(null, false);
    }
}


/* +++++++++++++++ UTIL FUNCTIONS ++++++++++++++++++++ */

const upload = multer({storage,fileFilter});

router.post("/signup",upload.single('photo'),signup);
router.post("/login",login);


export default router;