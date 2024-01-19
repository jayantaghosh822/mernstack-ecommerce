import React,{ useState } from "react";
import axios from 'axios';
import Layout from "../components/Layout";
import { Routes, Route, useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth";
const SetPassword = ()=>{
    let { id } = useParams();
    let {token} = useParams();
    console.log({ id });
    console.log({token});
    const navigate = useNavigate();
// const [rname , setName]=useState("");
const [spass , setPass]=useState(""); 

    const PasswordChange = (e)=>{
        e.preventDefault();
        axios.post('http://localhost:5000/api/v1/auth/set-password/', {
        
        params: {
            user_id: {id},
            token: {token},
            password : spass,
          }

        }, {
            headers: {
              'Content-Type': 'application/json'
            }
          })
         .then(response => {
           console.log(response);
           if(response.data.success==true){
            navigate('/login');
            
           }
           if(response.data.success==false){
            // setLoginError(response.data.error);
            // invalidUser("invalid");
           }
           // Handle response
         })
    }
   
    return(
        <Layout>
        <main class="main">
        <nav aria-label="breadcrumb" class="breadcrumb-nav border-0 mb-0">
            <div class="container">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                    <li class="breadcrumb-item"><a href="#">Pages</a></li>
                    <li class="breadcrumb-item active" aria-current="page">Login</li>
                </ol>
            </div>
        </nav>
        
        <div class="login-page bg-image pt-8 pb-8 pt-md-12 pb-md-12 pt-lg-17 pb-lg-17" style={{ backgroundImage: "url('assets/images/backgrounds/login-bg.jpg')"}}>
            <div class="container">
                <div class="form-box">
                    <div class="form-tab">
                        <ul class="nav nav-pills nav-fill" role="tablist">
                            <li class="nav-item">
                                <a class="nav-link active" id="signin-tab-2" data-toggle="tab" href="#signin-2" role="tab" aria-controls="signin-2" aria-selected="false">Set Password</a>
                            </li>
                           
                        </ul>
                        <div class="tab-content">
                          
                        
                            
                            <div class="tab-pane fade show active" id="register-2" role="tabpanel" aria-labelledby="register-tab-2">
                                <form action="#" onSubmit={PasswordChange}>

                                   

                                    <div class="form-group">
                                        <label htmlFor="register-pass-2">New Password *</label>
                                        <input type="password" class="form-control" id="set-pass-2" value={spass} onChange={(e)=>setPass(e.target.value)} name="vemail"  required></input>
                                    </div>

                                  
                                    
                                  

                                   

                                    <div class="form-footer">
                                        <button type="submit" class="btn btn-outline-primary-2">
                                            <span>Submit</span>
                                            <i class="icon-long-arrow-right"></i>
                                        </button>

                                        <div class="custom-control custom-checkbox">
                                            <input type="checkbox" class="custom-control-input" id="register-policy-2" required></input>
                                            <label class="custom-control-label" for="register-policy-2">I agree to the <a href="#">privacy policy</a> *</label>
                                        </div>
                                    </div>
                                </form>
                            {/* {errorMessage()}
                            {successMessage()} */}
                                <div class="form-choice">
                                    <p class="text-center">or sign in with</p>
                                    <div class="row">
                                        <div class="col-sm-6">
                                            <a href="#" class="btn btn-login btn-g">
                                                <i class="icon-google"></i>
                                                Login With Google
                                            </a>
                                        </div>
                                        <div class="col-sm-6">
                                            <a href="#" class="btn btn-login  btn-f">
                                                <i class="icon-facebook-f"></i>
                                                Login With Facebook
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
    </Layout>
    );
   
}
export default SetPassword;