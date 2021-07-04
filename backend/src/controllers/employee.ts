import { Request,Response } from 'express';
import { IEmployee } from './../types/employee';
import Employee from './../models/Employee';

const getEmployee = async (req:Request , res:Response):Promise<void> => {
    try{
        const emp:IEmployee[] = await Employee.find();
        res.status(400).json({
            status:"failed",

        })
    }catch(err){
        res.status(400).json({
            status:"failed",
            err
        })
    }
}

const setEmployee = async (req:Request,res:Response):Promise<void> => {
    try{
        const emp:IEmployee = await req.body();
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


export { getEmployee,setEmployee,pingPong }