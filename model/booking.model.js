import { DataTypes } from "sequelize";
import sequelize from "../model/dbconfig.js";

let Booking =sequelize.define("booking",{
    id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true
       },
     
    customerId:{
        type:DataTypes.INTEGER,
        allowNull:false
       },  

    shopId:{
        type:DataTypes.INTEGER,
        allowNull:false
       },

    problem:{
        type: DataTypes.STRING(255),
        allowNull:false
    },

    location:{
        type: DataTypes.STRING(255),
        allowNull:false

    },

    vehicleNo:{
        type: DataTypes.STRING(10),
        allowNull:true,
    },

    categoryId:{
        type:DataTypes.INTEGER,
        allowNull:false
       },


    vehicleName:{
        type: DataTypes.STRING(100),
        allowNull:false

    },

    status:{
        type: DataTypes.STRING(16),
        allowNull:false,
        defaultValue:"pending",
    },

    mechanicId:{
        type:DataTypes.INTEGER
       },

    actualProblem:{
        type: DataTypes.STRING
    },

    billAmmount:{
        type: DataTypes.FLOAT,
        validate:{
            isNumeric:true
        }
    },

    date:{
        type: DataTypes.STRING(10),
        // allowNull:false,
        defaultValue: "12/10/2022"
    },

    time:{
        type: DataTypes.STRING(8),
        // allowNull:false
    },

    latLong:{
        type: DataTypes.STRING(100),
        allowNull:false
    }

});

sequelize.sync().then(result=>{
    console.log("Booking Table Created");
}).catch(err=>{
    console.log(err);
})

export default Booking;