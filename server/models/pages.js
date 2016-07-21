var mongoose=require('./../lib/mongoose'),
    Schema=mongoose.Schema;

var schema= new Schema({
    name:{
        type:String,
        required:true

    },
    title:{
        type:String,
        required:true
    },
    link:{
        type:String,
        required:true,
        unique:true

    }
});

module.exports=mongoose.model("Pages",schema);