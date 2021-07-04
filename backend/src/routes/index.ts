import { Router } from "express";
import { getEmployee,setEmployee,pingPong } from "./../controllers/employee";

const router:Router = Router();

// Test
router.get("/",pingPong);

// For Employee
router
.route("/empoloyee",)
.get(getEmployee)
.post(setEmployee)

export default router;
