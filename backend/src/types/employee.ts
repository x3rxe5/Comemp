import { Document } from "mongoose";

export interface IEmployee extends Document{
    email:string;
    password:string;
    confirmPassword?:string;
    fname:string;
    lname:string;
    address:string;
    DOB:Date;
    join_date:Date;
}