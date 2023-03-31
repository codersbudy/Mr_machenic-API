import { DataTypes } from "sequelize";
import sequalize from "./dbconfig.js";
const City=sequalize.define("city",{
    cityName:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    stateId:{
        type:DataTypes.INTEGER,
        allowNull:false,
    }
},{ timestamps: false })
sequalize.sync()
.then(result=>{
    console.log("city table create.....")
})
.catch(err=>{
    console.log(err);
})

export default City;