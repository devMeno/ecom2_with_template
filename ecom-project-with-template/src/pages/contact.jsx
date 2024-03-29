import React from 'react'
import { useNavigate } from 'react-router-dom'

function Contact() {
     const navigate = useNavigate();
     const handleGoToHome = () => {
          navigate('/');
     }

     const handleGoToShop = () => {
          navigate('/Shop');
     }

     return (
          <div class="header_sticky header-style-2 has-menu-extra">

               {/* <!-- Preloader --> */}
               <div id="loading-overlay">
                    <div class="loader"></div>
               </div>


               {/* <!-- Boxed --> */}
               <div class="boxed">
                    <div id="site-header-wrap">

                         {/* <!-- Header --> */}
                         <header id="header" class="header clearfix">
                              <div class="container-fluid clearfix container-width-93" id="site-header-inner">
                                   <div id="logo" class="logo float-left">
                                        <a href="index.html" title="logo">
                                             <img src="./public/assets/images/logo.png" alt="image" width="107" height="24" data-retina="images/logo@2x.png" data-width="107" data-height="24" />
                                        </a>
                                   </div>
                                   {/* <!-- /.logo --> */}
                                   <div class="mobile-button"><span></span></div>
                                   <ul class="menu-extra">
                                        <li class="box-search">
                                             <a class="icon_search header-search-icon" href="#"></a>
                                             <form role="search" method="get" class="header-search-form" action="#">
                                                  <input type="text" value="" name="s" class="header-search-field" placeholder="Search..." />
                                                  <button type="submit" class="header-search-submit" title="Search">Search</button>
                                             </form>
                                        </li>
                                        <li class="box-login">
                                             <a class="icon_login" href="#"></a>
                                        </li>
                                        <li class="box-cart nav-top-cart-wrapper">
                                             <a class="icon_cart nav-cart-trigger active" href="#"><span>3</span></a>
                                             <div class="nav-shop-cart">
                                                  <div class="widget_shopping_cart_content">
                                                       <div class="woocommerce-min-cart-wrap">
                                                            <ul class="woocommerce-mini-cart cart_list product_list_widget ">
                                                                 <li class="woocommerce-mini-cart-item mini_cart_item">
                                                                      <span>No Items in Shopping Cart</span>
                                                                 </li>
                                                            </ul>
                                                       </div>
                                                       {/* <!-- /.widget_shopping_cart_content --> */}
                                                  </div>
                                             </div>
                                             {/* <!-- /.nav-shop-cart --> */}
                                        </li>
                                   </ul>
                                   {/* <!-- /.menu-extra --> */}
                                   <div class="nav-wrap">
                                        <nav id="mainnav" class="mainnav">
                                             <ul class="menu">
                                                  <li>
                                                       <a href="index.html" onClick={handleGoToHome}>HOME</a>
                                                       <ul class="submenu">
                                                            <li><a href="index.html">Homepage Style 1</a></li>
                                                            <li><a href="index-v2.html">Homepage Style 2</a></li>
                                                            <li><a href="index-v3.html">Homepage Style 3</a></li>
                                                            <li><a href="index-v4.html">Homepage Style 4</a></li>
                                                            <li><a href="index-v5.html">Homepage Style 5</a></li>
                                                            <li><a href="index-v6.html">Homepage Style 6</a></li>
                                                            <li><a href="index-v7.html">Homepage Style 7</a></li>
                                                            <li><a href="index-v8.html">Homepage Style 8</a></li>
                                                            <li><a href="index-v9.html">Homepage Style 9</a></li>
                                                            <li><a href="index-v10.html">Homepage Style 10</a></li>
                                                       </ul>
                                                  </li>
                                                  <li>
                                                       <a href="shop-3col.html" onClick={handleGoToShop}>SHOP</a>
                                                       <ul class="submenu">
                                                            <li>
                                                                 <a href="shop-3col.html">Shop Layouts</a>
                                                                 <ul class="submenu">
                                                                      <li><a href="shop-3col.html">Three Columns</a></li>
                                                                      <li><a href="shop-4col.html">Four Columns</a></li>
                                                                      <li><a href="shop-5col.html">Five Columns</a></li>
                                                                      <li><a href="shop-3col-slide.html">Slidebar Three Columns</a></li>
                                                                 </ul>
                                                            </li>
                                                            <li>
                                                                 <a href="shop-detail-des.html">Shop Details</a>
                                                                 <ul class="submenu">
                                                                      <li><a href="shop-detail-des.html">Details Description</a></li>
                                                                      <li><a href="shop-detail-exter.html">Details External</a></li>
                                                                      <li><a href="shop-detail-option.html">Details Options</a></li>
                                                                      <li><a href="shop-detail-fix.html">Details Fix</a></li>
                                                                      <li><a href="shop-detail-zoom.html">Details Zoom</a></li>
                                                                      <li><a href="shop-detail-group.html">Details Grouped</a></li>
                                                                      <li><a href="shop-detail-video.html">Details Video</a></li>
                                                                 </ul>
                                                            </li>
                                                       </ul>
                                                  </li>
                                                  <li>
                                                       <a href="coming-soon.html">PAGE</a>
                                                       <ul class="submenu">

                                                            <li><a href="coming-soon.html">Coming Soon</a></li>
                                                            <li><a href="404.html"> Error 404</a></li>
                                                            <li><a href="faqs.html">FAQs</a></li>
                                                       </ul>
                                                  </li>
                                                  <li >
                                                       <a href="blog-list.html">BLOG</a>
                                                       <ul class="submenu">
                                                            <li ><a href="blog-list.html">Blog List Full</a></li>
                                                            <li><a href="blog-list-1.html">Blog list Slide 1</a></li>
                                                            <li><a href="blog-list-2.html">Blog list Slide 2</a></li>
                                                            <li><a href="blog-grid.html">Blog Gird Full</a></li>
                                                            <li><a href="blog-grid-1.html">Blog Gird Slide</a></li>
                                                            <li><a href="blog-detail.html">Blog Details</a></li>
                                                       </ul>
                                                       {/* <!-- /.submenu --> */}
                                                  </li>
                                                  <li class="active">
                                                       <a href="contact.html">CONTACT</a>
                                                       <ul class="submenu right-submenu">
                                                            <li class="active"><a href="contact.html">Contact Style 1</a></li>
                                                            <li><a href="contact-v2.html">Contact Style 2</a></li>
                                                       </ul>
                                                  </li>
                                             </ul>
                                        </nav>
                                        {/* <!-- /.mainnav --> */}
                                   </div>
                                   {/* <!-- /.nav-wrap --> */}
                              </div>
                              {/* <!-- /.container-fluid --> */}
                         </header>
                         {/* <!-- /header --> */}
                    </div>
                    {/* <!-- /#site-header-wrap --> */}


                    {/* <!-- Page title --> */}
                    <div class="page-title parallax parallax1">
                         <div class="container">
                              <div class="row">
                                   <div class="col-md-12">
                                        <div class="page-title-heading">
                                             <h1 class="title">Contacts</h1>
                                        </div>
                                        {/* <!-- /.page-title-heading --> */}
                                        <div class="breadcrumbs">
                                             <ul>
                                                  <li><a href="index.html">Home</a></li>
                                                  <li><a href="contact.html">Contact</a></li>
                                             </ul>
                                        </div>
                                        {/* <!-- /.breadcrumbs --> */}
                                   </div>
                                   {/* <!-- /.col-md-12 --> */}
                              </div>
                              {/* <!-- /.row --> */}
                         </div>
                         {/* <!-- /.container --> */}
                    </div>
                    {/* <!-- /.page-title --> */}

                    <section class="flat-row flat-iconbox">
                         <div class="container">
                              <div class="row">
                                   <div class="col-md-12">
                                        <div class="title-section">
                                             <h2 class="title">
                                                  Get In Touch
                                             </h2>
                                        </div>
                                        {/* <!-- /.title-section --> */}
                                   </div>
                                   {/* <!-- /.col-md-12 --> */}
                              </div>
                              {/* <!-- /.row --> */}
                              <div class="row">
                                   <div class="col-md-4">
                                        <div class="iconbox text-center">
                                             <div class="box-header nomargin">
                                                  <div class="icon">
                                                       <i class="fa fa-map-marker"></i>
                                                  </div>
                                             </div>
                                             {/* <!-- /.box-header --> */}
                                             <div class="box-content">
                                                  <p>203, Envato Labs, Behind Alis Steet</p>
                                             </div>
                                             {/* <!-- /.box-content --> */}
                                        </div>
                                        {/* <!-- /.iconbox --> */}
                                   </div>
                                   {/* <!-- /.col-md-4 --> */}
                                   <div class="col-md-4">
                                        <div class="divider h0"></div>
                                        <div class="iconbox text-center">
                                             <div class="box-header">
                                                  <div class="icon">
                                                       <i class="fa fa-phone"></i>
                                                  </div>
                                             </div>
                                             {/* <!-- /.box-header --> */}
                                             <div class="box-content">
                                                  <p>+12 345 678 910 / +23 122 345 678</p>
                                             </div>
                                             {/* <!-- /.box-content --> */}
                                        </div>
                                        {/* <!-- /.iconbox --> */}
                                   </div>
                                   {/* <!-- /.col-md-4 --> */}
                                   <div class="col-md-4">
                                        <div class="divider h0"></div>
                                        <div class="iconbox text-center">
                                             <div class="box-header">
                                                  <div class="icon">
                                                       <i class="fa fa-envelope"></i>
                                                  </div>
                                             </div>
                                             {/* <!-- /.box-header --> */}
                                             <div class="box-content">
                                                  <p>Infor.deercreative@gmail.com</p>
                                             </div>
                                             {/* <!-- /.box-content --> */}
                                        </div>
                                        {/* <!-- /.iconbox --> */}
                                   </div>
                                   {/* <!-- /.col-md-4 --> */}
                              </div>
                              {/* <!-- /.row --> */}
                              <div class="divider h43"></div>
                              <div class="row">
                                   <div class="col-md-12">
                                        <div class="flat-map"></div>
                                   </div>
                                   {/* <!-- /.col-md-12 --> */}
                              </div>
                              {/* <!-- /.row --> */}
                         </div>
                         {/* <!-- /.container --> */}
                    </section>
                    {/* <!-- /.flat-row --> */}

                    <section class="flat-row flat-contact">
                         <div class="container">
                              <div class="row">
                                   <div class="col-md-12">
                                        <div class="title-section margin_bottom_17">
                                             <h2 class="title">
                                                  Send Us Email
                                             </h2>
                                        </div>
                                        {/* <!-- /.title-section --> */}
                                   </div>
                                   {/* <!-- /.col-md-12 --> */}
                              </div>
                              {/* <!-- /.row --> */}
                              <div class="row">
                                   <div class="wrap-contact style2">
                                        <form novalidate="" class="contact-form" id="contactform" method="post" action="#">
                                             <div class="form-text-wrap clearfix">
                                                  <div class="contact-name">
                                                       <label></label>
                                                       <input type="text" placeholder="Name" aria-required="true" size="30" value="" name="author" id="author" />
                                                  </div>
                                                  <div class="contact-email">
                                                       <label></label>
                                                       <input type="email" size="30" placeholder="Email" value="" name="email" id="email" />
                                                  </div>
                                                  <div class="contact-subject">
                                                       <label></label>
                                                       <input type="text" placeholder="Subject" aria-required="true" size="30" value="" name="subject" id="subject" />
                                                  </div>
                                             </div>
                                             <div class="contact-message clearfix">
                                                  <label></label>
                                                  <textarea class="" tabindex="4" placeholder="Message" name="message" required></textarea>
                                             </div>
                                             <div class="form-submit">
                                                  <button class="contact-submit">SEND</button>
                                             </div>
                                        </form>
                                   </div>
                                   {/* <!-- /.wrap-contact --> */}
                              </div>
                              {/* <!-- /.row --> */}
                         </div>
                         {/* <!-- /.container --> */}
                    </section>
                    {/* <!-- /.flat-row --> */}

                    <section class="flat-row mail-chimp">
                         <div class="container">
                              <div class="row">
                                   <div class="col-md-4">
                                        <div class="text">
                                             <h3>Sign up for Send Newsletter</h3>
                                        </div>
                                   </div>
                                   <div class="col-md-8">
                                        <div class="subscribe clearfix">
                                             <form action="#" method="post" accept-charset="utf-8" id="subscribe-form">
                                                  <div class="subscribe-content">
                                                       <div class="input">
                                                            <input type="email" name="subscribe-email" placeholder="Your Email" />
                                                       </div>
                                                       <div class="button">
                                                            <button type="button">SUBCRIBE</button>
                                                       </div>
                                                  </div>
                                             </form>
                                             <ul class="flat-social">
                                                  <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                                                  <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                                                  <li><a href="#"><i class="fa fa-google"></i></a></li>
                                                  <li><a href="#"><i class="fa fa-behance"></i></a></li>
                                                  <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                                             </ul>
                                             {/* <!-- /.flat-social --> */}
                                        </div>
                                        {/* <!-- /.subscribe --> */}
                                   </div>
                              </div>
                         </div>
                    </section>
                    {/* <!-- /.mail-chimp --> */}


                    {/* <!-- Footer --> */}
                    <footer class="footer">
                         <div class="container">
                              <div class="row">
                                   <div class="col-md-3">
                                        <div class="widget widget-link">
                                             <ul>
                                                  <li><a href="#">About Us</a></li>
                                                  <li><a href="#">Online Store</a></li>
                                                  <li><a href="blog-list.html">Blog</a></li>
                                                  <li><a href="contact.html">Contact Us</a></li>
                                             </ul>
                                        </div>
                                        {/* <!-- /.widget --> */}
                                   </div>
                                   {/* <!-- /.col-md-3 --> */}
                                   <div class="col-md-3">
                                        <div class="widget widget-link link-login">
                                             <ul>
                                                  <li><a href="#">Login/ Register</a></li>
                                                  <li><a href="#">Your Cart</a></li>
                                                  <li><a href="#">Wishlist items</a></li>
                                                  <li><a href="#">Your checkout</a></li>
                                             </ul>
                                        </div>
                                        {/* <!-- /.widget --> */}
                                   </div>
                                   {/* <!-- /.col-md-3 --> */}
                                   <div class="col-md-3">
                                        <div class="widget widget-link link-faq">
                                             <ul>
                                                  <li><a href="faqs.html">FAQs</a></li>
                                                  <li><a href="#">Term of service</a></li>
                                                  <li><a href="#">Privacy Policy</a></li>
                                                  <li><a href="#">Returns</a></li>
                                             </ul>
                                        </div>
                                        {/* <!-- /.widget --> */}
                                   </div>
                                   {/* <!-- /.col-md-3 --> */}
                                   <div class="col-md-3">
                                        <div class="widget widget-brand">
                                             <div class="logo logo-footer">
                                                  <a href="index.html"><img src="./public/assets/images/logo@2x.png" alt="image" width="107" height="24" /></a>
                                             </div>
                                             <ul class="flat-contact">
                                                  <li class="address">112 Kingdom, NA 12, New York</li>
                                                  <li class="phone">+12 345 678 910</li>
                                                  <li class="email">infor.deercreative@gmail.com</li>
                                             </ul>
                                             {/* <!-- /.flat-contact --> */}
                                        </div>
                                        {/* <!-- /.widget --> */}
                                   </div>
                                   {/* <!-- /.col-md-3 --> */}
                              </div>
                              {/* <!-- /.row --> */}
                         </div>
                         {/* <!-- /.container --> */}
                    </footer>
                    {/* <!-- /.footer --> */}

                    <div class="footer-bottom">
                         <div class="container">
                              <div class="row">
                                   <div class="col-md-12">
                                        <p class="copyright text-center">Copyright @2018 <a href="#">Modaz</a></p>
                                   </div>
                              </div>
                         </div>
                    </div>


                    {/* <!-- Go Top --> */}
                    <a class="go-top">
                         <i class="fa fa-chevron-up"></i>
                    </a>

               </div>
          </div>
     )
}

export default Contact