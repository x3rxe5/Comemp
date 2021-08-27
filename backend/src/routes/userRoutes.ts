import { Router } from  "express";
import { authMiddleware,ProtectMiddleware } from "./../middlewares/authMiddleware";

import {
    allUser,
    getUser,
    updateUser,
    deleteUser
} from "./../controllers/userController";

const router:Router = Router();

router
.route("/user")
.get(authMiddleware,ProtectMiddleware,allUser)

router
.route("/user/:id")
.get(authMiddleware,getUser)
.patch(authMiddleware,updateUser)
.delete(authMiddleware,deleteUser);


export default router;