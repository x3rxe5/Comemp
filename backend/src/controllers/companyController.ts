import { Request,Response } from 'express';
import { ICompany } from './../types/company';
import Company from './../models/Company';
import responseData from "./../utils/factory";
import { nanoid } from 'nanoid';


const getAllCompany = async (req:Request,res:Response):Promise<void> => {
    try{
        const list:ICompany[] = await Company.find().populate({
            path:"company_owner",
            select:"username photo _id"
        });
        responseData(res,200,list);
    }catch(err){
        responseData(res,400,err)
    }
}

const setCompany = async (req:Request,res:Response):Promise<void> => {
    try{
        const company = await Company.create({...req.body,company_owner:req.user._id,sharedId:nanoid(10)});
        responseData(res,201,company);
    }catch(err){
        responseData(res,400,err)
    }
}

const getCompany = async (req:Request,res:Response):Promise<void> => {
    try{
        const list = await Company.findById(req.params.id).populate({
            path:'emp_list',
            select:"fname lname"
        });
        responseData(res,200,list);
    }catch(err){
        responseData(res,400,err)
    }
}

const updateCompany = async (req:Request,res:Response):Promise<void> => {
    try{
        const list = await Company.findByIdAndUpdate(req.params.id,req.body,{
            new:true,
            runValidators:true
        });
        responseData(res,200,list);
    }catch(err){
        responseData(res,400,err)
    }
}

const deleteCompany = async (req:Request,res:Response):Promise<void> => {
    try{
        const list = await Company.findByIdAndDelete(req.params.id);
        responseData(res,200,list);
    }catch(err){
        responseData(res,400,err)
    }
}






export { getAllCompany,getCompany,setCompany,deleteCompany,updateCompany };

