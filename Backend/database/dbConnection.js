import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const dbConnection = () => {
    mongoose.connect(process.env.MONGO_URI, {
        dbName: "MERN-HOSPITAL-MANAGEMENT-APP",
        
    })
    .then(() => {
        console.log("Connected to database");
    })
    .catch((err) => {
        console.error(`Error occurred while connecting to database: ${err}`);
        // Optional: You could throw the error or handle it further here
        // throw err; // Uncomment this if you want to stop execution on error
    });
};
