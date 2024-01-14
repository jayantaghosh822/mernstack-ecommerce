var express = require('express');
var app = express();
const cors = require('cors');
app.use(cors());
app.use(cors({
    methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
}));
const JWT = require('jsonwebtoken');
const dotenv = require('dotenv');
const crypto = require("crypto");
// get config vars
dotenv.config();

// access config var
const sendEmail = require("../utils/sendEmail");

const userModel = require('../model/userModel.js');
// const { default: Users } = require('../../E-COMMERCE-FRONTEND/src/pages/Admin/Users');
const user = userModel.User;
// const tokenModel = require("../model/tokenModel.js");
// const odel = require('../model/tokenModel.js');
// const token = tokenModel.token;
const registerController = async(req,res) => {
//console.log("controller");

    //console.log(req.body);
 existing_user=await user.findOne({email:req.body.email});
 console.log(existing_user);

 const {name,email,password,phone,address} = req.body;
 let newuser="";
if(!existing_user){

newuser = await new user({name,email,password,phone,address}).save();
console.log(newuser);
res.status(201).send({
  success:true,
  message:"user registered",
  newuser,
})
}
else{
  return res.status(200).json({
    success:false,
    message: "User aready exist with this email address"});
  // res.send('All is good!');
}
// user.name = 'argha';
// user.email = "fsdf@gmail.com";
// user.password = "abcc";
// user.phone = "654646545";
// user.address = "sdgsdsgsdg";
// const doc = await user.save();



}

const get_user_by_id = async(req,res)  => {
   // console.log(req);
    const id = req.body.id;
   const my_user = user.findById(id).then(doc => {
    console.log(doc);
    res.send(doc);
   });
   //console.log(my_user);
   
    
}

const login = async(req,res) =>{
  //console.log(req);
const user_email = req.body.lemail;
console.log(user_email);
const user_pass = req.body.lpass;
console.log(user_pass);
try { 
   //console.log(process.env.TOKEN_SECRET);
    // check if the user exists 
    const my_user = await user.findOne({ email: user_email }); 
    if (my_user) { 
      //check if password matches 
      const result = user_pass === my_user.password; 
      if (result) { 
        try{
      const token = JWT.sign({_id:my_user._id}, process.env.TOKEN_SECRET, { expiresIn: '1d' });
      console.log(token);
      res.status(200).send({
        success:true,
        message:"user logedin",
        user:{
        name:my_user.name,
        email:my_user.email,
        token:token,
        },
       
    })
        }
        catch(error){
            console.log(error);
        }
      
       
        
      } else { 
        res.status(200).json({success:false, error: "password doesn't match" }); 
      } 
    } else { 
      res.status(200).json({success:false,error: "User doesn't exist" }); 
    } 
  } catch (error) { 
    res.status(200).json({ error }); 
  } 
}

const test_controller = (req,res) =>{
    try
    {res.status(201).send({
       
        message:"protected",
       
    })
    }
    catch(error){
        res.send(error);
    }
}

const verify_email = async(req,res) => {
  const tokenModel = require("../model/tokenmodel.js");
  const token = tokenModel.Token;
  const user_email = req.body.vemail;
  let userx="";
  console.log(req.body.email);
if(user_email!=""){
  
  try{

    userx =  await user.findOne({ email: user_email }); 
    if(userx){
      console.log(userx);
      let reset_token = await token.findOne({ userId: userx._id });
        if (!reset_token) {
          reset_token = await new token({
                userId: userx._id,
                token: crypto.randomBytes(32).toString("hex"),
            }).save();
        }
        console.log(process.env.BASE_URL);
        const link = `${process.env.BASE_URL}password-reset/${userx._id}/${reset_token.token}`;
        await sendEmail(user_email, "Password reset", link);
      res.status(201).send({
        success:true,
        User:"Verified",
       message:"password reset link sent to your email account",
    })
    }
    else{
      res.status(201).send({
        success:false,
        User:"Not Verified",
       
    })
    }

  }
  catch(error){
    console.log(error);
    res.status(201).send({
       
      message:"Something Went Wrong",
     
  })
  }
 
}
  
  }

const password_link = async(req,res) =>{
console.log(req.header);
} 

const all_users = async(req,res) =>{
  const my_user = await user.find(); 
  console.log(my_user);
  res.send(my_user);
}

const my_user = async(req,res)=>{
  const user_id = req.headers.user_id;
  console.log(req.headers.user_id);
 const my_user = await user.findOne({ _id: user_id }); 
  console.log(my_user);
  res.send(my_user);
}

const my_user_del = async(req,res)=>{
  const user_id = req.headers.user_id;
  console.log(req.headers.user_id);
 const my_user = await user.deleteOne({ _id: user_id }); 
  console.log(my_user);
  res.send(my_user);
}
module.exports = { registerController , get_user_by_id ,login ,test_controller,verify_email,password_link,all_users,my_user,my_user_del };