import express from 'express';
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.routes.js"


mongoose.connect(process.env.MONGO_URL)
.then(()=>{
 console.log("Connetced to DataBase")
})
.catch((err)=>{
 console.log("Not Connected")
 console.log(err);
})

const  app = express();
app.use(express.json());



app.use('/api/user',userRouter);
app.use("/api/auth",authRouter);

app.listen(3000, ()=>{
    console.log("Server is running port 3000");
   
})
