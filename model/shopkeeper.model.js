// import sequalize from "./dbconfig.js";
import { DataTypes } from "sequelize";
import sequelize from "./dbconfig.js";

let Shopkeeper = sequelize.define("shopkeeper",{
    id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true
       },

    shopkeeperName: {
        type:DataTypes.STRING,
        allowNull:false
    },

    email:{
        type:DataTypes.STRING,
        defaultValue:null,
        validate:{
           isEmail:true
        }
    },
    
    contact:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true,
        validate:{
        isNumeric:true
            }
    }, 

    password:{
        type:DataTypes.STRING,
        allowNull:false
    },

    photo:{
        type:DataTypes.STRING(255),
        defaultValue:null
    },

    aadharNo:{
        type:DataTypes.STRING,
        unique:true,
        allowNull:false,

    }
    
});

sequelize.sync().then(result=>{
    console.log("Shopkeeper Table Created");
}).catch(err=>{
    console.log(err);
})

export default Shopkeeper;