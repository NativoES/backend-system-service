import mongoose from "mongoose";

interface Options{
    mongoUrl: string;
    dbName?: string;
}

export class MongoDatabase {
    static async connect(options: Options) {
        const { mongoUrl } = options;
        
        try {
            await mongoose.connect(mongoUrl);
            console.log("MongoDB connected successfully");
        
            return true;
        } catch (error) {
            console.log("Error connecting to MongoDB:", error);
            throw error;
        }
    }
}