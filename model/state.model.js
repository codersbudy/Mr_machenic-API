
import { DataTypes } from "sequelize";
import sequalize from "./dbconfig.js";
const State=sequalize.define("state",{
    stateName:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true,
    },
}, { timestamps: false });


sequalize.sync()
.then(result=>{
    console.log("state table created....");
})
.catch(err=>{
    console.log(err);
})

export default State;