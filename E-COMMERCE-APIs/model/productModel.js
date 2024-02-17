const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema(
    {
   name:{
    type:String,
    //required:true,
   },
   slug:{
    type:String,
    //required:true,
   // unique:true,
   },
   description:{
    type:String,
    //required:true,
   },
    price:{
        type:Number,
        //required:true,
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Category",
        //required:true,
    },
    brand:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Brand",
        //required:true,
    },
    quan:{
        type:Number,
        //required:true,
    },
    photo:{
        data:Buffer,
        contentType:String,
    },
    shipping:{
        type:Boolean,
    }
},
{timestamps:true}
);
const Product = mongoose.model('Product',ProductSchema);

module.exports = { Product };
