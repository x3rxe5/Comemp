import { IAuth } from "./../types/auth";
import { model,Schema } from "mongoose";
import validator from "validator";
import bcryptjs from "bcryptjs";

const AuthSchema:Schema = new Schema({
    username:{
        type:String,
        unique:true,
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
        select:false
    },
    confirmPassword:{
        type:String,
        required:[true,"Please provide a password "],
        minlength:6,
        maxlength:50,
    },
    photo:{
        type:String,
        required:[true,"Please provide a image"]
    }
});


AuthSchema.pre<IAuth>("save",async function(next){
    if(this.password === this.confirmPassword){
        this.password = await bcryptjs.hash(this.password,12);
        this.confirmPassword = undefined;
        next();
    }else{
        throw new Error("Password is not matching ");
    }

    next();
});

// AuthSchema.methods.correctPassword = async function(candidatePassword:string,userPassword:string):Promise<boolean> {
//     return await bcryptjs.compare(candidatePassword,userPassword)
// }

export default model<IAuth>("users",AuthSchema);
