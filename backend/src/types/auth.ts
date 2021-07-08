import { Document } from "mongoose";

export interface IAuth extends Document{
    username:string;
    email:string;
    password:string;
    confirmPassword?:string;
}