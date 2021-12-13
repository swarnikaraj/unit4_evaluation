
const express=require('express')

const router=express.Router()

const User= require('../model/user.model')


const register=async(req,res)=>{
    try{

        let user = await User.findOne({email:req.body.email}).lean().exec()
        
       
        if(user) 
           return res.status(400).json({status:"failed",message:"This email already exist Please login or get a new email"})
       
               
            user = await User.create(req.body)
    }

    catch(e){
        return res.status(500).json({message:e.message,status:"Failed"})
    }
    

}



const login=async(req,res)=>{

    

    try{
    
      //check if email wxist
    
      let user= await User.findOne({email:req.body.email})
    
     if(!user)
        return res.status(400).json({
            status:"failed",
            message:"Please provide correct cred"
        })
    

     if(user.password==req.password){
         res.send("logged in")
     }
     
     
     
     else{
     return res.status(400).json({
         status:"failed",
         message:"Please provide correct email id"})
    
     
    
    }

}
    
    catch(e){
        return res.status(500).json({message:e.message,status:"Failed"})
    }




    }
    










module.exports={register,login}