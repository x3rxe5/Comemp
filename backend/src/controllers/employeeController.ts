import { Request,Response } from 'express';
import { IEmployee } from './../types/employee';
import Employee from './../models/Employee';
import FactoryClass from './../utils/FactoryClass';
let obj:any;

const getAllEmployee = async (req:Request , res:Response):Promise<void> => {
    const emp:IEmployee[] = await Employee.find();
    obj = new FactoryClass(res,200,emp);
    obj.tryResponseMethod();
}

const getEmployee = async (req:Request , res:Response):Promise<void> => {
    const emp:IEmployee = await Employee.findById(req.params.id);
    const f = new FactoryClass(res,200,emp);
    f.tryResponseMethod();
}

const setEmployee = async (req:Request,res:Response):Promise<void> => {
    const doc:IEmployee = await Employee.create(req.body);
    const f = new FactoryClass(res,200,doc);
    f.tryResponseMethod();
}

const updateEmployee = async (req:Request,res:Response):Promise<void> => {
    const doc = await Employee.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
        runValidators:true
    });
    const f = new FactoryClass(res,200,doc);
    f.tryResponseMethod();
}

const deleteEmployee = async (req:Request,res:Response):Promise<void> => {
    const doc = await Employee.findByIdAndDelete(req.params.id);
    const f = new FactoryClass(res,200,doc);
    f.tryResponseMethod();
}

const pingPong = (req:Request,res:Response):void => {
    res.status(200).json({
        status:"success",
        message:"hit perfectly"
    })
}


export { getEmployee,setEmployee,pingPong,deleteEmployee,updateEmployee,getAllEmployee }