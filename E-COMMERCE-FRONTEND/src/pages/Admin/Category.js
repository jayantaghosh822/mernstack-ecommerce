import React, { useState } from "react";
import AdminDashboard from "./AdminDashboard";
import axios from 'axios';
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
 import "react-toastify/dist/ReactToastify.css";
 // toast-configuration method,
// it is compulsory method.
 toast.configure();
const Category = () =>{
    const [catname , setCategoryName] = useState(null);
    const [catslug , setCategorySlug] = useState(null);
    const [categories , setCategories] = useState([]);
    const handleCategorySubmit = async(e) =>{
        e.preventDefault();
      alert("clicked");
      alert(catname);
      alert(catslug);
      await axios.post('http://localhost:5000/api/v1/auth/create-category', {catname,catslug}, {
            // body: {
            //   'cat_name': catname,
            //   'cat_slug':catslug
            // }
           
          });
          toast("Category Added");
          allCategories();
    }
    const allCategories = () =>{
      axios.get('http://localhost:5000/api/v1/auth/all-categories', {
        // body: {
        //   'cat_name': catname,
        //   'cat_slug':catslug
        // }
      }).then(response=>{
        console.log(response.data.result);
        setCategories(response.data.result);
      })
    }
    useEffect(() => {
      allCategories();
   } 
     ,[]);
     const deleteCategory = async(id) =>{
      //alert(id)
      await axios.delete('http://localhost:5000/api/v1/auth/category-delete', {
        headers:{
          'Category_ID':id
      }
      }).then(response=>{
        console.log(response.data.message);
        allCategories();
      })
     }
   
    return(
<div>
<AdminDashboard />
<div id="content">
<form class="needs-validation" onSubmit={handleCategorySubmit} validate>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Add Category Name</label>
  <input type="text" class="form-control" onChange={(e)=>setCategoryName(e.target.value)} id="exampleFormControlInput1" placeholder="Men" />
</div>
{/* <div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div> */}
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Add Category Slug</label>
  <input type="text" class="form-control" onChange={(e)=>setCategorySlug(e.target.value)} id="exampleFormControlInput1" placeholder="men" />
</div>
<div class="col-12">
    <button class="btn btn-primary"  type="submit">Add Category</button>
  </div>
</form>
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
                          <th>Category Name</th>
                          <th>Category Slug</th>
                       </tr>
                    </thead>
                    <tbody>
                   {console.log(categories)}
                     {categories.map(category=>(
                        <tr>
                          <td>{category._id}</td>
                          <td>{category.name}</td>
                          <td>{category.slug}</td>
                        
                          <td><div class="button_block"><Link to={`/dashboard/admin/category/${category._id}`}><button type="button" class="btn cur-p btn-primary">Edit Category</button></Link></div></td>
                          <td><div class="button_block"><button type="button" onClick={(e) =>deleteCategory(category._id)} class="btn cur-p btn-primary">Delete</button></div></td>
                        
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
    );
}

export default Category;