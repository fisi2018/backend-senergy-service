const mongoose=require("mongoose");
const codeSchema=new mongoose.Schema({
    code:{
        type:String,
        length:6,
        unique:true,
        required:true
    },
    expiredTime:{
        type:Date,
        default:Date.now(),
        expires:300
    },
    user:{
        type:String,
        trim:true,
        required:true,
        unique:true
    }
},{
    versionKey:false,
    timestamps:true
});
module.exports=mongoose.model("CodeModel",codeSchema);