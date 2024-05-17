import User from "../models/user.model.js";
import bcrypt from "bcrypt" ;

export const signup = async(req,res)=>{
    const {username,password,email}=req.body;
    const hashPassword = bcrypt.hashSync(password,10)
    const newUser = new User({username,password:hashPassword,email});
   try {
    await newUser.save();
    res.status(201).json('User Created Successfully..')
   } catch (error) {
    res.status(500).json(error.message)
   }
}