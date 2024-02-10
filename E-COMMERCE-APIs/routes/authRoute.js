// var path = require('path');
// var filename = path.basename('/Users/Refsnes/demo_path.js');
// const registerControllers = require('E:\\Mern ECommerce\\E-COMMERCE-APIs\\controller\\authController.js');
const userModel = require('../model/userModel.js');
const user = userModel.User;
const tokenModel = require("../model/tokenmodel.js");
const token = tokenModel.Token;
const token_middleware = require ('../middlewares/authMiddleware');
const registerControllers = require('../controller/authController');
const crypto = require("crypto");
// const Joi = require("joi");
const my_user_by_id = registerControllers.get_user_by_id;
// const data_base = require("../config/db");
const my_controller = registerControllers.registerController;
const test_controller = registerControllers.test_controller;
const login = registerControllers.login;
const verifyEmail = registerControllers.verify_email;
const mail_password_link = registerControllers.password_link;
const all_user = registerControllers.all_users;
const my_user = registerControllers.my_user;
const my_user_delete = registerControllers.my_user_del;
var express = require('express');
const router = express.Router();
router.post('/register',my_controller);
router.get('/user-id',my_user_by_id);
router.post('/login',login);
router.get('/test_controller',token_middleware.requireSignIn ,token_middleware.is_admin,test_controller);
router.get('/user-auth' , token_middleware.requireSignIn,(req,res)=>{
    //console.log(req);
    res.status(200).send({ok:true});
});
router.get('/admin-auth' , token_middleware.requireSignIn,token_middleware.is_admin,(req,res)=>{
    console.log(req);
    res.status(200).send({ok:true});
});
router.get('/all-users',all_user);
router.post('/verify-email',verifyEmail);
router.post('/reset-password-mail',mail_password_link);
router.post('/set-password', async (req, res) => {
    try {
        // const schema = Joi.object({ password: Joi.string().required() });
        // const { error } = schema.validate(req.body);
        // if (error) return res.status(400).send(error.details[0].message);
        console.log(req.body.params);
        const userX = await user.findById(req.body.params.user_id.id);
        if (!userX) return res.status(200).send("invalid link or expired user");

        const find_token = await token.findOne({
            userId: req.body.params.user_id.id,
            token: req.body.params.token.token,
        });
        if (!find_token) return res.status(200).send("Invalid link or expired");

        userX.password = req.body.params.password;
        await userX.save();
        await find_token.deleteOne();

        return res.status(200).send(
            {success:true,
            message:"invalid link or expired user",
            }
            );
    } catch (error) {
        res.send("An error occured");
        console.log(error);
    }
});
router.get('/user-details/',my_user);
router.delete('/user-delete/',my_user_delete);
module.exports = {router};
