import React from "react";
import Layout from "../../components/Layout";
import { Link } from "react-router-dom";
import "../../assets/css/dashboardcss/bootstrap.min.css";
import "../../assets/css/dashboardcss/responsive.css";
import "../../assets/css/dashboardcss/style.css";
import "../../assets/css/dashboardcss/bootstrap-select.css";
import "../../assets/css/dashboardcss/perfect-scrollbar.css";
import "../../assets/css/dashboardcss/custom.css";
const AdminDashboard = () =>{
   let my_user = JSON.parse(localStorage.getItem('user'));
   console.log(my_user.name);
    return(
        // <Layout>
    <div className="dashboard dashboard_1">
      <div className="full_container">
         <div className="inner_container">
           
            <nav id="sidebar" style={{backgroundImage:"url(/assets/images/layout_img/pattern.png)"}}>
               <div className="sidebar_blog_1">
                  <div className="sidebar-header">
                     <div className="logo_section">
                        <a href="index.html"><img className="logo_icon img-responsive" src="images/logo/logo_icon.png" alt="#" /></a>
                     </div>
                  </div>
                  <div className="sidebar_user_info">
                     <div className="icon_setting"></div>
                     <div className="user_profle_side">
                        <div className="user_img"><img className="img-responsive" src="/assets/images/layout_img/user_img.jpg" alt="#" /></div>
                        <div className="user_info">
                           <h6>{my_user.name}</h6>
                           <p><span className="online_animation"></span> Online</p>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="sidebar_blog_2">
                  <h4>General</h4>
                  <ul className="list-unstyled components">
                     <li className="active">
                        <a href="#dashboard" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle"><i className="fa fa-dashboard yellow_color"></i> <span>YOUR USERS</span></a>
                        <ul className="collapse list-unstyled" id="dashboard">
                           <li>
                           <Link to="/dashboard/admin/users"> <span>USER ACTIONS</span></Link> 
                           </li>
                          
                        </ul>
                     </li>
                     {/* <li><a href="widgets.html"><i className="fa fa-clock-o orange_color"></i> <span></span></a></li> */}
                     <li>
                        <a href="#element" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle"><i className="fa fa-diamond purple_color"></i> <span>Products</span></a>
                        <ul className="collapse list-unstyled" id="element">
                           <li><Link to="/dashboard/admin/product/add-product"><span>Add Product</span></Link></li>
                           <li><Link to="/dashboard/admin/products"><span>All Products</span></Link></li>
                           {/* <li><a href="media_gallery.html"> <span>All Products</span></a></li> */}
                        </ul>
                     </li>
                     {/* <li><a href="tables.html"><i className="fa fa-table purple_color2"></i> <span>Tables</span></a></li> */}
                     <li>
                        <a href="#apps" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle"><i className="fa fa-object-group blue2_color"></i> <span>Product Categories</span></a>
                        <ul className="collapse list-unstyled" id="apps">
                           <li><Link to="/dashboard/admin/categories"><span>Add Category</span></Link></li>
                           {/* <li><a href="calendar.html"> <span>All Categories</span></a></li> */}
                        </ul>
                     </li>
                     <li><a href="price.html"><i className="fa fa-briefcase blue1_color"></i> <span>Pricing Tables</span></a></li>
                     <li>
                        <a href="contact.html">
                        <i className="fa fa-paper-plane red_color"></i> <span>Contact</span></a>
                     </li>
                     <li className="active">
                        <a href="#additional_page" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle"><i className="fa fa-clone yellow_color"></i> <span>Additional Pages</span></a>
                        <ul className="collapse list-unstyled" id="additional_page">
                           <li>
                              <a href="profile.html"> <span>Profile</span></a>
                           </li>
                           <li>
                              <a href="project.html"> <span>Projects</span></a>
                           </li>
                           <li>
                              <a href="login.html"> <span>Login</span></a>
                           </li>
                           <li>
                              <a href="404_error.html"> <span>404 Error</span></a>
                           </li>
                        </ul>
                     </li>
                     <li><a href="map.html"><i className="fa fa-map purple_color2"></i> <span>Map</span></a></li>
                     <li><a href="charts.html"><i className="fa fa-bar-chart-o green_color"></i> <span>Charts</span></a></li>
                     <li><a href="settings.html"><i className="fa fa-cog yellow_color"></i> <span>Settings</span></a></li>
                  </ul>
               </div>
            </nav>
           
            {/* <div id="content">
              
               <div className="topbar">
                  <nav className="navbar navbar-expand-lg navbar-light">
                     <div className="full">
                        <button type="button" id="sidebarCollapse" className="sidebar_toggle"><i className="fa fa-bars"></i></button>
                        <div className="logo_section">
                           <a href="index.html"><img className="img-responsive" src="images/logo/logo.png" alt="#" /></a>
                        </div>
                        <div className="right_topbar">
                           <div className="icon_info">
                              <ul>
                                 <li><a href="#"><i className="fa fa-bell-o"></i><span className="badge">2</span></a></li>
                                 <li><a href="#"><i className="fa fa-question-circle"></i></a></li>
                                 <li><a href="#"><i className="fa fa-envelope-o"></i><span className="badge">3</span></a></li>
                              </ul>
                              <ul className="user_profile_dd">
                                 <li>
                                    <a className="dropdown-toggle" data-toggle="dropdown"><img className="img-responsive rounded-circle" src="images/layout_img/user_img.jpg" alt="#" /><span className="name_user">John David</span></a>
                                    <div className="dropdown-menu">
                                       <a className="dropdown-item" href="profile.html">My Profile</a>
                                       <a className="dropdown-item" href="settings.html">Settings</a>
                                       <a className="dropdown-item" href="help.html">Help</a>
                                       <a className="dropdown-item" href="#"><span>Log Out</span> <i className="fa fa-sign-out"></i></a>
                                    </div>
                                 </li>
                              </ul>
                           </div>
                        </div>
                     </div>
                  </nav>
               </div>
             
               <div className="midde_cont">
                  <div className="container-fluid">
                     <div className="row column_title">
                        <div className="col-md-12">
                           <div className="page_title">
                              <h2>Dashboard</h2>
                           </div>
                        </div>
                     </div>
                     <div className="row column1">
                        <div className="col-md-6 col-lg-3">
                           <div className="full counter_section margin_bottom_30">
                              <div className="couter_icon">
                                 <div> 
                                    <i className="fa fa-user yellow_color"></i>
                                 </div>
                              </div>
                              <div className="counter_no">
                                 <div>
                                    <p className="total_no">2500</p>
                                    <p className="head_couter">Welcome</p>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                           <div className="full counter_section margin_bottom_30">
                              <div className="couter_icon">
                                 <div> 
                                    <i className="fa fa-clock-o blue1_color"></i>
                                 </div>
                              </div>
                              <div className="counter_no">
                                 <div>
                                    <p className="total_no">123.50</p>
                                    <p className="head_couter">Average Time</p>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                           <div className="full counter_section margin_bottom_30">
                              <div className="couter_icon">
                                 <div> 
                                    <i className="fa fa-cloud-download green_color"></i>
                                 </div>
                              </div>
                              <div className="counter_no">
                                 <div>
                                    <p className="total_no">1,805</p>
                                    <p className="head_couter">Collections</p>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                           <div className="full counter_section margin_bottom_30">
                              <div className="couter_icon">
                                 <div> 
                                    <i className="fa fa-comments-o red_color"></i>
                                 </div>
                              </div>
                              <div className="counter_no">
                                 <div>
                                    <p className="total_no">54</p>
                                    <p className="head_couter">Comments</p>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="row column1 social_media_section">
                        <div className="col-md-6 col-lg-3">
                           <div className="full socile_icons fb margin_bottom_30">
                              <div className="social_icon">
                                 <i className="fa fa-facebook"></i>
                              </div>
                              <div className="social_cont">
                                 <ul>
                                    <li>
                                       <span><strong>35k</strong></span>
                                       <span>Friends</span>
                                    </li>
                                    <li>
                                       <span><strong>128</strong></span>
                                       <span>Feeds</span>
                                    </li>
                                 </ul>
                              </div>
                           </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                           <div className="full socile_icons tw margin_bottom_30">
                              <div className="social_icon">
                                 <i className="fa fa-twitter"></i>
                              </div>
                              <div className="social_cont">
                                 <ul>
                                    <li>
                                       <span><strong>584k</strong></span>
                                       <span>Followers</span>
                                    </li>
                                    <li>
                                       <span><strong>978</strong></span>
                                       <span>Tweets</span>
                                    </li>
                                 </ul>
                              </div>
                           </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                           <div className="full socile_icons linked margin_bottom_30">
                              <div className="social_icon">
                                 <i className="fa fa-linkedin"></i>
                              </div>
                              <div className="social_cont">
                                 <ul>
                                    <li>
                                       <span><strong>758+</strong></span>
                                       <span>Contacts</span>
                                    </li>
                                    <li>
                                       <span><strong>365</strong></span>
                                       <span>Feeds</span>
                                    </li>
                                 </ul>
                              </div>
                           </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                           <div className="full socile_icons google_p margin_bottom_30">
                              <div className="social_icon">
                                 <i className="fa fa-google-plus"></i>
                              </div>
                              <div className="social_cont">
                                 <ul>
                                    <li>
                                       <span><strong>450</strong></span>
                                       <span>Followers</span>
                                    </li>
                                    <li>
                                       <span><strong>57</strong></span>
                                       <span>Circles</span>
                                    </li>
                                 </ul>
                              </div>
                           </div>
                        </div>
                     </div>
                     
                     <div className="row column2 graph margin_bottom_30">
                        <div className="col-md-l2 col-lg-12">
                           <div className="white_shd full">
                              <div className="full graph_head">
                                 <div className="heading1 margin_0">
                                    <h2>Extra Area Chart</h2>
                                 </div>
                              </div>
                              <div className="full graph_revenue">
                                 <div className="row">
                                    <div className="col-md-12">
                                       <div className="content">
                                          <div className="area_chart">
                                             <canvas height="120" id="canvas"></canvas>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                    
                     <div className="row column3">
                       
                        <div className="col-md-6">
                           <div className="dark_bg full margin_bottom_30">
                              <div className="full graph_head">
                                 <div className="heading1 margin_0">
                                    <h2>Testimonial</h2>
                                 </div>
                              </div>
                              <div className="full graph_revenue">
                                 <div className="row">
                                    <div className="col-md-12">
                                       <div className="content testimonial">
                                          <div id="testimonial_slider" className="carousel slide" data-ride="carousel">
                                            
                                             <div className="carousel-inner">
                                                <div className="item carousel-item active">
                                                   <div className="img-box"><img src="images/layout_img/user_img.jpg" alt=""></img></div>
                                                   <p className="testimonial">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae..</p>
                                                   <p className="overview"><b>Michael Stuart</b>Seo Founder</p>
                                                </div>
                                                <div className="item carousel-item">
                                                   <div className="img-box"><img src="images/layout_img/user_img.jpg" alt=""></img></div>
                                                   <p className="testimonial">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae..</p>
                                                   <p className="overview"><b>Michael Stuart</b>Seo Founder</p>
                                                </div>
                                                <div className="item carousel-item">
                                                   <div className="img-box"><img src="images/layout_img/user_img.jpg" alt=""></img></div>
                                                   <p className="testimonial">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae..</p>
                                                   <p className="overview"><b>Michael Stuart</b>Seo Founder</p>
                                                </div>
                                             </div>
                                             
                                             <a className="carousel-control left carousel-control-prev" href="#testimonial_slider" data-slide="prev">
                                             <i className="fa fa-angle-left"></i>
                                             </a>
                                             <a className="carousel-control right carousel-control-next" href="#testimonial_slider" data-slide="next">
                                             <i className="fa fa-angle-right"></i>
                                             </a>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        
                        <div className="col-md-6">
                           <div className="white_shd full margin_bottom_30">
                              <div className="full graph_head">
                                 <div className="heading1 margin_0">
                                    <h2>Progress Bar</h2>
                                 </div>
                              </div>
                              <div className="full progress_bar_inner">
                                 <div className="row">
                                    <div className="col-md-12">
                                       <div className="progress_bar">
                                       
                                          <span className="skill" style={{width:'73%'}}>Facebook <span className="info_valume">73%</span></span>                  
                                          <div className="progress skill-bar ">
                                             <div className="progress-bar progress-bar-animated progress-bar-striped" role="progressbar" aria-valuenow="73" aria-valuemin="0" aria-valuemax="100" style={{width: '73%'}}>
                                             </div>
                                          </div>
                                          <span className="skill" style={{width:'62%'}}>Twitter <span className="info_valume">62%</span></span>   
                                          <div className="progress skill-bar">
                                             <div className="progress-bar progress-bar-animated progress-bar-striped" role="progressbar" aria-valuenow="62" aria-valuemin="0" aria-valuemax="100" style={{width:'62%' }}>
                                             </div>
                                          </div>
                                          <span className="skill" style={{width:'54%'}}>Instagram <span className="info_valume">54%</span></span>
                                          <div className="progress skill-bar">
                                             <div className="progress-bar progress-bar-animated progress-bar-striped" role="progressbar" aria-valuenow="54" aria-valuemin="0" aria-valuemax="100" style={{width: '54%'}}>
                                             </div>
                                          </div>
                                          <span className="skill" style={{width:'82%'}}>Google plus <span className="info_valume">82%</span></span>
                                          <div className="progress skill-bar">
                                             <div className="progress-bar progress-bar-animated progress-bar-striped" role="progressbar" aria-valuenow="82" aria-valuemin="0" aria-valuemax="100" style={{width: '82%'}}>
                                             </div>
                                          </div>
                                          <span className="skill" style={{width:'48%'}}>Other <span className="info_valume">48%</span></span>
                                          <div className="progress skill-bar">
                                             <div className="progress-bar progress-bar-animated progress-bar-striped" role="progressbar" aria-valuenow="48" aria-valuemin="0" aria-valuemax="100" style={{width: '48%'}}>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                       
                     </div>
                     <div className="row column4 graph">
                        <div className="col-md-6 margin_bottom_30">
                           <div className="dash_blog">
                              <div className="dash_blog_inner">
                                 <div className="dash_head">
                                    <h3><span><i className="fa fa-calendar"></i> 6 July 2018</span><span className="plus_green_bt"><a href="#">+</a></span></h3>
                                 </div>
                                 <div className="list_cont">
                                    <p>Today Tasks for Ronney Jack</p>
                                 </div>
                                 <div className="task_list_main">
                                    <ul className="task_list">
                                       <li><a href="#">Meeting about plan for Admin Template 2018</a><br></br><strong>10:00 AM</strong></li>
                                       <li><a href="#">Create new task for Dashboard</a><br></br><strong>10:00 AM</strong></li>
                                       <li><a href="#">Meeting about plan for Admin Template 2018</a><br></br><strong>11:00 AM</strong></li>
                                       <li><a href="#">Create new task for Dashboard</a><br></br><strong>10:00 AM</strong></li>
                                       <li><a href="#">Meeting about plan for Admin Template 2018</a><br></br><strong>02:00 PM</strong></li>
                                    </ul>
                                 </div>
                                 <div className="read_more">
                                    <div className="center"><a className="main_bt read_bt" href="#">Read More</a></div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="col-md-6">
                           <div className="dash_blog">
                              <div className="dash_blog_inner">
                                 <div className="dash_head">
                                    <h3><span><i className="fa fa-comments-o"></i> Updates</span><span className="plus_green_bt"><a href="#">+</a></span></h3>
                                 </div>
                                 <div className="list_cont">
                                    <p>User confirmation</p>
                                 </div>
                                 <div className="msg_list_main">
                                    <ul className="msg_list">
                                       <li>
                                          <span><img src="images/layout_img/msg2.png" className="img-responsive" alt="#" /></span>
                                          <span>
                                          <span className="name_user">Herman Beck</span>
                                          <span className="msg_user">Sed ut perspiciatis unde omnis.</span>
                                          <span className="time_ago">12 min ago</span>
                                          </span>
                                       </li>
                                       <li>
                                          <span><img src="images/layout_img/msg3.png" className="img-responsive" alt="#" /></span>
                                          <span>
                                          <span className="name_user">John Smith</span>
                                          <span className="msg_user">On the other hand, we denounce.</span>
                                          <span className="time_ago">12 min ago</span>
                                          </span>
                                       </li>
                                       <li>
                                          <span><img src="images/layout_img/msg2.png" className="img-responsive" alt="#" /></span>
                                          <span>
                                          <span className="name_user">John Smith</span>
                                          <span className="msg_user">Sed ut perspiciatis unde omnis.</span>
                                          <span className="time_ago">12 min ago</span>
                                          </span>
                                       </li>
                                       <li>
                                          <span><img src="images/layout_img/msg3.png" className="img-responsive" alt="#" /></span>
                                          <span>
                                          <span className="name_user">John Smith</span>
                                          <span className="msg_user">On the other hand, we denounce.</span>
                                          <span className="time_ago">12 min ago</span>
                                          </span>
                                       </li>
                                    </ul>
                                 </div>
                                 <div className="read_more">
                                    <div className="center"><a className="main_bt read_bt" href="#">Read More</a></div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                
                  <div className="container-fluid">
                     <div className="footer">
                        <p>Copyright © 2018 Designed by html.design. All rights reserved.<br></br>
                           Distributed By: <a href="https://themewagon.com/">ThemeWagon</a>
                        </p>
                     </div>
                  </div>
               </div>
               
            </div> */}
         </div>
      </div>
      
    </div>
        // </Layout>
    );
}
export default AdminDashboard;