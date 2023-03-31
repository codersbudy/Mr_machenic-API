import { response } from "express";
import Category from "../model/category.model.js";

export const save = async (request, response, next)=>{
    try{
        console.log(request.body.categoryName);
       let find = Category.findOne({
        where: {
            categoryName: request.body.categoryName
        }
       });

       if(find){
         return response.status(200).json({messages: "category already exist", status: true});
       }
       console.log(request.body.categoryName);
       let category = await Category.create({'categoryName':request.body.categoryName});
         return response.status(200).json({ category: category, status: true });
      }
      catch (err) {
        return response.status(500).json({ error: "Internal Server Error", status: false });
    }
}


export const list = (request, response, next)=>{
    let find = Category.findAll({
        attributes: {exclude: ['createdAt', 'updatedAt']}
    })
    .then(result=>{
        return response.status(200).json({find: result, status: true});
    })
    .catch(err=>{
        return response.status(500).  json({error: "Internal server error", status: false})
    })
}


export const remove = async (request, response, next)=>{
    try {
    let find =await Category.findOne({
        where:{
             categoryName: request.body.categoryName
        }
    });
    if(find){
        let remove = await Category.destroy({
            where: {
           'categoryName':request.body.categoryName
        }
         });
        return response.status(200).json({ remove: remove, status: true });
    }
      return response.status(401).json({error: "bad request error", status: false}) 
 }
 catch(err){
    return response.status(500).json({ error: "Internal Server Error", status: false });
 }
}



