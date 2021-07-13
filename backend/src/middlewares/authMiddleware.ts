import {Request,Response,NextFunction} from "express";
import jwt from "jsonwebtoken";
import User from "./../models/Auth";

// interface IUserRequest extends Request{
//     user:string;
// }

const authMiddleware = async (req:Request,res:Response,next:NextFunction):Promise<any> => {
    let token:any;
    if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
        token = req.headers.authorization.split(" ")[1];
    }
    console.log(token);
    if(!token){
        console.log(`error occured`);
    }

    await jwt.verify(token,process.env.JWT_SECRET, async (err:any,decoded:any):Promise<void> => {
        if(err){
            next(new Error("cant find token"));
        }else{
            try{
                const freshUser = await User.findById(decoded.id);
                console.log(`this is user ${freshUser}`);
                req.user = freshUser;
                next();
            }catch(err){
                next(new Error("cant find token"));
            }
        }
    })
}


export { authMiddleware }

    // const decoded = await promisify(jwt.verify)(token,process.env.JWT_SECRET);
    // console.log(decoded);
    // console.log("decoded items -> ",decoded.id);
    // try{
    //     // For Postman
    //     let cookie:string[] = req.headers.cookie.split('');
    //     for(let i=0;i<4;i++){ cookie.shift() }
    //     let token:string = cookie.join("");
    //     if(token){
    //         jwt.verify(token,process.env.JWT_SECRET, async (err,decodedToken) => {
    //             if(err){
    //                 console.log("User does not match");
    //                 next();
    //             }else{
    //                 try{
    //                     const user = await User.findById(decodedToken._id);
    //                     console.log(`User found`,user);
    //                     next();
    //                 }catch(err){
    //                     console.log("User does not match");
    //                     next();
    //                 }
    //             }
    //         })
    //     }
    // }catch(err){
    //     console.log("error occured -> ",err);
    // }
    // next();