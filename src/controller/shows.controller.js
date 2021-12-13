

const express=require('express')

const router=express.Router()

const Show= require('../model/shows.model')





router.get('/:movie_id', async(req,res)=>{

    try{
    
    
    
        const shows = await Show.find({movie_id:req.params.movie_id})
        return res.status(201).json({shows});
    
    }
    
    
    catch(e){
        return res.status(500).json({message:e.message,status:"Failed"})
    }
    
    
    
    });
      









router.post('', async(req,res)=>{

try{



    const show = await Show.create(req.body)
    return res.status(201).json({movie});

}


catch(e){
    return res.status(500).json({message:e.message,status:"Failed"})
}



});
  

module.exports=router;






