import { Router } from  "express";
import {
    getEmployee,
    getAllEmployee,
    setEmployee,
    pingPong,
    updateEmployee,
    deleteEmployee
} from "./../controllers/employeeController";

const router:Router = Router();

router
.route("/employee",)
.get(getAllEmployee)
.post(setEmployee)

router
.route("/employee/:id")
.get(getEmployee)
.patch(updateEmployee)
.delete(deleteEmployee)


export default router;