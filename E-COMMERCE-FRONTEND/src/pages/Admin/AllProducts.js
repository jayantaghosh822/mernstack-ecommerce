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
const Allproducts = () =>{
    const [productname , setProductName] = useState(null);
    const [productslug , setProductSlug] = useState(null);
    const [products , setProducts] = useState([]);
    // const handleCategorySubmit = async(e) =>{
    //     e.preventDefault();
    //   alert("clicked");
    //   alert(catname);
    //   alert(catslug);
    //   await axios.post('http://localhost:5000/api/v1/auth/create-category', {catname,catslug}, {
    //         // body: {
    //         //   'cat_name': catname,
    //         //   'cat_slug':catslug
    //         // }
           
    //       });
    //       toast("Category Added");
    //       allCategories();
    // }
    const allProducts = () =>{
      axios.get('http://localhost:5000/api/v1/auth/all-products', {
        // body: {
        //   'cat_name': catname,
        //   'cat_slug':catslug
        // }
      }).then(response=>{
        console.log(response.data.result);
        setProducts(response.data.result);
      })
    }
    useEffect(() => {
        allProducts();
   } 
     ,[]);
     const deleteProduct = async(id) =>{
      alert(id)
      await axios.delete('http://localhost:5000/api/v1/auth/product-delete', {
        headers:{
          'Product_ID':id
      }
      }).then(response=>{
        console.log(response.data.message);
        allProducts();
      })
     }
   
    return(
<div>
<AdminDashboard />
<div id="content">
{/* <form class="needs-validation" onSubmit validate>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Add Category Name</label>
  <input type="text" class="form-control" onChange={(e)=>setCategoryName(e.target.value)} id="exampleFormControlInput1" placeholder="Men" />
</div>

<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Add Category Slug</label>
  <input type="text" class="form-control" onChange={(e)=>setCategorySlug(e.target.value)} id="exampleFormControlInput1" placeholder="men" />
</div>
<div class="col-12">
    <button class="btn btn-primary"  type="submit">Add Category</button>
  </div>
</form> */}
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
                          <th>Product Name</th>
                          <th>Product Slug</th>
                          <th>Product Image</th>
                       </tr>
                    </thead>
                    <tbody>
                   {console.log(products)}
                     {products.map(product=>(
                        <tr>
                          <td>{product._id}</td>
                          <td>{product.name}</td>
                          <td>{product.slug}</td>
                          <td><img src={`http://localhost:5000/api/v1/auth/get-product-photo/${product._id}`} alt="Girl in a jacket" width="50" height="60" /></td>
                          <td><div class="button_block"><Link to={`/dashboard/admin/category/${product._id}`}><button type="button" class="btn cur-p btn-primary">Edit</button></Link></div></td>
                          <td><div class="button_block"><button type="button" onClick={(e) =>deleteProduct(product._id)} class="btn cur-p btn-primary">Delete</button></div></td>
                        
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

export default Allproducts;