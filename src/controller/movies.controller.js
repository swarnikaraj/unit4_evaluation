

const express=require('express')

const router=express.Router()

const Movie= require('../model/movies.model')

const upload = require("../middlewares/uploads")


router.post('', async(req,res)=>{

try{



    const movie = await Movie.create(req.body)
    return res.status(201).json({movie});

}


catch(e){
    return res.status(500).json({message:e.message,status:"Failed"})
}



});
  





router.get('/actor', async(req,res)=>{

    try{
    
    
    
        const movie = await Movie.find({actors:{$in:[req.params.actor]}})
        
        

        return res.status(201).json({movie});
    
    }
    
    
    catch(e){
        return res.status(500).json({message:e.message,status:"Failed"})
    }
    
    
    
    });







module.exports=router;






