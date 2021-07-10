import { Request,Response } from 'express';
import { IAuth } from '../types/auth';
import Auth from '../models/Auth';
import responseData from "../utils/factory";


const allUser = async (req:Request,res:Response):Promise<void> => {
    try{
        const user:IAuth[] = await Auth.find();
        responseData(res,200,user);
    }catch(err){
        responseData(res,400,err);
    }
}

const getUser = async(req:Request,res:Response):Promise<void> => {
    try{
        const user = await Auth.findById(req.params.id);
        responseData(res,201,user);
    }catch(err){
        responseData(res,400,err);
    }
}

const deleteUser = async (req:Request,res:Response):Promise<void> => {
    try{
        const user = await Auth.findByIdAndDelete(req.params.id);
        responseData(res,201,user);
    }catch(err){
        responseData(res,400,err);
    }
}

const updateUser  = async (req:Request,res:Response):Promise<void> => {
    try{
        const user = await Auth.findByIdAndUpdate(req.params.id,req.body,{
            new:true,
            runValidators:true
        });
        responseData(res,201,user);
    }catch(err){
        responseData(res,400,err);
    }
}

export { allUser,deleteUser,getUser,updateUser };