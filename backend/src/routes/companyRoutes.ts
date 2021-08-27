import {Router} from "express";
import {
    getAllCompany,
    setCompany,
    getCompany,
    updateCompany,
    deleteCompany
} from "./../controllers/companyController";

import {
    authMiddleware,
    ProtectMiddleware,
    ProtectCompanyCreateMiddleware
} from "./../middlewares/authMiddleware"

const router:Router = Router();

router
.route("/company")
.get(authMiddleware,ProtectMiddleware,getAllCompany)
.post(authMiddleware,ProtectCompanyCreateMiddleware,setCompany)

router
.route("/company/:id")
.get(authMiddleware,getCompany)
.patch(updateCompany)
.delete(deleteCompany)



export default router;