import React,{ useState } from "react";
import axios from 'axios';
import Layout from "../components/Layout";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth";
import { useHistory } from "react-router-dom";
const Login = ()=>{

const [rname , setName]=useState("");
const [remail , setEmail]=useState(""); 
const [rphone , setPhone]=useState(""); 
const [rpassword,setPassword]=useState("");
const [raddress,setAddress]=useState("");
const [lemail,setLoginEmail]=useState("");
const [lpass,setLoginPassword]=useState("");
// const [register_user ,setUser] = useState("");
const [registered_user_name ,setRegistereName] = useState("");
  // States for checking the errors
const [submitted, setSubmitted] = useState(false);
const [error, setError] = useState(false);
const [loginerrormessage, setLoginError] = useState("");

const [auth,setAuth]=useAuth();

const regiterationhandleSubmit = (e) => {
    e.preventDefault();
    console.log(rname);
    const name=rname;
    const email=remail;
    const phone=rphone;
    const password=rpassword;
    const address=raddress;
    axios.post('http://localhost:5000/api/v1/auth/register', {name,email,phone,password,address}, {
       headers: {
         'Content-Type': 'application/json'
       }
     })
    .then(response => {
      console.log(response);
      if(response.data.success==true){
        // setUser("User Is Registered Successfully");
        //setRegistereName(response.data.newuser.name);
        setSubmitted(true);
        
        setTimeout(() => {
            setSubmitted(false);
          }, 5000);
        setError(false);
        
       
       
      }
      if(response.data.success==false){
        setError(true);
         setTimeout(() => {
            setError(false);
          }, 5000);
        setSubmitted(false);
      }
      // Handle response
    })
   }
   //console.log(auth);
   const navigate = useNavigate();
    const loginhandleSubmit = (e)=>{
        e.preventDefault();
        axios.post('http://localhost:5000/api/v1/auth/login', {lemail,lpass}, {
            headers: {
              'Content-Type': 'application/json'
            }
          })
         .then(response => {
           //console.log(response);
           if(response.data.success==true){
           // invalidUser("valid");
             // setUser("User Is Registered Successfully");
             //setRegistereName(response.data.newuser.name);
            //  setSubmitted(true);
            //  setTimeout(() => {
            //      setSubmitted(false);
            //    }, 5000);
            //  setError(false);
            localStorage.setItem('user', JSON.stringify(response.data.user)); 
            setAuth({
                ...auth,
                token:response.data.user.token,
                user:response.data.user.name,
                email:response.data.user.email,
                
            })
         
            navigate('/');
           
            
           }
           if(response.data.success==false){
            setLoginError(response.data.error);
            invalidUser("invalid");
           }
           // Handle response
         })
    }
    // Showing success message
    const successMessage = () => {
      
            
        return (
            <div
                className="success"
                style={{
                    display: submitted ? '' : 'none',
                }}>
                <h1>User {registered_user_name} successfully registered!!</h1>
            </div>
        );
    };
 
    // Showing error message if error is true
    const errorMessage = () => {
        return (
            <div
                className="error"
                style={{
                    display: error ? '' : 'none',
                }}>
                <h1>Try With Another Email id</h1>
            </div>
        );
    };

    const invalidUser=(message)=>{
        //console.log(message);
        
        return (
            <div
                className="error"
                >
                <h1>{loginerrormessage}</h1>
            </div>
        );
   
    }
    return(
        <Layout>
        <main className="main">
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
                                <a class="nav-link" id="signin-tab-2" data-toggle="tab" href="#signin-2" role="tab" aria-controls="signin-2" aria-selected="false">Sign In</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" id="register-tab-2" data-toggle="tab" href="#register-2" role="tab" aria-controls="register-2" aria-selected="true">Register</a>
                            </li>
                        </ul>
                        <div class="tab-content">
                            <div class="tab-pane fade" id="signin-2" role="tabpanel" aria-labelledby="signin-tab-2">
                                <form onSubmit={loginhandleSubmit}>
                                    <div class="form-group">
                                        <label htmlFor="singin-email-2">Username or email address *</label>
                                        <input type="text" class="form-control" id="singin-email-2" name="singin-email" value={lemail} onChange={(e)=>setLoginEmail(e.target.value)} required></input>
                                    </div>

                                    <div class="form-group">
                                        <label htmlFor="singin-password-2">Password *</label>
                                        <input type="password" class="form-control" id="singin-password-2" name="singin-password" value={lpass} onChange={(e)=>setLoginPassword(e.target.value)} required></input>
                                    </div>

                                    <div class="form-footer">
                                        <button type="submit" class="btn btn-outline-primary-2">
                                            <span>LOG IN</span>
                                            <i class="icon-long-arrow-right"></i>
                                        </button>

                                        <div class="custom-control custom-checkbox">
                                            <input type="checkbox" class="custom-control-input" id="signin-remember-2"></input>
                                            <label class="custom-control-label" for="signin-remember-2">Remember Me</label>
                                        </div>
                                        <Link to="/forgot-password" class="forgot-link">Forgot Your Password?</Link>
                                        {/* <a href="#" class="forgot-link"></a> */}
                                    </div>
                                    {invalidUser()}
                                </form>
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
                                            <a href="#" class="btn btn-login btn-f">
                                                <i class="icon-facebook-f"></i>
                                                Login With Facebook
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {errorMessage()}
                            {successMessage()}
                            
                            <div class="tab-pane fade show active" id="register-2" role="tabpanel" aria-labelledby="register-tab-2">
                                <form action="#" onSubmit={regiterationhandleSubmit}>

                                    <div class="form-group">
                                        <label htmlFor="register-name">Full Name *</label>
                                        <input type="text" class="form-control" id="register-name-2" name="rname" value={rname} onChange={(e)=>setName(e.target.value)} required></input>
                                    </div>

                                    <div class="form-group">
                                        <label htmlFor="register-email-2">Your email address *</label>
                                        <input type="email" class="form-control" id="register-email-2" name="remail" value={remail} onChange={(e)=>setEmail(e.target.value)} required></input>
                                    </div>

                                    <div class="form-group">
                                        <label htmlFor="register-password-2">Password *</label>
                                        <input type="password" class="form-control" id="register-password-2" name="rpassword" value={rpassword} onChange={(e)=>setPassword(e.target.value)} required></input>
                                    </div>
                                    
                                    <div class="form-group">
                                        <label htmlFor="register-password-2">Phone Number *</label>
                                        <input type="text" class="form-control" id="register-phone-2" name="rphone" value={rphone} onChange={(e)=>setPhone(e.target.value)} required></input>
                                    </div>

                                    <div class="form-group">
                                        <label htmlFor="register-password-2">Address *</label>
                                        <input type="text" class="form-control" id="register-address-2" name="raddress" value={raddress} onChange={(e)=>setAddress(e.target.value)} required></input>
                                    </div>

                                    <div class="form-footer">
                                        <button type="submit" class="btn btn-outline-primary-2">
                                            <span>SIGN UP</span>
                                            <i class="icon-long-arrow-right"></i>
                                        </button>

                                        <div class="custom-control custom-checkbox">
                                            <input type="checkbox" class="custom-control-input" id="register-policy-2" required></input>
                                            <label class="custom-control-label" for="register-policy-2">I agree to the <a href="#">privacy policy</a> *</label>
                                        </div>
                                    </div>
                                </form>
                            {errorMessage()}
                            {successMessage()}
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
export default Login;