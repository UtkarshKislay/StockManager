import express from 'express';
import User from '../modals/user.js';
import bcrypt from "bcrypt";
const router=express.Router();

router.post('/login',async(req,res)=>{
    
    try{
       const userName=req.body.userName;
       const pass=req.body.password;
        const user=await User.findOne({userName:userName}).lean();
        if(user){
          const validity=await bcrypt.compare(pass,user.password);
          const {password, ...userWithoutPassword } = user;
          return validity?res.status(200).json(userWithoutPassword):res.status(400).json("wrong passoword");
        }else{
          return  res.status(401).json("user doesn't exist");
        }
    }catch(err){
       return res.status(500).json({message:err.message});
    }
});

router.post('/register',async(req,res)=>{
    const salt=await bcrypt.genSalt(10);
    try{
        const data= req.body;
        const userName=data.userName;
        const password=data.password;
        const confirmPassword=data.confirmPassword;
        const email=data.email;
        const role=data.role;
        if(password!=confirmPassword){
            res.status(403).json("Password and confirm Password should same");
        }
        const user=await User.findOne({email:email});
        const userName_exist=await User.findOne({userName:userName});
        // console.log(user);
        if(user){
            return res.status(201).json("User already exist");
        }else{
            if(userName_exist){
                // console.log(userName_exist);
               return res.status(202).json("Username already exist");
            }
            const hashPassword=await bcrypt.hash(password,salt);
            const newUser=new User({
                userName,
                email,
                password:hashPassword,
                role,
            });
            // console.log(newUser);
            await newUser.save();
           return res.status(200).json(newUser);
        }
    }catch(err){
       return res.status(500).json({message:err.message});
    }
});



export default router;