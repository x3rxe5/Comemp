import { Response } from "express";

class FactoryClass{

    res:Response;
    statusCode:number;
    body:any;
    message:string;

    constructor(res:Response,statusCode:number,body:any){
        this.res = res;
        this.statusCode = statusCode;
        this.body = body;
    }

    responseDataMethod(dataFrom:any){
        (this.statusCode >= 200 && this.statusCode < 400) ? this.message = "SUCCESS" : this.message = "FAILURE";
        this.res.status(this.statusCode).json({
            status:this.message,
            data:dataFrom
        })
    }

    tryResponseMethod(){
        try{
            return this.responseDataMethod(this.body);
        }catch(err){
            return this.responseDataMethod(err);
        }
    }

}

export default FactoryClass;