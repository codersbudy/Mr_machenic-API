import { response } from "express";
import Booking from "../model/booking.model.js";


export const request=async(request,response,next)=>{
    Booking.create({'customerId':request.body.customerId,'shopId':request.body.shopId,'problem':request.body.problem,'location':request.body.location,'vehicleNo':request.body.vehicleNo,'categoryId':request.body.categoryId,'vehicleName':request.body.vehicleName,'time':request.body.time,'latLong':request.body.latLong})
        // return response.status(200).json({create : create , update:update,status:true})
        .then(result=>{
            console.log(result);
            return response.status(200).json({result:result,status:false})
        })
        .catch(err=>{
            console.log(err);
            return response.status(500).json({err:"internal server error",status:false});
        })
  
    
}
