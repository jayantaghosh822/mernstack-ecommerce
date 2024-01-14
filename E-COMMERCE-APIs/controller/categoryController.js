var express = require('express');
var app = express();
const cors = require('cors');
app.use(cors());
app.use(cors({
    methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
}));


const categoryModel = require('../model/categoryModel.js');

const category = categoryModel.Category;

const create_category = async(req,res) =>{
console.log(req.body);
const slug = req.body.catslug;
const name = req.body.catname;
existing_category=await category.findOne({slug:req.body.catslug});
console.log(existing_category);
if(existing_category!=null){
    return res.status(200).send({
        success:false,
        messgae:"Category Exists With Same Slug"
    })
}
if(slug==null){
   return res.status(200).send({
        success:false,
        messgae:"Category Must Have A slug",
    })
}
if(name==null){
   return res.status(200).send({
        success:false,
        messgae:"Category Must Have A name"
    })
}
if(existing_category==null && slug!=null && name!=null ){
    const name = req.body.catname;
    const slug = req.body.catslug;
    new_catgory = await new category({name,slug}).save();
    console.log(new_catgory);
    return res.status(200).send({
        success:true,
        messgae:"Category Added"
    })
}
}
const all_category = async(req,res) =>{
   const all_categories = await category.find();
   console.log(all_categories);
   return res.status(200).send({
    success:true,
    result:all_categories
})
}
const delete_category = async(req,res) =>{
    console.log(req.headers.category_id);

    const del_categories = await category.deleteOne({_id:req.headers.category_id});
    console.log(del_categories);
    if(del_categories){
        return res.status(200).send({
            success:true,
            message:"Category Deleted Successfully"
        })
    }
   
 }
 const get_category = async(req,res) =>{
    //console.log(req.headers);
    const cat_id = req.headers.cat_id;
    const get_categories = await category.findOne({_id:cat_id});
    console.log(get_categories);
    if(get_categories){
        return res.status(200).send({
            success:true,
            result:get_categories
        })
    }
   
 }

 const get_category_name_by_id = async(req,res) =>{
    //console.log(req.headers);
    const cat_id = req.headers.cat_id;
    console.log(cat_id);
    const get_categories = await category.findOne({_id:cat_id});
    console.log(get_categories.name);
    if(get_categories){
        return res.status(200).send({
            success:true,
            result:get_categories.name,
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
 
module.exports = {create_category,all_category,delete_category,get_category,get_category_name_by_id,update_category};