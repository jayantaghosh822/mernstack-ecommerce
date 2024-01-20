// var path = require('path');
// var filename = path.basename('/Users/Refsnes/demo_path.js');
// const registerControllers = require('E:\\Mern ECommerce\\E-COMMERCE-APIs\\controller\\authController.js');

var express = require('express');
var app = express();
const multer = require('multer');
const cors = require('cors');
var bodyParser = require('body-parser');
app.use(express.json());
app.use(cors());
app.use(cors({
    methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
}));
let upload = multer();
const productModel = require('../model/productModel.js');
const product = productModel.Product;
const token_middleware = require ('../middlewares/authMiddleware');
const registerControllers = require('../controller/productController');
const create_product = registerControllers.create_product;
 const all_products = registerControllers.all_products;
 const del_product = registerControllers.del_product;
 
// const delete_category = registerControllers.delete_category;
// const get_category = registerControllers.get_category;
// const update_category = registerControllers.update_category;
var express = require('express');
const router = express.Router();
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "/img/")
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + "-" + file.originalname)
    },
  })
// const storage = multer.memoryStorage();
const uploadStorage = multer({ storage: storage });
router.get('/all-products',all_products);
router.delete('/product-delete',del_product);
router.post('/add-product',uploadStorage.single('image'),create_product);
router.get('/get-product-photo/:p_id', async(req,res)=>{
  try{
    console.log(req.params.p_id);
     const  product = await productModel.Product.findOne({_id:req.params.p_id}).select("photo");
     res.set('Content-type',product.photo.contentType);
     return res.status(200).send(product.photo.data);
  }
  catch(err){
    console.log(err);
  }
});
// router.get('/all-categories',all_category);
// router.delete('/category-delete',delete_category);
// router.get('/get-category',get_category);
// router.put('/update-category',update_category);
module.exports = {router};