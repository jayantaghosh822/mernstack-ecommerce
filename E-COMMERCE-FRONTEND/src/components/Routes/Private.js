import { useState,useEffect } from "react";
import { useAuth } from "../../context/auth";
import { Outlet } from "react-router-dom";
import axios from "axios";
const PrivateRoute = ()=>{
    const [Ok ,setOk] = useState(false);
    const [auth,setAuth] = useAuth();
   // console.log(auth?.token);
    useEffect(()=>{
        const authCheck = async() =>{
           
            const res = await axios.get('http://localhost:5000/api/v1/auth/user-auth',
            {
                headers:{
                    'Authorization':auth?.token,
                }
            }
           )
           //console.log(res);
           if(res.data.ok){
            setOk(true);
           }
           else{
            setOk(false);
           }
        };
    authCheck();
    },[auth?.token])
    return(
        Ok ? <Outlet />: "spinner" 
    );
}
export default PrivateRoute;