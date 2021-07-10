import { model,Schema } from "mongoose";
import { ICompany } from "../types/company";

const companySchema:Schema = new Schema({
    name:{
        type:String,
        required:[true,"company name must required"]
    },
    address:{
        type:String,
        required:[true,"company name must required"]
    },
    total_employee:{ type:Number },
    emp_list: {
        type:Schema.Types.ObjectId,
        ref:"employee"
    },
    details:String
});

// companySchema.pre<ICompany>("save",function(next){
//     this.total_employee = this.emp_list.length;
//     next();
// })

export default model<ICompany> ("company",companySchema);