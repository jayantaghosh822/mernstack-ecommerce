import {useState  ,useContext ,createContext} from'react';
import { useEffect } from "react";
const AuthContext = createContext();
const user_storage = JSON.parse(localStorage.getItem('user'));
const AuthProvider = ({children}) =>{
    const [auth,setAuth] = useState({
        user:null,
        token:"",
    });
    useEffect(() => {
        if(user_storage!=null){
        setAuth({
            ...auth,
            user:user_storage.name,
            token:user_storage.token,
            email:user_storage.email,
        })
      }
    } 
      ,[]);
    return(
        <AuthContext.Provider value={[auth,setAuth]}>
            {children}
        </AuthContext.Provider>

    );
}
const useAuth = () => useContext(AuthContext);
export {AuthProvider,useAuth};