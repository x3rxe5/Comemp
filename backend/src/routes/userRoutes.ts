import { Router } from  "express";
import { authMiddleware } from "./../middlewares/authMiddleware";

import {
    allUser,
    getUser,
    updateUser,
    deleteUser
} from "./../controllers/userController";

const router:Router = Router();

router
.route("/user")
.get(authMiddleware,allUser)

router
.route("/user/:id")
.get(getUser)
.patch(updateUser)
.delete(deleteUser);


export default router;