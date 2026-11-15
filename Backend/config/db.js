import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect("mongodb+srv://shubhamthakur9786_db_user:MZ75tHJeswiN9TJG@clusterbookme.9eetpxl.mongodb.net/BookMee")
    .then(() => {
        console.log("DB Connected successfully ✅")
    })
} 
