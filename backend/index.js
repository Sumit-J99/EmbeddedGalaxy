import express from "express";
import mongoose from "mongoose";
import { dotenv } from "dotenv";

const app = express()
dotenv.config()

const port = process.env.PORT || 3000;
const DB_URI = process.env.MONGO_URI;

try {
    await mongoose.connect(DB_URI)
    console.log("Connected to mongoDB")
} catch (error) {
    console.log(error)
}

app.listen(port, () => {
    console.log(`Server is running on ${port} port number` )
})

