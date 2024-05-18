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


app.use((err, req, res, next)=>{
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
        success:false,
        statusCode,
        message,
    })
})

app.listen(3000, ()=>{
    console.log("Server is running port 3000");
   
})
