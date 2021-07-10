import { Document, Types } from "mongoose";

export interface IEmployee extends Document{
    _id?:string;
    __v?:string;
    fname:string;
    lname:string;
    address:string;
    DOB:Date;
    join_date:Date;
    salary:number;
    role?:string;
    username:Types.ObjectId;
    companyName:Types.ObjectId;
}