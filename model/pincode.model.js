import { DataTypes } from "sequelize";
import sequalize from "./dbconfig.js";
const Pincode=sequalize.define("pincode",{
    pincode :{
        type:DataTypes.INTEGER,
        allowNull:false,
    },
    cityName:{
        type:DataTypes.STRING,
        allowNull:false,
    },
  
},{ timestamps: false })
sequalize.sync()
.then(result=>{
    console.log("pin code table created......")
})
.catch(err=>{
    console.log(err);
})

export default Pincode;