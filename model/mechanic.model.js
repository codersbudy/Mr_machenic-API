import { DataTypes } from "sequelize";
import sequelize from "../model/dbconfig.js";

let Mechanic =sequelize.define("mechanic",{
    id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true
       },

    mechanicName: {
        type:DataTypes.STRING(64),
        allowNull:false
    },

    email:{
        type:DataTypes.STRING(255),
        allowNull:false,
        unique:true,
        validate:{
           isEmail:true
        }
    },

    photo:{
        type:DataTypes.STRING(255)
    },

    aadharNo:{
        type:DataTypes.STRING(12),
        allowNull:false,
        unique:true,
        validate:{
            isNumeric:true
         }
    },
    
    contact:{
        type:DataTypes.STRING(10),
        allowNull:false,
        unique:true,
        validate:{
        isNumeric:true
            }
    }, 
    
    shopId:{
        type:DataTypes.INTEGER,
       },
    
    rating:{
        type:DataTypes.FLOAT
    },

    password:{
        type:DataTypes.STRING(500),
        allowNull:false
    },

    status:{
        type:DataTypes.STRING(12),
        defaultValue:"free",
        allowNull:false

    }

       
});

sequelize.sync().then(result=>{
    console.log("Mechanic Table Created");
}).catch(err=>{
    console.log(err);
})

export default Mechanic;