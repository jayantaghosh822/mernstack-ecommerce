import { useState,useEffect } from "react";
import { useAuth } from "../../context/auth";
import { Outlet } from "react-router-dom";
import axios from "axios";
const AdminRoute = ()=>{
    const [Ok ,setOk] = useState(false);
    const [auth,setAuth] = useAuth();
    // console.log(auth.token);
    useEffect(()=>{
        const authCheck = async() =>{
        //    console.log("here");
           try{
            const res = await axios.get('http://localhost:5000/api/v1/auth/admin-auth',
            {
                headers:{
                    'Authorization':auth.token,
                }
            }
           )
        
           if(res.data.ok){
            setOk(true);
           }
           else{
            setOk(false);
           }
        }
        catch(err){
    console.log(err);
        }
           }
            
    authCheck();
    },)
    return(
        Ok ? <Outlet />: "spinner" 
    );
}
export default AdminRoute;