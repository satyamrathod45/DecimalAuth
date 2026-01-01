import mongoose from "mongoose";
export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDb connection successfull");
        
        
    }catch(e){
        console.log("Connection Failed");
        console.log(e);
        process.exit(1)
    }
}