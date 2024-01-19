import React, { useState } from "react";
import AdminDashboard from "./AdminDashboard";
import { useEffect } from "react";
import { useAuth } from "../../context/auth";
import axios from 'axios';
import "../../assets/css/dashboardcss/bootstrap.min.css";
import "../../assets/css/dashboardcss/responsive.css";
import "../../assets/css/dashboardcss/style.css";
import "../../assets/css/dashboardcss/bootstrap-select.css";
import "../../assets/css/dashboardcss/perfect-scrollbar.css";
import "../../assets/css/dashboardcss/custom.css";
import { useParams } from "react-router-dom";
const UserProfile = () =>{
   const [user, setUser] = useState([]);
    const [auth,setAuth] = useAuth();
    let my_token = auth.token;
   //  const my_users = async()=>{
       
   //    //console.log(auth.token);
   //    const datas = await axios.get('http://localhost:5000/api/v1/auth/all-users', {
   //     headers:{
   //         'Authorization':my_token
   //     }

   //     }
   //       )
   //      .then(response => {
   //         setUsers(response.data);
   //         //console.log(response.data);
   //      }).catch(err=>{
   //       console.log(err);
   //      })
   //  }
   const params = useParams();
      const my_users = async(id)=>{
       
      //console.log(auth.token);
      const datas = await axios.put('http://localhost:5000/api/v1/auth/user-details/{$id}', {
       headers:{
           'Authorization':my_token
       }

       }
         )
        .then(response => {
         setUser(response.data);
           //console.log(response.data);
        }).catch(err=>{
         console.log(err);
        })
    }
    useEffect(() => {
     
      let user_id = params.id;
       axios.get('http://localhost:5000/api/v1/auth/user-details/', {
         headers:{
             'Authorization':my_token,
             'User_ID' : user_id
         }
  
         }
           )
          .then(response => {
            setUser(response.data);
             //console.log(response.data);
          }).catch(err=>{
           console.log(err);
          })
    } 
      ,[]);
  
    return(
        <div>
            <AdminDashboard />
            <div id="content">
            <div class="midde_cont">
                  <div class="container-fluid">
                     <div class="row column_title">
                        <div class="col-md-12">
                           <div class="page_title">
                              <h2>Profile</h2>
                           </div>
                        </div>
                     </div>
                    
                     <div class="row column1">
                        <div class="col-md-2"></div>
                        <div class="col-md-8">
                           <div class="white_shd full margin_bottom_30">
                              <div class="full graph_head">
                                 <div class="heading1 margin_0">
                                    <h2>User profile</h2>
                                 </div>
                              </div>
                              <div class="full price_table padding_infor_info">
                                 <div class="row">
                                   
                                    <div class="col-lg-12">
                                       <div class="full dis_flex center_text">
                                          <div class="profile_img"><img width="180" class="rounded-circle" src="http://localhost:3000/assets/images/layout_img/user_img.jpg" alt="#" /></div>
                                          <div class="profile_contant">
                                             <div class="contact_inner">
                                                <h3>{user.name}</h3>
                                                <p><strong>About: </strong>Frontend Developer</p>
                                                <ul class="list-unstyled">
                                                   <li><i class="fa fa-envelope-o"></i> : {user.email}</li>
                                                   <li><i class="fa fa-phone"></i> : {user.phone}</li>
                                                   <li><i class="fa fa-envelope-o"></i> : {user.address}</li>
                                                </ul>
                                             </div>
                                             {/* <div class="user_progress_bar">
                                                <div class="progress_bar">
                                                   
                                                   <span class="skill" style={{width:'85%'}}>Web Applications <span class="info_valume">85%</span></span>                   
                                                   <div class="progress skill-bar ">
                                                      <div class="progress-bar progress-bar-animated progress-bar-striped" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" style={{width: '85%'}}>
                                                      </div>
                                                   </div>
                                                   <span class="skill" style={{width: '74%'}}>Website Design <span class="info_valume">78%</span></span>   
                                                   <div class="progress skill-bar">
                                                      <div class="progress-bar progress-bar-animated progress-bar-striped" role="progressbar" aria-valuenow="78" aria-valuemin="0" aria-valuemax="100" style={{width: '78%'}}>
                                                      </div>
                                                   </div>
                                                   <span class="skill" style={{width: '47%'}}>Automation & Testing <span class="info_valume">47%</span></span>
                                                   <div class="progress skill-bar">
                                                      <div class="progress-bar progress-bar-animated progress-bar-striped" role="progressbar" aria-valuenow="54" aria-valuemin="0" aria-valuemax="100" style={{width: '54%'}}>
                                                      </div>
                                                   </div>
                                                   <span class="skill" style={{width: '65%'}}>UI / UX <span class="info_valume">65%</span></span>
                                                   <div class="progress skill-bar">
                                                      <div class="progress-bar progress-bar-animated progress-bar-striped" role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100" style={{width: '64%'}} >
                                                      </div>
                                                   </div>
                                                </div>
                                             </div> */}
                                          </div>
                                       </div>
                                    
                                       <div class="full inner_elements margin_top_30">
                                          <div class="tab_style2">
                                             <div class="tabbar">
                                                <nav>
                                                   <div class="nav nav-tabs" id="nav-tab" role="tablist">
                                                      <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#recent_activity" role="tab" aria-selected="true">Recent Activity</a>
                                                      <a class="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#project_worked" role="tab" aria-selected="false">Projects Worked on</a>
                                                      <a class="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#profile_section" role="tab" aria-selected="false">Profile</a>
                                                   </div>
                                                </nav>
                                                <div class="tab-content" id="nav-tabContent">
                                                   <div class="tab-pane fade show active" id="recent_activity" role="tabpanel" aria-labelledby="nav-home-tab">
                                                      <div class="msg_list_main">
                                                         <ul class="msg_list">
                                                            <li>
                                                               <span><img src="http://localhost:3000/assets/images/layout_img/msg2.png" class="img-responsive" alt="#"/></span>
                                                               <span>
                                                               <span class="name_user">Taison Jack</span>
                                                               <span class="msg_user">Sed ut perspiciatis unde omnis.</span>
                                                               <span class="time_ago">12 min ago</span>
                                                               </span>
                                                            </li>
                                                            <li>
                                                               <span><img src="http://localhost:3000/assets/images/layout_img/msg3.png" class="img-responsive" alt="#" /></span>
                                                               <span>
                                                               <span class="name_user">Mike John</span>
                                                               <span class="msg_user">On the other hand, we denounce.</span>
                                                               <span class="time_ago">12 min ago</span>
                                                               </span>
                                                            </li>
                                                         </ul>
                                                      </div>
                                                   </div>
                                                   <div class="tab-pane fade" id="project_worked" role="tabpanel" aria-labelledby="nav-profile-tab">
                                                      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et 
                                                         quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos 
                                                         qui ratione voluptatem sequi nesciunt.
                                                      </p>
                                                   </div>
                                                   <div class="tab-pane fade" id="profile_section" role="tabpanel" aria-labelledby="nav-contact-tab">
                                                      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et 
                                                         quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos 
                                                         qui ratione voluptatem sequi nesciunt.
                                                      </p>
                                                   </div>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                      
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div class="col-md-2"></div>
                        </div>
                       
                     </div>
                     
                     <div class="container-fluid">
                        <div class="footer">
                           <p>Copyright © 2018 Designed by html.design. All rights reserved.<br></br>
                              Distributed By: <a href="https://themewagon.com/">ThemeWagon</a>
                           </p>
                        </div>
                     </div>
                  </div>
                 
               </div>
               </div>
     </div>
    )
}
export default UserProfile;