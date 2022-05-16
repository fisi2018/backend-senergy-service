const mongoose=require("mongoose");
const usuarioSchema=new mongoose.Schema({
    correo:{
        type:String,
        trim:true,
        required:true,
        unique:true
    },
    password:{
        type:String,
        trim:true,
        required:true
    },
    empresa:{
        type:String,
        trim:true,
        required:true
    },
    ruc:{
        type:Number,
        trim:true,
        required:true,
        length:11
    },
    phone:{
        type:Number,
        trim:true,
        length:9,
        required:true
    },
    web:{
        type:String,
        trim:true,
        maxlength:64
    },
    address:{
        type:String,
        trim:true,
        maxlength:64
    },
    estado:{
        type:String,
        enum:["online","offline","toConfirm"],
        trim:true,
        default:"toConfirm"
    },
    session:{
        type:String,
        unique:true,
        trim:true
    },
    role:{
        type:String,
        enum:["basico","premium"],
        trim:true,
        default:"basico"
    }
},{
    versionKey:false,
    timestamps:true
});

module.exports=mongoose.model("UsuarioModel",usuarioSchema);