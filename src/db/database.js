import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

//database is in another continent , so its better to use async await
const connectDB = async ()=>{

    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MONGODB connected!!! DB host ${connectionInstance.connection.host}`);

    }catch(error){
        console.log("MONGODB connection FAILED",error);
        process.exit(1)
    }
}

export default connectDB;