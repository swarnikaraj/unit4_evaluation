

const {Schema, model}= require('mongoose')




const moviesSchema= new Schema({

    name:{type:String, required:true},
    actors:[{type:String,required:true, unique:true}],
    languages:[{type:String,required:true}],
    directors:[{type:String,required:true}],
    poster_url:{type:String,required:true}

   

},{
    versionKey:false,
    timestamps:true
})

module.exports=model('movie',moviesSchema)

