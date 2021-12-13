

const express=require('express')

const router=express.Router()

const Show= require('../model/shows.model')





router.get('/:id', async(req,res)=>{

    try{
    
    
    
        const shows = await Show.findById(req.params.id)
        return res.status(201).json({shows});
    
    }
    
    
    catch(e){
        return res.status(500).json({message:e.message,status:"Failed"})
    }
    
    
    
    });
      






  

module.exports=router;






