import { Response } from "express";

export default function responseData (res:Response,statusCode:number,data?:any):any{
    let statusString:string = "FAILED";
    if(statusCode >= 200 && statusCode <400 ) statusString = "SUCCESS"
    return res.status(statusCode).json({
        status:statusString,
        data
    })
}

