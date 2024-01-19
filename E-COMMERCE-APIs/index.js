// import express from 'express';
// import connect_db from './config/db';
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(express.static('public'));
app.use(express.json());
app.use(bodyParser.urlencoded({
    extended: false
  }));
const cors = require('cors');

app.use(cors({
    origin:["https://mernstack-ecommerce-seven.vercel.app/"],
    methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH'],
    credentials:true
}));
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
    );
    next();
  });
const data_base = require("./config/db");
data_base.Connect_db();
 const authRoutes = require("./routes/authRoute");
 const categoryRoutes = require("./routes/categoryRoutes");
 const productRoutes = require("./routes/productRoute");
// app.post('/api/v1/auth/register', (req, res) => { 
//     console.log(req);
// }); 
app.use("/api/v1/auth/",authRoutes.router);
app.use("/api/v1/auth/",categoryRoutes.router);
app.use("/api/v1/auth/",productRoutes.router);
var ejs = require('ejs');

const userModel = require('./model/userModel.js');
const user = userModel.User;
app.post("/del_users",async(req,res)=>{
    console.log("here");
    var myquery = { name: /^S/ };
    const deleteManyResult = await user.deleteMany(myquery);
    console.log(deleteManyResult);
})



var bodyParser = require('body-parser');
app.listen(5000);

app.use(express.static('public'));
app.use(bodyParser.urlencoded({
    extended: false
  }));
  app.use(express.json());
app.set('view engine','ejs');
var session = require('express-session');



require("dotenv").config(); 
 
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY); 

const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/ecommerce');

// const UserSchema = new mongoose.Schema({
//     name:String,
//     password:String,
// });
// const User = mongoose.model('User',UserSchema);


// app.engine('html', require('ejs').renderFile);
app.post('/demo',async(req,res)=>{
    // let data = {
    //     name: 'Akashdeep',
    //     hobbies: ['playing football', 'playing chess', 'cycling']
    // }
    //res.send("Hello");
    let user = new User();
    user.name = req.body.fname;
    user.password = req.body.pass;
    const doc = await user.save();
    console.log(doc);
    console.log("5000");
    console.log(req.body);
    res.json(req.body);
   
});

app.get('/users',async(req,res)=>{
    
    try{
        const data = await User.find();
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
   
});


app.delete('/delete_user', async(req, res) => {
    console.log("DELETE Request Called for /api endpoint")
    //res.send("DELETE Request Called")
    console.log(req.query.id);
    
        const userFound = await User.findByIdAndRemove(req.query.id);
        if(userFound){
           console.log(userFound);
           res.json("user deleted");

        }

 });
 app.put('/edit_user', async(req, res) => {
    console.log("Edit Request Called for /api endpoint")
    //res.send("DELETE Request Called")
    console.log(req.body.params.data._id);
    await User.findByIdAndUpdate(req.body.params.data._id, 
        {
           $set : {
                name: req.body.params.data.name,
              
                password: req.body.params.data.passwordcd ,
            }
        },
       
        );
      

 });
 
 app.get('/user_find/', async function(req, res){ 
    console.log(req.query);
   const my_user = await User.findById(req.query.id);
   res.json(my_user);
  }); 