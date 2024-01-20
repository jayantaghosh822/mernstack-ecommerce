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
const AddProduct = () =>{
  let apiUrl = process.env.REACT_APP_API_URL;
    const [categories , setCategories] = useState([]);
    const [image, setImage] = useState(null);
    const [inputs, setFormData] = useState([]);
    const handleInputChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setFormData(values => ({...values, [name]: value}));
      };
      const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImage(file);
      };
    const params = useParams();
    // const getProduct = async() =>{
    //   var pro_id = '6575d4e3bddbce49f5166626';
    //   await axios.get('http://localhost:5000/api/v1/auth/get-product-photo',{responseType:'blob'}, {
    //     //  headers: { "Content-Type": "multipart/form-data" },    
           
    //       }).then(response => {
    //         var binaryData = [];
    //        binaryData.push(response);
    //        var url = window.URL.createObjectURL(new Blob(binaryData, {type: "image/jpeg"}))
    //        console.log(url );
    //       });
    // }
    const handleProductSubmit = async(e) =>{
      //getProduct();
      let add_product_api = apiUrl+'api/v1/auth/add-product';
      const cat_id = params.id;
        e.preventDefault();
      //alert("clicked");
     // alert(catname);
      //alert(catslug);
      console.log(inputs);
      console.log(image);
      const formData = new FormData();
      formData.append("formData", JSON.stringify(inputs));
      //console.log(product_datas);
      formData.append('image', image);
      for (var key of formData.entries()) {
        console.log(key[0] + ", " + key[1]);
    }
      await axios.post('http://localhost:5000/api/v1/auth/add-product', formData, {
         headers: { "Content-Type": "multipart/form-data" },    
           
          });
          toast("Product Added");
          //allCategories();
         // getcategory();
         //setFormData([]);
    }
  
    const allCategories = () =>{
      let get_category_api = apiUrl+'api/v1/auth/all-categories';
      axios.get(get_category_api, {
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
     
   
    return(
<div>
<AdminDashboard />
<div id="content">
<form class="needs-validation" onSubmit={handleProductSubmit} validate>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Add Product Name</label>
  <input type="text" class="form-control" onChange={handleInputChange} name="name"  value={inputs.name} id="exampleFormControlInput1"  placeholder />
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Add Product Description</label>
  <textarea class="form-control" onChange={handleInputChange} id="exampleFormControlTextarea1" name="description" value={inputs.description} rows="3"></textarea>
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Add Product Slug</label>
  <input type="text" class="form-control" name="slug" onChange={handleInputChange}  value={inputs.slug} id="exampleFormControlInput1"  placeholder />
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Add Product Price(in Rs.)</label>
  <input type="number" class="form-control" name="price" onChange={handleInputChange}  value={inputs.price} id="exampleFormControlInput1"  placeholder />
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Add Product Quantity</label>
  <input type="number" class="form-control" name="quan"  onChange={handleInputChange}  value={inputs.quan} id="exampleFormControlInput1"  placeholder />
</div>
<div class="mb-3">
<select onChange={handleInputChange} name="shipping" value={inputs.shipping} class="custom-select" id="inputGroupSelect01">
    <option selected>If Shiping...</option>
    <option value="1">Yes</option>
    <option value="2">No</option>
    {/* <option value="2">Two</option>
    <option value="3">Three</option> */}
  </select>
  </div>
<div class="mb-3">
<select onChange={handleInputChange} name="category" value={inputs.category} class="custom-select" id="inputGroupSelect01">
    <option selected>Choose Category...</option>
    {categories.map(category=>(
     <option value={category._id}>{category.name}</option>
    ))}
    
    {/* <option value="2">Two</option>
    <option value="3">Three</option> */}
  </select>
  </div>
  <div class="input-group mb-3">
  <div class="input-group-prepend">
    <span class="input-group-text" id="inputGroupFileAddon01">Upload</span>
  </div>
  <div class="custom-file">
    <input type="file" onChange={handleImageChange}  name="images"  class="custom-file-input" id="inputGroupFile01" aria-describedby="inputGroupFileAddon01" />
    <label class="custom-file-label" for="inputGroupFile01">Add Product Image</label>
  </div>
</div>
<div class="col-12">
    <button class="btn btn-primary"  type="submit">Add Product</button>
  </div>
</form>

</div>
</div>
    );
}

export default AddProduct;