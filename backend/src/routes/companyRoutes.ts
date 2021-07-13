import {Router} from "express";
import {
    getAllCompany,
    setCompany,
    getCompany,
    updateCompany,
    deleteCompany
} from "./../controllers/companyController";


const router:Router = Router();

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