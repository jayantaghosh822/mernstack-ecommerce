import React, { useState } from "react";
import AdminDashboard from "./AdminDashboard";
import { useEffect } from "react";
import { useAuth } from "../../context/auth";
import { Link } from "react-router-dom";
import axios from 'axios';
import "../../assets/css/dashboardcss/bootstrap.min.css";
import "../../assets/css/dashboardcss/responsive.css";
import "../../assets/css/dashboardcss/style.css";
import "../../assets/css/dashboardcss/bootstrap-select.css";
import "../../assets/css/dashboardcss/perfect-scrollbar.css";
import "../../assets/css/dashboardcss/custom.css";
const Users = () =>{
   const [users, setUsers] = useState([]);
   const [user_list_update , listUpdate] = useState("false");
    const [auth,setAuth] = useAuth();
    let my_token = auth.token;
  
     const deleteUser = async(id) =>{
       alert(id);
       await axios.delete('http://localhost:5000/api/v1/auth/user-delete',{
         headers:{
            'User_ID':id
        }
       }).then(response=>{
         listUpdate("true");
         console.log(user_list_update);
       })
       
     }
    useEffect(() => {
       axios.get('http://localhost:5000/api/v1/auth/all-users', {
         headers:{
             'Authorization':my_token
         }
  
         }
           )
          .then(response => {
             setUsers(response.data);
             //console.log(response.data);
             listUpdate("false");
          }).catch(err=>{
           console.log(err);
          })
    } 
      ,[user_list_update]);
  
    return(
        <div>
            <AdminDashboard />
        <div id="content">
        <div class="col-md-12">
        <div class="white_shd full margin_bottom_30">
           <div class="full graph_head">
              <div class="heading1 margin_0">
                 <h2>Responsive Tables</h2>
              </div>
           </div>
           <div class="table_section padding_infor_info">
              <div class="table-responsive-sm">
                 <table class="table">
                    <thead>
                       <tr>
                          <th>#</th>
                          <th>Name</th>
                          <th>Email</th>
                          <th>Phone</th>
                          <th>Address</th>
                          <th>Action</th>
                          {/* <th>Example</th>
                          <th>Example</th>
                          <th>Example</th>
                          <th>Example</th> */}
                       </tr>
                    </thead>
                    <tbody>
                   {console.log(users)}
                     {users.map(user=>(
                        <tr>
                          <td>{user._id}</td>
                          <td>{user.name}</td>
                          <td>{user.email}</td>
                          <td>{user.phone}</td>
                          <td>{user.address}</td>
                          <td><div class="button_block"><Link to={`/dashboard/admin/users/${user._id}`}><button type="button" class="btn cur-p btn-primary">See Profile</button></Link></div></td>
                          <td><div class="button_block"><button type="button" onClick={(e) =>deleteUser(user._id)} class="btn cur-p btn-primary">Delete</button></div></td>
                          {/* <td>USA</td>
                          <td>Female</td>
                          <td>Yes</td>
                          <td>Yes</td>
                          <td>Yes</td>
                          <td>Yes</td> */}
                       </tr>
                     ))}
                       
                    </tbody>
                 </table>
              </div>
           </div>
        </div>
     </div>
     </div>
     </div>
    )
}
export default Users;