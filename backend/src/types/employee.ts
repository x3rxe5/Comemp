import { Document } from "mongoose";

export interface IEmployee extends Document{
    fname:string;
    lname:string;
    address:string;
    DOB:Date;
    join_date:Date;
}