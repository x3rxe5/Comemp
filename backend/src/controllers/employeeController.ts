import { Request,Response } from 'express';
import { IEmployee } from './../types/employee';
import { ICompany } from "./../types/company";
import Employee from "./../models/Employee";
import Company from "./../models/Company";
import responseData from './../utils/factory';




const getAllEmployee = async (req:Request , res:Response):Promise<void> => {

    try{
        const emp:IEmployee[] = await Employee.find();
        responseData(res,200,emp);
    }catch(err){
        responseData(res,400,err);
    }

}

const getEmployee = async (req:Request , res:Response):Promise<void> => {

    try{
        const emp:IEmployee = await Employee.findById(req.params.id);
        responseData(res,200,emp);
    }catch(err){
        responseData(res,400,err);
    }

}

const setEmployee = async (req:Request,res:Response):Promise<void> => {

    try{

        const sharedID = await Company.find({ sharedId:req.body.companyName });
        if(sharedID){
            console.log("shared id: ", sharedID);
            console.log("User: ", req.body);
            const doc:IEmployee = await Employee.create({
                ...req.body,
                username:req.user._id,
                companyName:sharedID[0]._id
            });
            responseData(res,200,doc);
        }else{
            const err:string = `There is no company with this id`;
            responseData(res,400,err);
        }
    }catch(err){
        console.log(err);
        responseData(res,400,err);
    }

}

const updateEmployee = async (req:Request,res:Response):Promise<void> => {

    try{
        const doc = await Employee.findByIdAndUpdate(req.params.id,req.body,{
            new:true,
            runValidators:true
        });
        responseData(res,200,doc);
    }catch(err){
        responseData(res,400,err);
    }

}

const deleteEmployee = async (req:Request,res:Response):Promise<void> => {

    try{
        const doc = await Employee.findByIdAndDelete(req.params.id);
        responseData(res,200,doc);
    }catch(err){
        responseData(res,400,err);
    }

}

const pingPong = (req:Request,res:Response):void => {
    res.status(200).json({
        status:"success",
        message:"hit perfectly"
    })
}


export { getEmployee,setEmployee,pingPong,deleteEmployee,updateEmployee,getAllEmployee }