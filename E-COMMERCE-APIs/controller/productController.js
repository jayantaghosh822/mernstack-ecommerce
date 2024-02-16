var express = require('express');
var app = express();
const fs = require('fs');
const multer = require('multer');
const cors = require('cors');
var slugify = require('slugify');
// var bodyParser = require('body-parser');
// const Grid = require('gridfs-stream');

const productModel = require('../model/productModel.js');
// var formidable = require('formidable');
const product = productModel.Product;
// app.use(bodyParser.urlencoded({ extended: true })); 



const create_product = async(req,res) =>{
    let existing_product=null;
    // const form = JSON.parse(req.body.formData);
 console.log(req.body);
 console.log(req.file);
 myJSON = JSON.parse(req.body.formData);
// //console.log(myJSON);
 req.body.formData = myJSON;
 console.log("pro_slug",req.body.formData.slug);
 console.log("pro_name",req.body.formData.name);
let slug="";
if(req.body.formData.slug==null){
    slug = slugify( req.body.formData.name, '_');
    req.body.formData.slug = slug;
    console.log("2pro_slug",slug);
    console.log("3pro_slug",req.body.formData.slug);
}
if(req.body.formData.slug==""){
    slug = slugify( req.body.formData.name, '_');
    req.body.formData.slug = slug;
    // console.log("2pro_slug",slug);
    // console.log("3pro_slug",req.body.formData.slug);
}
if( (req.body.formData.slug!="") && (req.body.formData.name!="") ){
// let slug = req.body.formData.slug;
let name = req.body.formData.name;
 existing_product=await product.findOne({slug:req.body.formData.slug});
console.log(existing_product);
if(existing_product!=null){
    return res.status(200).send({
        success:false,
        messgae:"Product Exists With Same Slug"
    })
}
console.log("line 45",slug);
if(slug==null){
   return res.status(200).send({
        success:false,
        messgae:"Product Must Have A slug",
    })
}
if((name==null)||(name=="")){
   return res.status(200).send({
        success:false,
        message:"Product Must Have A name"
    })
}
}
console.log("if existing",existing_product);
if(existing_product==null && req.body.formData.name!=null ){
    console.log("here");
    // const name = req.body.catname;
    // const slug = req.body.catslug;
   
    if( req.body.formData.shipping == 1){
        req.body.formData.shipping=true;
    }
    else{
        req.body.formData.shipping=false;
    }
    const {name,description,slug,price,quan,shipping,category} = req.body.formData;
    //const {image} = req.body.formData.images;
    try{
         new_product = new product({name,description,slug,price,quan,shipping,category});
          new_product.photo.data = fs.readFileSync(req.file.path);
          new_product.photo.contentType =req.file.mimetype;
         await new_product.save();
        //console.log(new_product);
    }
   catch(error){
    console.log(error);
   }
    return res.status(200).send({
        success:true,
        messgae:"Product Added"
    })
}
}
const all_products = async(req,res) =>{
   const all_products = await product.find();
   //console.log(all_products);
   return res.status(200).send({
    success:true,
    result:all_products
})
}
const del_product = async(req,res) =>{
    console.log(req.headers.product_id);

    const del_product = await product.deleteOne({_id:req.headers.product_id});
    console.log(del_product);
    if(del_product){
        return res.status(200).send({
            success:true,
            message:"Product Deleted Successfully"
        })
    }
   
 }
 const get_product = async(req,res) =>{
    //console.log(req.headers);
    const pro_id = req.headers.pro_id;
    const get_products = await category.findOne({_id:pro_id});
    console.log(get_products);
    if(get_products){
        return res.status(200).send({
            success:true,
            result:get_products
        })
    }
   
 }

 const update_category = async(req,res) =>{
    //console.log(req.headers);
    const cat_id = req.headers.cat_id;
    
    const update = {
        $set: {
          name: req.body.catname,
          slug:  req.body.catslug,
        }
      };
    const update_categories = await category.updateOne({_id:cat_id},update);
    console.log(update_categories);
    if(update_categories){
        return res.status(200).send({
            success:true,
            result:update_categories
        })
    }
   
 }
 
module.exports = {create_product,all_products,del_product,get_category,update_category};
