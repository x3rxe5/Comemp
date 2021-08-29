import { Router } from  "express";
import {
    getEmployee,
    getAllEmployee,
    setEmployee,
    pingPong,
    updateEmployee,
    deleteEmployee
} from "./../controllers/employeeController";

import {
    // ProtectCompanyCreateMiddleware,
    // ProtectMiddleware,
    authMiddleware
} from "./../middlewares/authMiddleware"

const router:Router = Router();

router
.route("/employee",)
.get(getAllEmployee)
.post(authMiddleware,setEmployee)

router
.route("/employee/:id")
.get(authMiddleware,getEmployee)
.patch(updateEmployee)
.delete(deleteEmployee)


export default router;