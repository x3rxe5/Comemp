import { Document,Mongoose,Types } from "mongoose";
import mongodb = require("mongodb");
const ObjectId = mongodb.ObjectID;

export interface ICompany extends Document{
    _id?:string;
    __v?:string;
    companyName:string;
    address:string;
    total_employee?:number;
    shared_id:string
    emp_list:Types.ObjectId;
    details:string;
}