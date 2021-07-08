import { IEmployee } from "./../types/employee";
import { model,Schema } from "mongoose";

const employeeSchema: Schema = new Schema({
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
        required:[true," Please provide an DOB"]
    }

});



export default model<IEmployee>("employee",employeeSchema);