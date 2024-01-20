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
app.use(cors({origin: process.env.CLIENT_URL})); 
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


const userModel = require('./model/userModel.js');
const user = userModel.User;
// app.post("/del_users",async(req,res)=>{
//     console.log("here");
//     var myquery = { name: /^S/ };
//     const deleteManyResult = await user.deleteMany(myquery);
//     console.log(deleteManyResult);
// })



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

 app.get("/",async(req,res)=>{
   //res.send('Hello World');
   const my_user = await user.find(); 
  // console.log(my_user);
   res.send(my_user);
   // var myquery = { name: /^S/ };
   // const deleteManyResult = await user.deleteMany(myquery);
   // console.log(deleteManyResult);
 });
