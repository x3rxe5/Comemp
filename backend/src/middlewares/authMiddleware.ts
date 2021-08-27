import { Request,Response,NextFunction } from "express";
import jwt from "jsonwebtoken";
import User from "./../models/Auth";
import responseData from "../utils/factory";
import { promisify } from "util";

const authMiddleware = async (req:Request,res:Response,next:NextFunction):Promise<any> => {
    let token:any;

    if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
        token = req.headers.authorization.split(" ")[1];
    }
    
    await jwt.verify(token,process.env.JWT_SECRET, async (err:any,decoded:any):Promise<void> => {
        if(err){
            const rest = res.status(500).json({
                message:"FAILED",
                error:"Invalid Token",
            })
            next(rest);
        }else{
            try{
                const freshUser = await User.findById(decoded.id);
                req.user = freshUser;
                next();
            }catch(err){
                next();
            }
        }
    })
}

const ProtectMiddleware = async (req:Request,res:Response,next:NextFunction):Promise<any> => {

    console.log(`user -> `,req.user.role);

    if(req.user.role === "super-user"){
        next();
    }else{
        const resMessage:string = "You are not authorized to fetch the user"
        next(responseData(res,404,resMessage));
    }
}

const ProtectCompanyCreateMiddleware = async (req:Request,res:Response,next:NextFunction):Promise<any> => {
    if(req.user.role === "super-user") {
        const resMessage:string = "You are not authorized to create company \n Only Normal User can create company"
        next(responseData(res,404,resMessage));
    }else{
        next();
    }
}


export { authMiddleware,ProtectMiddleware,ProtectCompanyCreateMiddleware }


