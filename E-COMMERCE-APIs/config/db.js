// import mongoose from 'mongoose';
var express = require('express');
const mongoose = require('mongoose');
const uri = "mongodb+srv://arghag43:hF92jwZc6S0vqBu5@cluster0.xg3lddq.mongodb.net/ecommerce?retryWrites=true&w=majority";
// mongoose.connect('mongodb://127.0.0.1:27017/ecommerce');
const Connect_db = async()=>{
    try{
       const connect = await mongoose.connect(uri);
       console.log("connected");
    }
    catch(error){
        console.log(error);
    }
}
// const UserSchema = new mongoose.Schema({
//     name:String,
//     password:String,
// });
// const User = mongoose.model('User',UserSchema);

module.exports = { Connect_db };