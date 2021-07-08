import { IAuth } from "./../types/auth";
import { model,Schema } from "mongoose";
import validator from "validator";
import bcryptjs from "bcryptjs";

const AuthSchema:Schema = new Schema({
    username:{
        type:String,
        required:[true,"user name must required"]
    },
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
});


AuthSchema.pre<IAuth>("save",async function(next){
    if(this.password === this.confirmPassword){
        this.password = await bcryptjs.hash(this.password,12);
        this.confirmPassword = undefined;
        next();
    }else{
        throw new Error("Password is not matching ");
    }
})

export default model<IAuth>("users",AuthSchema);