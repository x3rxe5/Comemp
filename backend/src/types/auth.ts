import { Document } from "mongoose";

export interface IAuth extends Document{
    _id?:string;
    __v?:string;
    username:string;
    email:string;
    password:string;
    confirmPassword?:string;
    photo?:string;
}

// export interface IResponseAuth extends Document{

//     username:string;
//     email:string;
//     password:string;
//     confirmPassword?:string;
//     photo?:string;

// }