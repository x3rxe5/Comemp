import { Document } from "mongoose";

export interface IAuth extends Document{
    _id?:string;
    __v?:string;
    username:string;
    email:string;
    password:string;
    confirmPassword?:string;
    photo?:string;
    role:string;
}

export interface IResponseAuth extends Document{
    role:string
    _id:string
    email:string;
    password:string;
    username:string
    photo?:string;

}