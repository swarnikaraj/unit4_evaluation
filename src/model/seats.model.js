

const {Schema, model}= require('mongoose')




const seatsSchema= new Schema({

    name:{type:String, required:true},
    theater_id:{type:Schema.Types.ObjectId,
        ref:"show",
        required:true}
    
   

},{
    versionKey:false,
    timestamps:true
})

module.exports=model('seat',seatsSchema)

