import { Request, Response } from "express";
import responseData from "./factory"
import jwt from "jsonwebtoken";
import User from "./../models/Auth";

const validateCookie = async (req:Request,res:Response) => {
  let val:boolean = false;
  try{
    const token:string = req.cookies["jwt"];
    await jwt.verify(token,process.env.JWT_SECRET, async (err:any,decoded:any):Promise<void> => {
      if(err){throw new Error(err)}
      try{
        const freshUser = await User.findById(decoded.id);
        if(freshUser){
          val=true;
        }        
      }catch(err){}
    })    
    responseData(res,200,val);
  }catch(err){
    responseData(res,400,val);
  }
}

export default validateCookie;