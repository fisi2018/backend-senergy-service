const mongoose=require("mongoose");
const {ObjectId}=mongoose.Schema;
const proveedorSchema=new mongoose.Schema({
    razSocial:{
        type:String,
        trim:true,
        required:true
    },
    role:{
        type:String,
        enum:["basico","premium"],
        trim:true,
        required:true,
        default:"basico"
    },
    pais:{
        type:String,
        trim:true
    },
    web:{
        type:String,
        trim:true
    },
    correo:{
        type:String,
        trim:true,
        required:true
    },
    phone:{
        type:Number,
        required:true,
        length:9,
        trim:true
    },
    password:{
        type:String,
        trim:true,
        required:true
    },
    licitaciones:[
        {
            type:ObjectId,
            ref:"LicitacionModel"
        }
    ],
    estado:{
        type:String,
        enum:["online","offline","toConfirm"],
        required:true,
        default:"toConfirm"
    }
},{
    versionKey:false,
    timestamps:true
});
module.exports=mongoose.model("ProveedorModel",proveedorSchema);