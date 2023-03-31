import { response } from "express";
import Jwt from "jsonwebtoken"
export const verifyToken=(request,response,next)=>{
    let token=request.headers.authorization;
    console.log(token);
    try{
        console.log("inner try block")
         if(!token){
            console.log("token not found");
             throw new Error();
         }
         console.log("token is ",token);
        //  token=token.split(" ")[1];
         console.log("after slipt token ",token);
         Jwt.verify(token,"coderHub");
         console.log("Mausam");
         console.log(Jwt.verify(token,"coderHub"));
         
         next();
    }
    catch(err){
        console.log(err);
        return response.status(401).json({err:"authorization failed",status:false});
    }
}

export default Jwt;
