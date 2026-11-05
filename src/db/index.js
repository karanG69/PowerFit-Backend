import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(
            process.env.MONGODB_URI
        );

        console.log(
            `Connected to MongoDB: ${connectionInstance.connection.host}`
        );

    } catch (error) {
        console.error("Error while connecting to MongoDB:", error.message);

        throw error;
    }
};

export default connectDB;