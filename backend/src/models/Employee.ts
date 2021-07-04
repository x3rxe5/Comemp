import { IEmployee } from "./../types/employee";
import { model,Schema } from "mongoose";
import validator from "validator";
import bcryptjs from "bcryptjs";

const employeeSchema: Schema = new Schema({
    email :{
        type:String,
        unique:true,
        required:[true,"Please provide an email "],
        validate:[validator.isEmail,"Please provide a valid email"],
    },
    password:{
        type:String,
        required:[true,"Please provide a password "],
        minlength:6,
        maxlength:50,
    },
    confirmPassword:{
        type:String,
        required:[true,"Please provide a password "],
        minlength:6,
        maxlength:50,
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
        required:[true," Please provide an DOB"]
    },
    join_date:{
        type:Date,
        default:Date.now(),
        required:[true," Please provide an DOB"]
    }

});

employeeSchema.pre<IEmployee>("save",async function(next){
    if(this.password === this.confirmPassword){
        this.password = await bcryptjs.hash(this.password,12);
        this.confirmPassword = undefined;
        next();
    }else{
        throw new Error("Password is not matching ");
    }
})


export default model<IEmployee>("employee",employeeSchema);