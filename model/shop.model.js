import { DataTypes } from "sequelize";
import sequelize from "../model/dbconfig.js";

let Shop =sequelize.define("shop",{
    id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true
       },

    shopName: {
        type:DataTypes.STRING(64),
        allowNull:false
    },
    
    photo:{
        type:DataTypes.STRING(255),
        allowNull:false
    },

    licenceNo:{
        type:DataTypes.STRING(255),
        allowNull:false,
        unique:true,
    }, 

    licencePhoto:{
        type:DataTypes.STRING(255),
        allowNull:false
    },

    address:{
        type:DataTypes.STRING(500),
        allowNull:false
    },
    shopKeeperId:{
        type:DataTypes.INTEGER,
        allowNull:false
       },
    
    rating:{
        type:DataTypes.FLOAT
    },

    shopStatus:{
        type: DataTypes.STRING(25),
        allowNull:false,
        defaultValue:"pending"
    },
    
    latLong:{
        type: DataTypes.STRING(100),
        allowNull:false,
    }, 

    contact:{
        type:DataTypes.STRING(12),
        validate:{
        isNumeric:true
            }
    }
    
});

sequelize.sync().then(result=>{
    console.log("shop Table Created");
}).catch(err=>{
    console.log(err);
})

export default Shop;