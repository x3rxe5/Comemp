import { Router } from "express";
import { getEmployee,setEmployee,pingPong,updateEmployee,deleteEmployee } from "./../controllers/employeeController";
import { login,signup }  from "./../controllers/authController";
import { allUser,deleteUser,getUser,updateUser } from "../controllers/userController";
import {
    getAllCompany,
    setCompany,
    getCompany,
    updateCompany,
    deleteCompany
} from "./../controllers/companyController";

const router:Router = Router();

// Test
router.get("/",pingPong);

/*
    User
*/
router.post("/signup",signup);
router.post("/login",login);

router
.route("/user")
.get(allUser)

router
.route("/user/:id")
.get(getUser)
.patch(updateUser)
.delete(deleteUser);

/*
    Employee
*/
router
.route("/employee",)
.get(getEmployee)
.post(setEmployee)

router
.route("/employee/:id")
.patch(updateEmployee)
.delete(deleteEmployee)


/*
    Company
*/
router
.route("/company")
.get(getAllCompany)
.post(setCompany)

router
.route("/company/:id")
.get(getCompany)
.patch(updateCompany)
.delete(deleteCompany)





export default router;
