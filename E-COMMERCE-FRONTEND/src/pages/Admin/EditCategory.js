import React, { useState } from "react";
import AdminDashboard from "./AdminDashboard";
import axios from 'axios';
import { useEffect } from "react";
// import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
 import "react-toastify/dist/ReactToastify.css";
 // toast-configuration method,
// it is compulsory method.
 toast.configure();
const EditCategory = () =>{
    const [catname , setCategoryName] = useState('');
    const [catslug , setCategorySlug] = useState('');
    const [category , setCategory] = useState([]);
    const params = useParams();
    const handleCategorySubmit = async(e) =>{
      const cat_id = params.id;
        e.preventDefault();
      //alert("clicked");
     // alert(catname);
      //alert(catslug);
      await axios.put('http://localhost:5000/api/v1/auth/update-category', {catname,catslug}, {
        headers: {
          'cat_id': cat_id,
        }
           
          });
          toast("Category Updated");
          //allCategories();
          getcategory();
    }
  
    const getcategory = () =>{
    const cat_id = params.id;
    //alert(cat_id);
      axios.get('http://localhost:5000/api/v1/auth/get-category', {
        headers: {
          'cat_id': cat_id,
        }
      }).then(response=>{
        console.log(response.data.result);
        setCategoryName(response.data.result.name);
        setCategorySlug(response.data.result.slug);
      })
    }
    useEffect(() => {
        getcategory();
   } 
     ,[]);
     
   
    return(
<div>
<AdminDashboard />
<div id="content">
<form class="needs-validation" onSubmit={handleCategorySubmit} validate>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Add Category Name</label>
  <input type="text" class="form-control" onChange={(e)=>setCategoryName(e.target.value)} value={catname} id="exampleFormControlInput1"  placeholder={category.name} />
</div>
{/* <div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div> */}
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Add Category Slug</label>
  <input type="text" class="form-control" onChange={(e)=>setCategorySlug(e.target.value)}  value={catslug} id="exampleFormControlInput1"  placeholder={category.slug} />
</div>
<div class="col-12">
    <button class="btn btn-primary"  type="submit">Submit Category</button>
  </div>
</form>

</div>
</div>
    );
}

export default EditCategory;