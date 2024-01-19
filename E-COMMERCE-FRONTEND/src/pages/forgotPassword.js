import React,{ useState } from "react";
import axios from 'axios';
import Layout from "../components/Layout";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth";
import { useHistory } from "react-router-dom";
const ForgotPassword = ()=>{

// const [rname , setName]=useState("");
const [vemail , setEmail]=useState(""); 
// const [rphone , setPhone]=useState(""); 
// const [rpassword,setPassword]=useState("");
// const [raddress,setAddress]=useState("");
// const [lemail,setLoginEmail]=useState("");
// const [lpass,setLoginPassword]=useState("");
// // const [register_user ,setUser] = useState("");
const [email_sent_message ,setmessage] = useState("");
//   // States for checking the errors
// const [submitted, setSubmitted] = useState(false);
// const [error, setError] = useState(false);
const [loginerrormessage, setLoginError] = useState("");

// const [auths,setAuths]=useAuth();

// const regiterationhandleSubmit = (e) => {
//     e.preventDefault();
//     console.log(rname);
//     const name=rname;
//     const email=remail;
//     const phone=rphone;
//     const password=rpassword;
//     const address=raddress;
//     axios.post('http://localhost:5000/api/v1/auth/register', {name,email,phone,password,address}, {
//        headers: {
//          'Content-Type': 'application/json'
//        }
//      })
//     .then(response => {
//       console.log(response);
//       if(response.data.success==true){
//         // setUser("User Is Registered Successfully");
//         //setRegistereName(response.data.newuser.name);
//         setSubmitted(true);
        
//         setTimeout(() => {
//             setSubmitted(false);
//           }, 5000);
//         setError(false);
        
       
       
//       }
//       if(response.data.success==false){
//         setError(true);
//          setTimeout(() => {
//             setError(false);
//           }, 5000);
//         setSubmitted(false);
//       }
//       // Handle response
//     })
//    }
   const navigate = useNavigate();
    const VerifyEmailSubmit = (e)=>{
        e.preventDefault();
        axios.post('http://localhost:5000/api/v1/auth/verify-email', {vemail}, {
            headers: {
              'Content-Type': 'application/json'
            }
          })
         .then(response => {
           console.log(response);
           if(response.data.success==true){
           // invalidUser("valid");
             // setUser("User Is Registered Successfully");
             //setRegistereName(response.data.newuser.name);
            //  setSubmitted(true);
            //  setTimeout(() => {
            //      setSubmitted(false);
            //    }, 5000);
            //  setError(false);
            // localStorage.setItem('user', JSON.stringify(response.data.user)); 
            // setAuths({
            //     ...auths,
            //     user:response.data.user.name,
            //     token:response.data.token,
            // })
           
            //  navigate('/set-password');
            setmessage(response.data.message);
            successMessage(response.data.message);
           }
           if(response.data.success==false){
            setLoginError(response.data.User);
            invalidUser("invalid");
           }
           // Handle response
         })
    }
    // Showing success message
    const successMessage = (message) => {
        console.log(message);
            
        return (
            <div
                className="success"
                >
                <h1> {email_sent_message} </h1>
            </div>
        );
    };
 
    // Showing error message if error is true
    // const errorMessage = () => {
    //     return (
    //         <div
    //             className="error"
    //             style={{
    //                 display: error ? '' : 'none',
    //             }}>
    //             <h1>Try With Another Email id</h1>
    //         </div>
    //     );
    // };

    const invalidUser=(message)=>{
        console.log(message);
        
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
                                <a class="nav-link active" id="signin-tab-2" data-toggle="tab" href="#signin-2" role="tab" aria-controls="signin-2" aria-selected="false">Verify Email</a>
                            </li>
                           
                        </ul>
                        <div class="tab-content">
                          
                        
                      
                            <div class="tab-pane fade show active" id="register-2" role="tabpanel" aria-labelledby="register-tab-2">
                                <form action="#" onSubmit={VerifyEmailSubmit}>

                                   

                                    <div class="form-group">
                                        <label htmlFor="register-email-2">Your email address *</label>
                                        <input type="email" class="form-control" id="register-email-2" value={vemail} onChange={(e)=>setEmail(e.target.value)} name="vemail"  required></input>
                                    </div>

                                  
                                    
                                  

                                   

                                    <div class="form-footer">
                                        <button type="submit" class="btn btn-outline-primary-2">
                                            <span>Verify</span>
                                            <i class="icon-long-arrow-right"></i>
                                        </button>

                                        <div class="custom-control custom-checkbox">
                                            <input type="checkbox" class="custom-control-input" id="register-policy-2" required></input>
                                            <label class="custom-control-label" for="register-policy-2">I agree to the <a href="#">privacy policy</a> *</label>
                                        </div>
                                    </div>
                                </form>
                                {invalidUser()}
                            {/* {errorMessage()} */}
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
export default ForgotPassword;