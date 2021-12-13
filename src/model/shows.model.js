

const {Schema, model}= require('mongoose')




const showSchema= new Schema({

    timing:{type:String, required:true},
    movie_id:{type:Schema.Types.ObjectId,
        ref:'movie',
        required:true},
    total_seats:{type:Number,required:true},
    screens_id:{type:Schema.Types.ObjectId,required:true}
  

},{
    versionKey:false,
    timestamps:true
})

module.exports=model('show',showSchema)

