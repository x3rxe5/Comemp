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
        company_owner:{
            type: Schema.Types.ObjectId,
            ref: "users",
            required: [true,"user must have unique user name"]
        },
        total_employee:{
            type:Number,
            default:0
        },
        sharedId:{
            type:String,
            unique:true,
            required:[true,"Company must have its shared id"]
        },
        details:String
    },
);

companySchema.index(
    { companyName:1,_id:1},
    { unique:true}    
);

companySchema.virtual('emp_list',{
    ref:"employee",
    localField:'_id',
    foreignField:"companyName"
});

companySchema.set('toObject', { virtuals: true });
companySchema.set('toJSON', { virtuals: true });

export default model<ICompany> ("company",companySchema);


/* +++++++++++++++ Statistic Calculation +++++++++++++++++++++ */

// companySchema.statics.calc = async function(empId):Promise<any>{
//     const stats = this.aggregate([
//         {
//             $match:{ employee: empId },
//             $count:"total employee"
//         }
//     ]);

//     console.log("total employee list -> ",stats);
// }


// companySchema.pre<ICompany>("save",async function(next){
//     const count:number = 0;
//     // this.total_employee = await this.emp_list.map(el => count += 1);

//     next();
// });


// companySchema.post("save",async function(next){
//     // this.constructor.calc(this.emp_list);
//     // this.total_employee = await this.emp_list.length;
// })