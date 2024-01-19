import React from "react";
import Layout from "../components/Layout";
import "../assets/css/bootstrap.min.css";
import "../assets/css/plugins/owl.carousel.css";
import "../assets/css/plugins/magnific-popup/magnific-popup.css";
import "../assets/css/plugins/jquery.countdown.css";
import "../assets/css/skins/skin-demo-7.css";
import "../assets/css/demos/demo-7.css";
import "../assets/css/style.css";
// import "../assets/css/plugins/jquery.countdown.css";
// import "../../assets/css/bootstrap.min.css";
// import "../../assets/css/bootstrap.min.css";
const Home = () => {
	return (
       
		
         <Layout>
		<main className="main">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="banner banner-big banner-overlay">
                            <a href="#">
                                <img src="assets/images/demos/demo-7/banners/banner-1.jpg" alt="Banner"></img>
                            </a>

                            <div className="banner-content banner-content-center">
                                <h3 className="banner-subtitle text-white"><a href="#">New Collection</a></h3>
                                <h2 className="banner-title text-white"><a href="#">Shop Women's</a></h2>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="banner banner-big banner-overlay">
                            <a href="#">
                                <img src="assets/images/demos/demo-7/banners/banner-2.jpg" alt="Banner"></img>
                            </a>

                            <div className="banner-content banner-content-center">
                                <h3 className="banner-subtitle text-white"><a href="#">New Collection</a></h3>
                                <h2 className="banner-title text-white"><a href="#">Shop Men's</a></h2>
                                <a href="#" className="btn underline"><span>Discover Now</span></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-md-6 col-lg-4">
                        <div className="banner banner-overlay text-white">
                            <a href="#">
                                <img src="assets/images/demos/demo-7/banners/banner-3.jpg" alt="Banner"></img>
                            </a>

                            <div className="banner-content banner-content-right">
                                <h4 className="banner-subtitle"><a href="#">Flip Flop</a></h4>
                                <h3 className="banner-title"><a href="#">Summer<br/>sale -70% off</a></h3>
                                <a href="#" className="btn underline btn-outline-white-3 banner-link">Shop Now</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-4">
                        <div className="banner banner-overlay color-grey">
                            <a href="#">
                                <img src="assets/images/demos/demo-7/banners/banner-4.jpg" alt="Banner"></img>
                            </a>

                            <div className="banner-content">
                                <h4 className="banner-subtitle"><a href="#">Accessories</a></h4>
                                <h3 className="banner-title"><a href="#">2019 Winter<br/>up to 50% off</a></h3>
                                <a href="#" className="btn underline banner-link">Shop Now</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-4">
                        <div className="banner banner-overlay text-white">
                            <a href="#">
                                <img src="assets/images/demos/demo-7/banners/banner-5.jpg" alt="Banner"></img>
                            </a>

                            <div className="banner-content banner-content-right mr">
                                <h4 className="banner-subtitle"><a href="#">New in</a></h4>
                                <h3 className="banner-title"><a href="#">Women’s<br/>sportswear</a></h3>
                                <a href="#" className="btn underline btn-outline-white-3 banner-link">Shop Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="icon-boxes-container bg-transparent">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-8 col-12 icon-boxes">
                            <div class="col-sm-6 col-lg-4">
                                <div class="icon-box icon-box-side">
                                    <span class="icon-box-icon">
                                        <i class="icon-truck"></i>
                                    </span>

                                    <div class="icon-box-content">
                                        <h3 class="icon-box-title">Payment & Delivery</h3>
                                        <p>Free shipping for orders over $50</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="col-sm-6 col-lg-4">
                                <div class="icon-box icon-box-side">
                                    <span class="icon-box-icon">
                                        <i class="icon-rotate-left"></i>
                                    </span>

                                    <div class="icon-box-content">
                                        <h3 class="icon-box-title">Return & Refund</h3>
                                        <p>Free 100% money back guarantee</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-lg-4">
                                <div class="icon-box icon-box-side">
                                    <span class="icon-box-icon">
                                        <i class="icon-headphones"></i>
                                    </span>

                                    <div class="icon-box-content">
                                        <h3 class="icon-box-title">Quality Support</h3>
                                        <p>Alway online feedback 24/7</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div class="bg-light-2 pt-6 pb-6 featured">
              <div class="container-fluid"></div>
                <div class="heading heading-center mb-3">
                        <h2 class="title">FEATURED PRODUCTS</h2>

                        <ul class="nav nav-pills justify-content-center" role="tablist">
                            <li class="nav-item">
                                <a class="nav-link active" id="featured-women-link" data-toggle="tab" href="#featured-women-tab" role="tab" aria-controls="featured-women-tab" aria-selected="true">Womens Clothing</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" id="featured-men-link" data-toggle="tab" href="#featured-men-tab" role="tab" aria-controls="featured-men-tab" aria-selected="false">Mens Clothing</a>
                            </li>
                        </ul>
                </div>
                <div class="tab-content tab-content-carousel">
                <div class="tab-pane p-0 fade show active" id="featured-women-tab" role="tabpanel" aria-labelledby="featured-women-link">
                        <div class="owl-carousel owl-simple carousel-equal-height carousel-with-shadow" data-toggle="owl" 
                                data-owl-options='{
                                    "nav": false, 
                                    "dots": true,
                                    "margin": 20,
                                    "loop": false,
                                    "responsive": {
                                        "0": {
                                            "items":2
                                        },
                                        "480": {
                                            "items":2
                                        },
                                        "768": {
                                            "items":3
                                        },
                                        "992": {
                                            "items":4
                                        },
                                        "1200": {
                                            "items":5,
                                            "nav": true
                                        }
                                    }
                                }'>
                                <div className="product product-7 text-center">
                                    <figure className="product-media">
                                        <a href="product.html">
                                            <img src="/assets/images/demos/demo-7/products/product-1-1.jpg" alt="Product image" className="product-image"></img>
                                            <img src="/assets/images/demos/demo-7/products/product-1-2.jpg" alt="Product image" className="product-image-hover"></img>
                                        </a>

                                        <div className="product-action-vertical">
                                            <a href="#" class="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                            <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                                        </div>

                                        <div className="product-action">
                                            <a href="#" class="btn-product btn-cart"><span>add to cart</span></a>
                                        </div>
                                    </figure>
                                    <div class="product-body">
                                        <h3 class="product-title"><a href="product.html">Backpack</a></h3>
                                        <div class="product-price">
                                            $60.00
                                        </div>
                                        <div className="ratings-container">
                                            <div className="ratings">
                                                <div className="ratings-val" style={{"width" : "20%"}}></div>
                                            </div>
                                            <span className="ratings-text">( 2 Reviews )</span>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div className="product product-7 text-center">
                                    <figure className="product-media">
                                        <a href="product.html">
                                            <img src="/assets/images/demos/demo-7/products/product-2-1.jpg" alt="Product image" className="product-image"></img>
                                            <img src="/assets/images/demos/demo-7/products/product-2-2.jpg" alt="Product image" className="product-image-hover"></img>
                                        </a>

                                        <div className="product-action-vertical">
                                            <a href="#" class="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                            <a href="popup/quickView.html" class="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                                        </div>

                                        <div className="product-action">
                                            <a href="#" class="btn-product btn-cart"><span>add to cart</span></a>
                                        </div>
                                    </figure>

                                    <div className="product-body">
                                        <h3 className="product-title"><a href="product.html">Biker jacket</a></h3>
                                        <div className="product-price">
                                            $120.99
                                        </div>
                                        <div className="ratings-container">
                                            <div className="ratings">
                                                <div className="ratings-val" style={{"width": "20%"}}></div>
                                            </div>
                                            <span className="ratings-text">( 2 Reviews )</span>
                                        </div>

                                        <div className="product-nav product-nav-dots">
                                            <a href="#" class="active" style={{background: "#d79442"}}><span clclassNameass="sr-only">Color name</span></a>
                                            <a href="#" style={{background: "#cc3333"}}><span className="sr-only">Color name</span></a>
                                        </div>
                                    </div>
                                </div>
                                <div class="product product-7 text-center">
                                    <figure class="product-media">
                                        <a href="product.html">
                                            <img src="assets/images/demos/demo-7/products/product-3-1.jpg" alt="Product image" class="product-image"></img>
                                            <img src="assets/images/demos/demo-7/products/product-3-2.jpg" alt="Product image" class="product-image-hover"></img>
                                        </a>

                                        <div class="product-action-vertical">
                                            <a href="#" class="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                            <a href="popup/quickView.html" class="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                                        </div>

                                        <div class="product-action">
                                            <a href="#" class="btn-product btn-cart"><span>add to cart</span></a>
                                        </div>
                                    </figure>

                                    <div class="product-body">
                                        <h3 class="product-title"><a href="product.html">Sandals</a></h3>
                                        <div class="product-price">
                                            $70.00
                                        </div>
                                        <div class="ratings-container">
                                            <div class="ratings">
                                                <div class="ratings-val" style={{"width": "60%"}}></div>
                                            </div>
                                            <span class="ratings-text">( 4 Reviews )</span>
                                        </div>
                                    </div>
                                </div>
                         </div>
                </div>
                <div class="tab-pane p-0 fade" id="featured-men-tab" role="tabpanel" aria-labelledby="featured-men-link">
                            <div class="owl-carousel owl-simple carousel-equal-height carousel-with-shadow" data-toggle="owl" 
                                data-owl-options='{
                                    "nav": false, 
                                    "dots": true,
                                    "margin": 20,
                                    "loop": false,
                                    "responsive": {
                                        "0": {
                                            "items":1
                                        },
                                        "480": {
                                            "items":2
                                        },
                                        "768": {
                                            "items":3
                                        },
                                        "992": {
                                            "items":4
                                        },
                                        "1200": {
                                            "items":5,
                                            "nav": true
                                        }
                                    }
                                }'>
                                <div class="product product-7 text-center">
                                    <figure class="product-media">
                                        <a href="product.html">
                                            <img src="assets/images/demos/demo-7/products/product-2-1.jpg" alt="Product image" class="product-image"></img>
                                            <img src="assets/images/demos/demo-7/products/product-2-2.jpg" alt="Product image" class="product-image-hover"></img>
                                        </a>

                                        <div class="product-action-vertical">
                                            <a href="#" class="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                            <a href="popup/quickView.html" class="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                                        </div>

                                        <div class="product-action">
                                            <a href="#" class="btn-product btn-cart"><span>add to cart</span></a>
                                        </div>
                                    </figure>

                                    <div class="product-body">
                                        <h3 class="product-title"><a href="product.html">Biker jacket</a></h3>
                                        <div class="product-price">
                                            $120.99
                                        </div>
                                        <div class="ratings-container">
                                            <div class="ratings">
                                                <div class="ratings-val" style={{"width": "20%"}}></div>
                                            </div>
                                            <span class="ratings-text">( 2 Reviews )</span>
                                        </div>

                                        <div class="product-nav product-nav-dots">
                                            <a href="#" class="active" style={{background: "#d79442"}}><span class="sr-only">Color name</span></a>
                                            <a href="#" style={{background: "#cc3333"}}><span class="sr-only">Color name</span></a>
                                        </div>
                                    </div>
                                </div>
                                <div class="product product-7 text-center">
                                    <figure class="product-media">
                                        <a href="product.html">
                                            <img src="assets/images/demos/demo-7/products/product-3-1.jpg" alt="Product image" class="product-image"></img>
                                            <img src="assets/images/demos/demo-7/products/product-3-2.jpg" alt="Product image" class="product-image-hover"></img>
                                        </a>

                                        <div class="product-action-vertical">
                                            <a href="#" class="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                            <a href="popup/quickView.html" class="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                                        </div>

                                        <div class="product-action">
                                            <a href="#" class="btn-product btn-cart"><span>add to cart</span></a>
                                        </div>
                                    </figure>

                                    <div class="product-body">
                                        <h3 class="product-title"><a href="product.html">Sandals</a></h3>
                                        <div class="product-price">
                                            $70.00
                                        </div>
                                        <div class="ratings-container">
                                            <div class="ratings">
                                                <div class="ratings-val" style={{'width': "60%"}}></div>
                                            </div>
                                            <span class="ratings-text">( 4 Reviews )</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="product product-7 text-center">
                                    <figure class="product-media">
                                        <span class="product-label label-circle label-sale">Sale</span>
                                        <a href="product.html">
                                            <img src="assets/images/demos/demo-7/products/product-4-1.jpg" alt="Product image" class="product-image"></img>
                                            <img src="assets/images/demos/demo-7/products/product-4-2.jpg" alt="Product image" class="product-image-hover"></img>
                                        </a>

                                        <div class="product-action-vertical">
                                            <a href="#" class="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                            <a href="popup/quickView.html" class="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                                        </div>

                                        <div class="product-action">
                                            <a href="#" class="btn-product btn-cart"><span>add to cart</span></a>
                                        </div>

                                        <div class="deal-countdown offer-countdown" data-until="+11d"></div>
                                    </figure>

                                    
                                </div>
                            </div>
                        </div>     
                </div>
            </div>
            <div class="bg-light-2 pt-7 pb-6 testimonials">
                <div class="container">
                    <h2 class="title text-center mb-2">Our Customers Say</h2>
                    <div class="owl-carousel owl-simple owl-testimonials" data-toggle="owl" 
                        data-owl-options='{
                            "nav": false, 
                            "dots": true,
                            "margin": 20,
                            "loop": false,
                            "responsive": {
                                "1200": {
                                    "nav": true
                                }
                            }
                        }'>
                        <blockquote class="testimonial testimonial-icon text-center">
                            <p class="lead">“Really great store”</p>
                            <p>“ Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis. Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetraa, ultricies in, diam. Sed arcu. ”</p>

                            <cite>
                                Charly Smith,
                                <span>Customer</span>
                            </cite>
                        </blockquote>

                        <blockquote class="testimonial testimonial-icon text-center">
                            <p class="lead">“Friendly Support”</p>
                            <p>“ Impedit, ratione sequi, sunt incidunt magnam et. Delectus obcaecati optio eius error libero perferendis nesciunt atque dolores magni recusandae! Doloremque quidem error eum quis similique doloribus natus qui ut ipsum.”</p>

                            <cite>
                                Damon Stone
                                <span>Customer</span>
                            </cite>
                        </blockquote>

                        <blockquote class="testimonial testimonial-icon text-center">
                            <p class="lead">“Free Shipping”</p>
                            <p>“ Molestias animi illo natus ut quod neque ad accusamus praesentium fuga! Dolores odio alias sapiente odit delectus quasi, explicabo a, modi voluptatibus. Perferendis perspiciatis, voluptate, distinctio earum veritatis animi tempora eget blandit nunc tortor mollis ”</p>

                            <cite>
                                John Smith
                                <span>Customer</span>
                            </cite>
                        </blockquote>
                    </div>
                </div>
            </div> */}
            
        </main>
        </Layout>
		
	);
};

export default Home;