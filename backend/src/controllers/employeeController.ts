import { Request,Response } from 'express';
import { IEmployee } from './../types/employee';
import Employee from './../models/Employee';
import  responseData from "./../utils/factory";



const getEmployee = async (req:Request , res:Response):Promise<void> => {
    try{
        const emp:IEmployee[] = await Employee.find();
        responseData(res,200,emp);
    }catch(err){
        responseData(res,400,err);
    }
}

const setEmployee = async (req:Request,res:Response):Promise<void> => {
    try{
        const emp =  req.body;
        console.log(`Employee ${emp}`)
        const doc:IEmployee = await Employee.create(emp);
        res.status(201).json({
            status:"success",
            doc
        })
    }catch(err){
        console.log(`error from setting up employee -> ${err}`);
        res.status(400).json({
            status:"failed",
            err
        })
    }
}

const updateEmployee = async (req:Request,res:Response):Promise<void> => {
    try{
        const doc = await Employee.findByIdAndUpdate(req.params.id,req.body,{
            new:true,
            runValidators:true
        });
        res.status(201).json({
            status:"success",
            doc
        })
    }catch(err){
        res.status(400).json({
            status:"failed",
            err
        })
    }
}

const deleteEmployee = async (req:Request,res:Response):Promise<void> => {
    try{
        const doc = await Employee.findByIdAndDelete(req.params.id);
        res.status(204).json({
            status:"success",
        })
    }catch(err){
        res.status(400).json({
            status:"failed",
            err
        })
    }
}

const pingPong = (req:Request,res:Response):void => {
    res.status(200).json({
        status:"success",
        message:"hit perfectly"
    })
}


export { getEmployee,setEmployee,pingPong,deleteEmployee,updateEmployee }