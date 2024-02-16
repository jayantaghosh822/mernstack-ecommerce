const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema(
    {
   name:{
    type:String,
    required:true,
    trim:true,
   },
   slug:{
    type:String,
    required:true,
    unique:true,
   },
  
}

);
const Brand = mongoose.model('Brand',UserSchema);

module.exports = { Brand };
