import { model,Schema } from "mongoose";
import { ICompany } from "../types/company";

const companySchema:Schema = new Schema({
    companyName:{
        type:String,
        required:[true,"company name must required"]
    },
    address:{
        type:String,
        required:[true,"company name must required"]
    },
    total_employee:{
        type:Number,
        default:0
    },
    emp_list: [
        {
            type:Schema.Types.ObjectId,
            ref:"employee"
        }
    ],
    details:String
});


companySchema.statics.calc = async function(empId):Promise<any>{
    const stats = this.aggregate([
        {
            $match:{ employee: empId },
            $count:"total employee"
        }
    ]);

    console.log("total employee list -> ",stats);
}

// companySchema.pre<ICompany>("save",async function(next){
//     const count:number = 0;
//     // this.total_employee = await this.emp_list.map(el => count += 1);

//     next();
// });



// companySchema.post("save",async function(next){
//     // this.constructor.calc(this.emp_list);
//     // this.total_employee = await this.emp_list.length;
// })

export default model<ICompany> ("company",companySchema);