import { IEmployee } from "./../types/employee";
import { model,Schema } from "mongoose";

const employeeSchema: Schema = new Schema({
        companyName: {
            type: Schema.Types.ObjectId,
            ref: "company",
            required: [true,"user must have company name" ]
        },
        username: {
            type: Schema.Types.ObjectId,
            ref: "users",
            required: [true,"user must have unique user name"]
        },
        fname:{
            type:String,
            required:[true,"Please provide a first name"],
        },
        lname:{
            type:String,
            required:[true,"Please provide a last name "],
        },
        address:{
            type:String,
            required:[true,"Please provide a address "],
        },
        DOB:{
            type:Date,
            default:Date.now(),
            required:[true," Please provide an DOB"]
        },
        join_date:{
            type:Date,
            default:Date.now(),
            required:[true," Please provide an Join date"]
        },
        role:{
            type:String,
            enum:["employee","project-manager"],
            default:"employee",
            required:[true,"Please Provide user role"],
        },
        salary:{
            type:Number,
            required:[true,"Please Provide Salary"],
            min:10000,
            max:200000,
        }
    },
    {
        toJSON: { virtuals: true },
        toObject: { virtuals: true }
    }
);



export default model<IEmployee>("employee",employeeSchema);