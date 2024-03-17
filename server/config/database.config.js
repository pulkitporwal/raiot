import mongoose from "mongoose";

export const connectToDatabase = async ()=>{
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGO_URI}/${process.env.MONGO_DB_NAME}`);

        console.log("Database Connected Successfully ✅");

    } catch (error) {
        console.log(`Error Occured while connecting Database: ${error}`)
    }
}