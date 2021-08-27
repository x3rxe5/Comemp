import { Request,Response } from 'express';
import { IAuth, IResponseAuth } from './../types/auth';
import Auth from './../models/Auth';
import  responseData from "./../utils/factory";
import jwt from "jsonwebtoken";
import bcryptjs from "bcryptjs";

// type IResAuth = Pick<IAuth, "email" | "username" | "_id" | "password" | "photo" | "role" >;


const signToken = (id:string):any => {
    return jwt.sign({ id }, process.env.JWT_SECRET,{
        expiresIn:process.env.JWT_EXPIRES_IN
    })
}

const createSendToken = (user:any,res:Response):any => {        
    const token = signToken(user._id);
    const cookieOptions = {
        expires: new Date( Date.now() + Number(process.env.JWT_COOKIE_EXPIRES_IN) * 24*60*60*1000),
        httpOnly:true
    }

    res.cookie("jwt",token,cookieOptions);
    user.password = undefined;

    const userObj = {
        token,
        user
    }
    responseData(res,201,userObj);
}

const signup = async (req:Request,res:Response):Promise<void> => {
    try{
        const user:IAuth = await Auth.create(req.body);
        createSendToken(user,res);
    }catch(err){
        console.log("This is error -> ",err);
        responseData(res,400,err);
    }
}

const checkPassword = async (str1:string, str2:string): Promise<any> => {
    return await bcryptjs.compare(str1,str2);
}

const login = async (req:Request,res:Response):Promise<void> => {
    const { email,password } = await req.body;

    if(!email || !password){
       responseData(res,400,"cant find email and password")
    }
   
    const user = await Auth.find({ email }).select("+password -__v");

    
    
    const passwordChecker:boolean = await checkPassword(password,user[0].password);

    const errString:string = "user or password does not match !!! \n Please try again"
    if(!user){ responseData(res,404,errString); }
    else if(!passwordChecker){ responseData(res,404,errString); }
    else{ createSendToken(user[0],res); }

}

const logout = async (req:Request,res:Response):Promise<void> => {
    try{
        createSendToken("Garbage String",res);
    }catch(err){
        responseData(res,400,err)
    }
}


export { login,signup };
