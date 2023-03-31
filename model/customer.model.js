// import sequalize from "./dbconfig.js";
import { DataTypes } from "sequelize";
import sequelize from "./dbconfig.js";

let Customer =sequelize.define("customer",{
    id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true
       },

    customerName: {
        type:DataTypes.STRING,
        allowNull:false
    },

    email:{
        type:DataTypes.STRING,
        validate:{
           isEmail:true
        }
    },
    
    contact:{
        type:DataTypes.STRING,
        unique:true,
        allowNull:false,
        validate:{
        isNumeric:true
            }
    }, 

    password:{
        type:DataTypes.STRING,
        allowNull:false
    },

    image:{
        type:DataTypes.STRING(255)
    },

    rating:{
        type:DataTypes.FLOAT
    }
    
});

sequelize.sync().then(result=>{
    console.log("Customer Table Created");
}).catch(err=>{
    console.log(err);
})

export default Customer;