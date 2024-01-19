import React, { useState } from "react";
import axios from 'axios';
import { useEffect } from "react";
import Layout from "../components/Layout";
const Products = ()=>{
	const [categoryname , setCategoryName] = useState([]);
    const [productslug , setProductSlug] = useState(null);
    const [products , setProductData] = useState([]);
   
	const getProducts = async () => {
		try {
		  // Fetch products from your API or wherever
		//   const response = await fetch('http://localhost:5000/api/v1/auth/all-products');
		  const response = await axios.get('http://localhost:5000/api/v1/auth/all-products');
		  const products =  await response.data.result;
		  console.log(products);
		  // Check if products is an array before proceeding
		  if (!Array.isArray(products)) {
			console.error('Products is not an array:', products);
			return;
		  }
		  else{
			console.error('Products is an array:', products);
		  }
	
		  const promises = products.map(async (product) => {
			const categoryId = product.category;
	
			try {
			  const categoryName = await getcategoryName(categoryId);
			  console.log(categoryName);
			  product.category = categoryName;
			  return { ...product, category_name: categoryName };
			} catch (error) {
			  console.error(`Error fetching category name for product with ID ${categoryId}:`, error);
			  return { ...product, categoryName: 'Error fetching category name' };
			}
		  });
	
		  const updatedProducts = await Promise.all(promises);
	
		  setProductData(updatedProducts);
		  
		} catch (error) {
		  console.error('Error fetching products:', error);
		}
	  };
	
    useEffect(() => {
        getProducts ();
   } 
     ,[]);
	//  console.log("my_pro",products);
	const getcategoryName = async (id) => {
		try {
		  const response = await axios.get('http://localhost:5000/api/v1/auth/get-category-name', {
			headers: {
			  'cat_id': id,
			}
		  });
	  
		  //console.log(response.data.result);
		  // If you want to return the result, you can return it here
		  return response.data.result;
		} catch (error) {
		  console.error('Error fetching category name:', error);
		  // Handle the error if needed
		  throw error;
		}
	  };
	 
	

	{console.log(products);}

    return(
        <Layout>
        <div class="page-content">
                <div class="container">
                	<div class="row">
                		<div class="col-lg-9">
                			<div class="toolbox">
                				<div class="toolbox-left">
                					<div class="toolbox-info">
                						Showing <span>9 of 56</span> Products
                					</div>
                				</div>

                				<div class="toolbox-right">
                					<div class="toolbox-sort">
                						<label for="sortby">Sort by:</label>
                						<div class="select-custom">
											<select name="sortby" id="sortby" class="form-control">
												<option value="popularity" selected="selected">Most Popular</option>
												<option value="rating">Most Rated</option>
												<option value="date">Date</option>
											</select>
										</div>
                					</div>
                					<div class="toolbox-layout">
                						<a href="category-list.html" class="btn-layout">
                							<svg width="16" height="10">
                								<rect x="0" y="0" width="4" height="4" />
                								<rect x="6" y="0" width="10" height="4" />
                								<rect x="0" y="6" width="4" height="4" />
                								<rect x="6" y="6" width="10" height="4" />
                							</svg>
                						</a>

                						<a href="category-2cols.html" class="btn-layout active">
                							<svg width="10" height="10">
                								<rect x="0" y="0" width="4" height="4" />
                								<rect x="6" y="0" width="4" height="4" />
                								<rect x="0" y="6" width="4" height="4" />
                								<rect x="6" y="6" width="4" height="4" />
                							</svg>
                						</a>

                						<a href="category.html" class="btn-layout">
                							<svg width="16" height="10">
                								<rect x="0" y="0" width="4" height="4" />
                								<rect x="6" y="0" width="4" height="4" />
                								<rect x="12" y="0" width="4" height="4" />
                								<rect x="0" y="6" width="4" height="4" />
                								<rect x="6" y="6" width="4" height="4" />
                								<rect x="12" y="6" width="4" height="4" />
                							</svg>
                						</a>

                						<a href="category-4cols.html" class="btn-layout">
                							<svg width="22" height="10">
                								<rect x="0" y="0" width="4" height="4" />
                								<rect x="6" y="0" width="4" height="4" />
                								<rect x="12" y="0" width="4" height="4" />
                								<rect x="18" y="0" width="4" height="4" />
                								<rect x="0" y="6" width="4" height="4" />
                								<rect x="6" y="6" width="4" height="4" />
                								<rect x="12" y="6" width="4" height="4" />
                								<rect x="18" y="6" width="4" height="4" />
                							</svg>
                						</a>
                					</div>
                				</div>
                			</div>

                            <div class="products mb-3">
                                <div class="row justify-content-center">
								{products.map(product=>(
                                    <div class="col-6">
                                        <div class="product product-7 text-center">
                                            <figure class="product-media">
                                                <span class="product-label label-new">New</span>
                                                <a href="product.html">
                                                    <img src={`http://localhost:5000/api/v1/auth/get-product-photo/${product._id}`} alt="Product image" class="product-image"></img>
                                                </a>

                                                <div class="product-action-vertical">
                                                    <a href="#" class="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                                    <a href="popup/quickView.html" class="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                                                    <a href="#" class="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                                                </div>

                                                <div class="product-action">
                                                    <a href="#" class="btn-product btn-cart"><span>add to cart</span></a>
                                                </div>
                                            </figure>
                                            <div class="product-body">
                                                <div class="product-cat">
                                                    <a href="#">{product.category_name}</a>
                                                </div>
                                                <h3 class="product-title"><a href="product.html">{product.name}</a></h3>
                                                <div class="product-price">$
												{product.price}
                                                </div>
                                                <div class="ratings-container">
                                                    <div class="ratings">
                                                        <div class="ratings-val" style={{"width": "20%"}}></div>
                                                    </div>
                                                    <span class="ratings-text">( 2 Reviews )</span>
                                                </div>
                                                <div class="product-nav product-nav-thumbs">
                                                    <a href="#" class="active">
                                                        <img src="assets/images/products/product-4-thumb.jpg" alt="product desc"></img>
                                                    </a>
                                                    <a href="#">
                                                        <img src="assets/images/products/product-4-2-thumb.jpg" alt="product desc"></img>
                                                    </a>

                                                    <a href="#">
                                                        <img src="assets/images/products/product-4-3-thumb.jpg" alt="product desc"></img>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                     ))}
                                    {/* <div class="col-6">
                                        <div class="product product-7 text-center">
                                            <figure class="product-media">
                                                <a href="product.html">
                                                    <img src="assets/images/products/product-5.jpg" alt="Product image" class="product-image"></img>
                                                </a>

                                                <div class="product-action-vertical">
                                                    <a href="#" class="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                                    <a href="popup/quickView.html" class="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                                                    <a href="#" class="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                                                </div>

                                                <div class="product-action">
                                                    <a href="#" class="btn-product btn-cart"><span>add to cart</span></a>
                                                </div>
                                            </figure>

                                            <div class="product-body">
                                                <div class="product-cat">
                                                    <a href="#">Dresses</a>
                                                </div>
                                                <h3 class="product-title"><a href="product.html">Dark yellow lace cut out swing dress</a></h3>
                                                <div class="product-price">
                                                    $84.00
                                                </div>
                                                <div class="ratings-container">
                                                    <div class="ratings">
                                                        <div class="ratings-val" style={{"width": "0%"}}></div>
                                                    </div>
                                                    <span class="ratings-text">( 0 Reviews )</span>
                                                </div>

                                                <div class="product-nav product-nav-thumbs">
                                                    <a href="#" class="active">
                                                        <img src="assets/images/products/product-5-thumb.jpg" alt="product desc"></img>
                                                    </a>
                                                    <a href="#">
                                                        <img src="assets/images/products/product-5-2-thumb.jpg" alt="product desc"></img>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-6">
                                        <div class="product product-7 text-center">
                                            <figure class="product-media">
                                                <span class="product-label label-out">Out of Stock</span>
                                                <a href="product.html">
                                                    <img src="assets/images/products/product-6.jpg" alt="Product image" class="product-image"></img>
                                                </a>

                                                <div class="product-action-vertical">
                                                    <a href="#" class="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                                    <a href="popup/quickView.html" class="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                                                    <a href="#" class="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                                                </div>

                                                <div class="product-action">
                                                    <a href="#" class="btn-product btn-cart"><span>add to cart</span></a>
                                                </div>
                                            </figure>
                                            <div class="product-body">
                                                <div class="product-cat">
                                                    <a href="#">Jackets</a>
                                                </div>
                                                <h3 class="product-title"><a href="product.html">Khaki utility boiler jumpsuit</a></h3>
                                                <div class="product-price">
                                                    <span class="out-price">$120.00</span>
                                                </div>
                                                <div class="ratings-container">
                                                    <div class="ratings">
                                                        <div class="ratings-val" style={{"width": "80%"}}></div>
                                                    </div>
                                                    <span class="ratings-text">( 6 Reviews )</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-6">
                                        <div class="product product-7 text-center">
                                            <figure class="product-media">
                                                <a href="product.html">
                                                    <img src="assets/images/products/product-7.jpg" alt="Product image" class="product-image"></img>
                                                </a>

                                                <div class="product-action-vertical">
                                                    <a href="#" class="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                                    <a href="popup/quickView.html" class="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                                                    <a href="#" class="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                                                </div>

                                                <div class="product-action">
                                                    <a href="#" class="btn-product btn-cart"><span>add to cart</span></a>
                                                </div>
                                            </figure>

                                            <div class="product-body">
                                                <div class="product-cat">
                                                    <a href="#">Jeans</a>
                                                </div>
                                                <h3 class="product-title"><a href="product.html">Blue utility pinafore denim dress</a></h3>
                                                <div class="product-price">
                                                    $76.00
                                                </div>
                                                <div class="ratings-container">
                                                    <div class="ratings">
                                                        <div class="ratings-val" style={{"width": "20%"}}></div>
                                                    </div>
                                                    <span class="ratings-text">( 2 Reviews )</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div class="product product-7 text-center">
                                            <figure class="product-media">
                                                <span class="product-label label-new">New</span>
                                                <a href="product.html">
                                                    <img src="assets/images/products/product-8.jpg" alt="Product image" class="product-image"></img>
                                                </a>

                                                <div class="product-action-vertical">
                                                    <a href="#" class="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                                    <a href="popup/quickView.html" class="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                                                    <a href="#" class="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                                                </div>

                                                <div class="product-action">
                                                    <a href="#" class="btn-product btn-cart"><span>add to cart</span></a>
                                                </div>
                                            </figure>

                                            <div class="product-body">
                                                <div class="product-cat">
                                                    <a href="#">Shoes</a>
                                                </div>
                                                <h3 class="product-title"><a href="product.html">Beige knitted elastic runner shoes</a></h3>
                                                <div class="product-price">
                                                    $84.00
                                                </div>
                                                <div class="ratings-container">
                                                    <div class="ratings">
                                                        <div class="ratings-val" style={{"width": "0%"}}></div>
                                                    </div>
                                                    <span class="ratings-text">( 0 Reviews )</span>
                                                </div>

                                                <div class="product-nav product-nav-thumbs">
                                                    <a href="#" class="active">
                                                        <img src="assets/images/products/product-8-thumb.jpg" alt="product desc"></img>
                                                    </a>
                                                    <a href="#">
                                                        <img src="assets/images/products/product-8-2-thumb.jpg" alt="product desc"></img>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-6">
                                        <div class="product product-7 text-center">
                                            <figure class="product-media">
                                                <a href="product.html">
                                                    <img src="assets/images/products/product-9.jpg" alt="Product image" class="product-image"></img>
                                                </a>

                                                <div class="product-action-vertical">
                                                    <a href="#" class="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                                    <a href="popup/quickView.html" class="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                                                    <a href="#" class="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                                                </div>

                                                <div class="product-action">
                                                    <a href="#" class="btn-product btn-cart"><span>add to cart</span></a>
                                                </div>
                                            </figure>

                                            <div class="product-body">
                                                <div class="product-cat">
                                                    <a href="#">Bags</a>
                                                </div>
                                                <h3 class="product-title"><a href="product.html">Orange saddle lock front chain cross body bag</a></h3>
                                                <div class="product-price">
                                                    $84.00
                                                </div>
                                                <div class="ratings-container">
                                                    <div class="ratings">
                                                        <div class="ratings-val" style={{"width": "60%"}}></div>
                                                    </div>
                                                    <span class="ratings-text">( 1 Reviews )</span>
                                                </div>

                                                <div class="product-nav product-nav-thumbs">
                                                    <a href="#" class="active">
                                                        <img src="assets/images/products/product-9-thumb.jpg" alt="product desc"></img>
                                                    </a>
                                                    <a href="#">
                                                        <img src="assets/images/products/product-9-2-thumb.jpg" alt="product desc"></img>
                                                    </a>
                                                    <a href="#">
                                                        <img src="assets/images/products/product-9-3-thumb.jpg" alt="product desc"></img>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}
                                </div>
                            </div>

                			<nav aria-label="Page navigation">
							    <ul class="pagination justify-content-center">
							        <li class="page-item disabled">
							            <a class="page-link page-link-prev" href="#" aria-label="Previous" tabindex="-1" aria-disabled="true">
							                <span aria-hidden="true"><i class="icon-long-arrow-left"></i></span>Prev
							            </a>
							        </li>
							        <li class="page-item active" aria-current="page"><a class="page-link" href="#">1</a></li>
							        <li class="page-item"><a class="page-link" href="#">2</a></li>
							        <li class="page-item"><a class="page-link" href="#">3</a></li>
							        <li class="page-item-total">of 6</li>
							        <li class="page-item">
							            <a class="page-link page-link-next" href="#" aria-label="Next">
							                Next <span aria-hidden="true"><i class="icon-long-arrow-right"></i></span>
							            </a>
							        </li>
							    </ul>
							</nav>
                		</div>
                		<aside class="col-lg-3 order-lg-first">
                			<div class="sidebar sidebar-shop">
                				<div class="widget widget-clean">
                					<label>Filters:</label>
                					<a href="#" class="sidebar-filter-clear">Clean All</a>
                				</div>

                				<div class="widget widget-collapsible">
    								<h3 class="widget-title">
									    <a data-toggle="collapse" href="#widget-1" role="button" aria-expanded="true" aria-controls="widget-1">
									        Category
									    </a>
									</h3>

									<div class="collapse show" id="widget-1">
										<div class="widget-body">
											<div class="filter-items filter-items-count">
												<div class="filter-item">
													<div class="custom-control custom-checkbox">
														<input type="checkbox" class="custom-control-input" id="cat-1"></input>
														<label class="custom-control-label" for="cat-1">Dresses</label>
													</div>
													<span class="item-count">3</span>
												</div>

												<div class="filter-item">
													<div class="custom-control custom-checkbox">
														<input type="checkbox" class="custom-control-input" id="cat-2"></input>
														<label class="custom-control-label" for="cat-2">T-shirts</label>
													</div>
													<span class="item-count">0</span>
												</div>

												<div class="filter-item">
													<div class="custom-control custom-checkbox">
														<input type="checkbox" class="custom-control-input" id="cat-3"></input>
														<label class="custom-control-label" for="cat-3">Bags</label>
													</div>
													<span class="item-count">4</span>
												</div>

												<div class="filter-item">
													<div class="custom-control custom-checkbox">
														<input type="checkbox" class="custom-control-input" id="cat-4"></input>
														<label class="custom-control-label" for="cat-4">Jackets</label>
													</div>
													<span class="item-count">2</span>
												</div>

												<div class="filter-item">
													<div class="custom-control custom-checkbox">
														<input type="checkbox" class="custom-control-input" id="cat-5"></input>
														<label class="custom-control-label" for="cat-5">Shoes</label>
													</div>
													<span class="item-count">2</span>
												</div>

												<div class="filter-item">
													<div class="custom-control custom-checkbox">
														<input type="checkbox" class="custom-control-input" id="cat-6"></input>
														<label class="custom-control-label" for="cat-6">Jumpers</label>
													</div>
													<span class="item-count">1</span>
												</div>

												<div class="filter-item">
													<div class="custom-control custom-checkbox">
														<input type="checkbox" class="custom-control-input" id="cat-7"></input>
														<label class="custom-control-label" for="cat-7">Jeans</label>
													</div>
													<span class="item-count">1</span>
												</div>

												<div class="filter-item">
													<div class="custom-control custom-checkbox">
														<input type="checkbox" class="custom-control-input" id="cat-8"></input>
														<label class="custom-control-label" for="cat-8">Sportwear</label>
													</div>
													<span class="item-count">0</span>
												</div>
											</div>
										</div>
									</div>
        						</div>

        						<div class="widget widget-collapsible">
    								<h3 class="widget-title">
									    <a data-toggle="collapse" href="#widget-2" role="button" aria-expanded="true" aria-controls="widget-2">
									        Size
									    </a>
									</h3>

									<div class="collapse show" id="widget-2">
										<div class="widget-body">
											<div class="filter-items">
												<div class="filter-item">
													<div class="custom-control custom-checkbox">
														<input type="checkbox" class="custom-control-input" id="size-1"></input>
														<label class="custom-control-label" for="size-1">XS</label>
													</div>
												</div>

												<div class="filter-item">
													<div class="custom-control custom-checkbox">
														<input type="checkbox" class="custom-control-input" id="size-2"></input>
														<label class="custom-control-label" for="size-2">S</label>
													</div>
												</div>

												<div class="filter-item">
													<div class="custom-control custom-checkbox">
														<input type="checkbox" class="custom-control-input" checked id="size-3"></input>
														<label class="custom-control-label" for="size-3">M</label>
													</div>
												</div>

												<div class="filter-item">
													<div class="custom-control custom-checkbox">
														<input type="checkbox" class="custom-control-input" checked id="size-4"></input>
														<label class="custom-control-label" for="size-4">L</label>
													</div>
												</div>

												<div class="filter-item">
													<div class="custom-control custom-checkbox">
														<input type="checkbox" class="custom-control-input" id="size-5"></input>
														<label class="custom-control-label" for="size-5">XL</label>
													</div>
												</div>

												<div class="filter-item">
													<div class="custom-control custom-checkbox">
														<input type="checkbox" class="custom-control-input" id="size-6"></input>
														<label class="custom-control-label" for="size-6">XXL</label>
													</div>
												</div>
											</div>
										</div>
									</div>
        						</div>

        						<div class="widget widget-collapsible">
    								<h3 class="widget-title">
									    <a data-toggle="collapse" href="#widget-3" role="button" aria-expanded="true" aria-controls="widget-3">
									        Colour
									    </a>
									</h3>

									<div class="collapse show" id="widget-3">
										<div class="widget-body">
											<div class="filter-colors">
												<a href="#" style={{background: "#b87145"}}><span class="sr-only">Color Name</span></a>
												<a href="#" style={{background: "#f0c04a"}}><span class="sr-only">Color Name</span></a>
												<a href="#" style={{background: "#333333"}}><span class="sr-only">Color Name</span></a>
												<a href="#" class="selected" style={{background: "#cc3333"}}><span class="sr-only">Color Name</span></a>
												<a href="#" style={{background:"#3399cc"}}><span class="sr-only">Color Name</span></a>
												<a href="#" style={{background: "#669933"}}><span class="sr-only">Color Name</span></a>
												<a href="#" style={{background: "#f2719c"}}><span class="sr-only">Color Name</span></a>
												<a href="#" style={{background: "#ebebeb"}}><span class="sr-only">Color Name</span></a>
											</div>
                                        </div>
									</div>
        						</div>

        						<div class="widget widget-collapsible">
    								<h3 class="widget-title">
									    <a data-toggle="collapse" href="#widget-4" role="button" aria-expanded="true" aria-controls="widget-4">
									        Brand
									    </a>
									</h3>

									<div class="collapse show" id="widget-4">
										<div class="widget-body">
											<div class="filter-items">
												<div class="filter-item">
													<div class="custom-control custom-checkbox">
														<input type="checkbox" class="custom-control-input" id="brand-1"></input>
														<label class="custom-control-label" for="brand-1">Next</label>
													</div>
												</div>

												<div class="filter-item">
													<div class="custom-control custom-checkbox">
														<input type="checkbox" class="custom-control-input" id="brand-2"></input>
														<label class="custom-control-label" for="brand-2">River Island</label>
													</div>
												</div>

												<div class="filter-item">
													<div class="custom-control custom-checkbox">
														<input type="checkbox" class="custom-control-input" id="brand-3"></input>
														<label class="custom-control-label" for="brand-3">Geox</label>
													</div>
												</div>
												<div class="filter-item">
													<div class="custom-control custom-checkbox">
														<input type="checkbox" class="custom-control-input" id="brand-4"></input>
														<label class="custom-control-label" for="brand-4">New Balance</label>
													</div>
												</div>

												<div class="filter-item">
													<div class="custom-control custom-checkbox">
														<input type="checkbox" class="custom-control-input" id="brand-5"></input>
														<label class="custom-control-label" for="brand-5">UGG</label>
													</div>
												</div>

												<div class="filter-item">
													<div class="custom-control custom-checkbox">
														<input type="checkbox" class="custom-control-input" id="brand-6"></input>
														<label class="custom-control-label" for="brand-6">F&F</label>
													</div>
												</div>

												<div class="filter-item">
													<div class="custom-control custom-checkbox">
														<input type="checkbox" class="custom-control-input" id="brand-7"></input>
														<label class="custom-control-label" for="brand-7">Nike</label>
													</div>
												</div>

											</div>
										</div>
									</div>
        						</div>

        						<div class="widget widget-collapsible">
    								<h3 class="widget-title">
									    <a data-toggle="collapse" href="#widget-5" role="button" aria-expanded="true" aria-controls="widget-5">
									        Price
									    </a>
									</h3>

									<div class="collapse show" id="widget-5">
										<div class="widget-body">
                                            <div class="filter-price">
                                                <div class="filter-price-text">
                                                    Price Range:
                                                    <span id="filter-price-range"></span>
                                                </div>

                                                <div id="price-slider"></div>
                                            </div>
										</div>
									</div>
        						</div>
                			</div>
                		</aside>
                	</div>
                </div>
            </div>
            </Layout>
    )
    
}

export default Products;