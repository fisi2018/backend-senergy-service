const mongoose=require("mongoose");
const {ObjectId}=mongoose.Schema;
const licitacionSchema=new mongoose.Schema({
    title:{
        type:String,
        trim:true,
        required:true
    },
    descripcion:{
        type:String,
        trim:true
    },
    estado:{
        type:String,
        trim:true,
        required:true
    },
    fechaFin:{
        type:String,
        trim:true
    },
    usuario:{
        type:ObjectId,
        ref:"UsuarioModel"
    },
    participantes:[
        {
            type:ObjectId,
            ref:"ProveedorModel"
        }
    ]
},{
    timestamps:true,
    versionKey:false
});
module.exports=mongoose.model("LicitacionModel",licitacionSchema);