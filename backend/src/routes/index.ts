import { Router } from "express";
import { getEmployee,setEmployee,pingPong,updateEmployee,deleteEmployee } from "./../controllers/employee";

const router:Router = Router();

// Test
router.get("/",pingPong);

// For Employee
router
.route("/employee",)
.get(getEmployee)
.post(setEmployee)

router
.route("/employee/:id")
.patch(updateEmployee)
.delete(deleteEmployee)

export default router;
