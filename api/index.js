import express from 'express';
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();


mongoose.connect(process.env.MONGO_URL)
.then(()=>{
 console.log("Connetced to DataBase")
})
.catch((err)=>{
 console.log("Not Connected")
 console.log(err);
})

const  app = express();

app.listen(3000, ()=>{
    console.log("Server is running port 3000");
   
})
