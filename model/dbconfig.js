import { response } from "express";
import { Sequelize } from "sequelize";

 const sequalize=new Sequelize("Mr_Mechanic","root","Abhi@123",{
    host:"localhost",
    dialect:"mysql"
});

sequalize.authenticate()
.then(result=>{
    console.log("database connected.....");
})
.catch(err=>{
    console.log(err);
    console.log("database not connect");
});

export default sequalize;