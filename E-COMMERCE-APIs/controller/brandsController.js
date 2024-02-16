var express = require('express');
var app = express();
const cors = require('cors');
app.use(cors());
app.use(cors({
    methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
}));


const brandModel = require('../model/brandModel.js');

const brand = brandModel.Brand;

const create_brand = async(req,res) =>{
console.log(req.body);
const slug = req.body.brandslug;
const name = req.body.brandname;
existing_brand=await brand.findOne({slug:req.body.brandslug});
console.log(existing_brand);
if(existing_brand!=null){
    return res.status(200).send({
        success:false,
        messgae:"Brand Exists With Same Slug"
    })
}
if(slug==null){
   return res.status(200).send({
        success:false,
        messgae:"Brand Must Have A slug",
    })
}
if(name==null){
   return res.status(200).send({
        success:false,
        messgae:"Brand Must Have A name"
    })
}
if(existing_brand==null && slug!=null && name!=null ){
    const name =  req.body.brandname;
    const slug = req.body.brandslug;
    new_brand = await new brand({name,slug}).save();
    console.log(new_brand);
    return res.status(200).send({
        success:true,
        messgae:"brand Added"
    })
}
}
const all_brands = async(req,res) =>{
   const all_brands = await brand.find();
   console.log(all_brands);
   return res.status(200).send({
    success:true,
    result:all_brands
})
}
const delete_brand = async(req,res) =>{
    console.log(req.headers.brand_id);

    const del_brand = await brand.deleteOne({_id:req.headers.brand_id});
    console.log(del_brand);
    if(del_brand){
        return res.status(200).send({
            success:true,
            message:"Brand Deleted Successfully"
        })
    }
   
 }
 const get_brand = async(req,res) =>{
    //console.log(req.headers);
    const brand_id = req.headers.cat_id;
    const get_brand = await brand.findOne({_id:brand_id});
    console.log(get_brand);
    if(get_brand){
        return res.status(200).send({
            success:true,
            result:get_brand
        })
    }
   
 }

 const get_brand_name_by_id = async(req,res) =>{
    //console.log(req.headers);
    const brand_id = req.headers.cat_id;
    console.log(brand_id);
    const get_brand = await brand.findOne({_id:brand_id});
    console.log(get_brand.name);
    if(get_brand){
        return res.status(200).send({
            success:true,
            result:get_brand.name,
        })
    }
   
 }
 const update_brand = async(req,res) =>{
    //console.log(req.headers);
    const brand_id = req.headers.brand_id;
    
    const update = {
        $set: {
          name: req.body.brandname,
          slug:  req.body.brandslug,
        }
      };
    const update_brands = await brand.updateOne({_id:cat_id},update);
    console.log(update_brands);
    if(update_brands){
        return res.status(200).send({
            success:true,
            result:update_brands
        })
    }
   
 }
 
module.exports = {create_brand,all_brands,delete_brand,get_brand,get_brand_name_by_id,update_brand};
