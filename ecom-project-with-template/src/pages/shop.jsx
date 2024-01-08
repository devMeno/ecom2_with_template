import React from 'react'

function Shop() {
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
                                             <img src="images/logo.png" alt="image" width="107" height="24" data-retina="images/logo@2x.png" data-width="107" data-height="24" />
                                        </a>
                                   </div>
                                   {/* <!-- /.logo --> */}
                                   <div class="mobile-button"><span></span></div>
                                   <ul class="menu-extra">
                                        <li class="box-search">
                                             <a class="icon_search header-search-icon" href="#"></a>
                                             <form role="search" method="get" class="header-search-form" action="#">
                                                  <input type="text" name="s" class="header-search-field" placeholder="Search..." />
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
                                                       <a href="index.html">HOME</a>
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
                                                  <li class="active">
                                                       <a href="shop-3col.html">SHOP</a>
                                                       <ul class="submenu">
                                                            <li>
                                                                 <a href="shop-3col.html">Shop Layouts</a>
                                                                 <ul class="submenu">
                                                                      <li><a href="shop-3col.html">Three Columns</a></li>
                                                                      <li class="active" ><a href="shop-4col.html">Four Columns</a></li>
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
                                                  <li>
                                                       <a href="blog-list.html">BLOG</a>
                                                       <ul class="submenu">
                                                            <li><a href="blog-list.html">Blog List Full</a></li>
                                                            <li><a href="blog-list-1.html">Blog list Slide 1</a></li>
                                                            <li><a href="blog-list-2.html">Blog list Slide 2</a></li>
                                                            <li><a href="blog-grid.html">Blog Gird Full</a></li>
                                                            <li><a href="blog-grid-1.html">Blog Gird Slide</a></li>
                                                            <li><a href="blog-detail.html">Blog Details</a></li>
                                                       </ul>
                                                       {/* <!-- /.submenu --> */}
                                                  </li>
                                                  <li >
                                                       <a href="contact.html">CONTACT</a>
                                                       <ul class="submenu right-submenu">
                                                            <li><a href="contact.html">Contact Style 1</a></li>
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
                    {/* <!-- /.site-header-wrap --> */}


                    {/* <!-- Page title --> */}
                    <div class="page-title parallax parallax1">
                         <div class="container">
                              <div class="row">
                                   <div class="col-md-12">
                                        <div class="page-title-heading">
                                             <h1 class="title">Shop</h1>
                                        </div>
                                        {/* <!-- /.page-title-heading --> */}
                                        <div class="breadcrumbs">
                                             <ul>
                                                  <li><a href="index.html">Home</a></li>
                                                  <li><a href="shop-3col.html">Shop</a></li>
                                                  <li><a href="shop-4col.html">Fullwidth Shop</a></li>
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

                    <section class="flat-row main-shop shop-4col">
                         <div class="container">
                              <div class="row">
                                   <div class="col-md-12">
                                        <div class="filter-shop bottom_68 clearfix">
                                             <p class="showing-product">
                                                  Showing 1–12 of 56 Products
                                             </p>
                                             <ul class="flat-filter-search">
                                                  <li>
                                                       <a href="#" class="show-filter">Filters</a>
                                                  </li>
                                                  <li class="search-product"><a href="#" >Search</a></li>
                                             </ul>
                                        </div>
                                        {/* <!-- /.filte-shop --> */}
                                        <div class="box-filter slidebar-shop clearfix">
                                             <div class="btn-close"><a href="#"><i class="fa fa-times"></i></a></div>
                                             <div class="widget widget-sort-by">
                                                  <h5 class="widget-title">
                                                       Sort By
                                                  </h5>
                                                  <ul>
                                                       <li><a href="#" class="active">Default</a></li>
                                                       <li><a href="#">Popularity</a></li>
                                                       <li><a href="#">Average rating</a></li>
                                                       <li><a href="#">Newness</a></li>
                                                       <li><a href="#">Price: low to high</a></li>
                                                       <li><a href="#">Price: high to low</a></li>
                                                  </ul>
                                             </div>
                                             {/* <!-- /.widget-sort-by --> */}
                                             <div class="widget widget-price">
                                                  <h5 class="widget-title">Price</h5>
                                                  <ul>
                                                       <li><a href="#" class="active">$0.00 - $50.00</a></li>
                                                       <li><a href="#">$50.00 - $100.00</a></li>
                                                       <li><a href="#">$100.00 - $150.00</a></li>
                                                       <li><a href="#">$150.00 - $200.00</a></li>
                                                       <li><a href="#">$200.00 - 250.00</a></li>
                                                       <li><a href="#">250.00+</a></li>
                                                  </ul>
                                             </div>
                                             {/* <!-- /.widget --> */}
                                             <div class="widget widget-color">
                                                  <h5 class="widget-title">
                                                       Colors
                                                  </h5>
                                                  <ul class="flat-color-list icon-left">
                                                       <li><a href="#" class="yellow"></a><span>Yellow</span></li>
                                                       <li><a href="#" class="pink"> </a><span>White</span></li>
                                                       <li><a href="#" class="red active"></a><span>Red</span> </li>
                                                       <li><a href="#" class="black"></a><span>Black</span></li>
                                                       <li><a href="#" class="blue"></a><span>Green</span></li>
                                                       <li><a href="#" class="khaki"></a><span>Orange</span></li>
                                                  </ul>
                                             </div>
                                             {/* <!-- /.widget-color --> */}
                                             <div class="widget widget-size">
                                                  <h5 class="widget-title">Size</h5>
                                                  <ul>
                                                       <li><a href="#">L</a></li>
                                                       <li><a href="#">M</a></li>
                                                       <li><a href="#">S</a></li>
                                                       <li><a href="#">XL</a></li>
                                                       <li><a href="#">XXL</a></li>
                                                       <li><a href="#">Over Size</a></li>
                                                  </ul>
                                             </div>
                                             {/* <!-- /.widget --> */}
                                             <div class="widget widget_tag">
                                                  <h5 class="widget-title">
                                                       Tags
                                                  </h5>
                                                  <div class="tag-list">
                                                       <a href="#">All products</a>
                                                       <a href="#" class="active">Bags</a>
                                                       <a href="#">Chair</a>
                                                       <a href="#">Decoration</a>
                                                       <a href="#">Fashion</a>
                                                       <a href="#">Tie</a>
                                                       <a href="#">Furniture</a>
                                                       <a href="#">Accesories</a>
                                                  </div>
                                             </div>
                                             {/* <!-- /.widget --> */}
                                        </div>
                                        {/* <!-- /.box-filter --> */}
                                        <div class="shop-search clearfix">
                                             <form role="search" method="get" class="search-form" action="#">
                                                  <label>
                                                       <input type="search" class="search-field" placeholder="Searching …" name="s" />
                                                  </label>
                                             </form>
                                        </div>
                                        {/* <!-- /.top-serach --> */}
                                        <div class="product-content product-fourcolumn clearfix">
                                             <ul class="product style2">
                                                  <li class="product-item">
                                                       <div class="product-thumb clearfix">
                                                            <a href="#">
                                                                 <img src="images/shop/sh-4/1.jpg" alt="image" />
                                                            </a>
                                                       </div>
                                                       <div class="product-info clearfix">
                                                            <span class="product-title">Cotton White Underweaer Block Out Edition</span>
                                                            <div class="price">
                                                                 <ins>
                                                                      <span class="amount">$19.00</span>
                                                                 </ins>
                                                            </div>
                                                            <ul class="flat-color-list">
                                                                 <li>
                                                                      <a href="#" class="red"></a>
                                                                 </li>
                                                                 <li>
                                                                      <a href="#" class="blue"></a>
                                                                 </li>
                                                                 <li>
                                                                      <a href="#" class="black"></a>
                                                                 </li>
                                                            </ul>
                                                       </div>
                                                       <div class="add-to-cart text-center">
                                                            <a href="#">ADD TO CART</a>
                                                       </div>
                                                       <a href="#" class="like"><i class="fa fa-heart-o"></i></a>
                                                  </li>
                                                  <li class="product-item">
                                                       <div class="product-thumb clearfix">
                                                            <a href="#">
                                                                 <img src="images/shop/sh-4/2.jpg" alt="image" />
                                                            </a>
                                                            <span class="new">New</span>
                                                       </div>
                                                       <div class="product-info clearfix">
                                                            <span class="product-title">Cotton White Underweaer Block Out Edition</span>
                                                            <div class="price">
                                                                 <ins>
                                                                      <span class="amount">$10.00</span>
                                                                 </ins>
                                                            </div>
                                                       </div>
                                                       <div class="add-to-cart text-center">
                                                            <a href="#">ADD TO CART</a>
                                                       </div>
                                                       <a href="#" class="like"><i class="fa fa-heart-o"></i></a>
                                                  </li>
                                                  <li class="product-item">
                                                       <div class="product-thumb clearfix">
                                                            <a href="#" class="product-thumb">
                                                                 <img src="images/shop/sh-4/3.jpg" alt="image" />
                                                            </a>
                                                       </div>
                                                       <div class="product-info clearfix">
                                                            <span class="product-title">Cotton White Underweaer Block Out Edition</span>
                                                            <div class="price">
                                                                 <ins>
                                                                      <span class="amount">$20.00</span>
                                                                 </ins>
                                                            </div>
                                                       </div>
                                                       <div class="add-to-cart text-center">
                                                            <a href="#">ADD TO CART</a>
                                                       </div>
                                                       <a href="#" class="like"><i class="fa fa-heart-o"></i></a>
                                                  </li>
                                                  <li class="product-item">
                                                       <div class="product-thumb clearfix">
                                                            <a href="#" class="product-thumb">
                                                                 <img src="images/shop/sh-4/4.jpg" alt="image" />
                                                            </a>
                                                            <span class="new sale">Sale</span>
                                                       </div>
                                                       <div class="product-info clearfix">
                                                            <span class="product-title">Cotton White Underweaer Block Out Edition</span>
                                                            <div class="price">
                                                                 <del>
                                                                      <span class="regular">$90.00</span>
                                                                 </del>
                                                                 <ins>
                                                                      <span class="amount">$60.00</span>
                                                                 </ins>
                                                            </div>
                                                            <ul class="flat-color-list">
                                                                 <li>
                                                                      <a href="#" class="red"></a>
                                                                 </li>
                                                                 <li>
                                                                      <a href="#" class="blue"></a>
                                                                 </li>
                                                                 <li>
                                                                      <a href="#" class="black"></a>
                                                                 </li>
                                                            </ul>
                                                       </div>
                                                       <div class="add-to-cart text-center">
                                                            <a href="#">ADD TO CART</a>
                                                       </div>
                                                       <a href="#" class="like"><i class="fa fa-heart-o"></i></a>
                                                  </li>
                                                  <li class="product-item">
                                                       <div class="product-thumb clearfix">
                                                            <a href="#" class="product-thumb">
                                                                 <img src="images/shop/sh-4/5.jpg" alt="image" />
                                                            </a>
                                                            <span class="new">New</span>
                                                       </div>
                                                       <div class="product-info clearfix">
                                                            <span class="product-title">Cotton White Underweaer Block Out Edition</span>
                                                            <div class="price">
                                                                 <ins>
                                                                      <span class="amount">$139.00</span>
                                                                 </ins>
                                                            </div>
                                                       </div>
                                                       <div class="add-to-cart text-center">
                                                            <a href="#">ADD TO CART</a>
                                                       </div>
                                                       <a href="#" class="like"><i class="fa fa-heart-o"></i></a>
                                                  </li>
                                                  <li class="product-item">
                                                       <div class="product-thumb clearfix">
                                                            <a href="#" class="product-thumb">
                                                                 <img src="images/shop/sh-4/6.jpg" alt="image" />
                                                            </a>
                                                            <span class="new sale">Sale</span>
                                                       </div>
                                                       <div class="product-info clearfix">
                                                            <span class="product-title">Cotton White Underweaer Block Out Edition</span>
                                                            <div class="price">
                                                                 <del>
                                                                      <span class="regular">$150.00</span>
                                                                 </del>
                                                                 <ins>
                                                                      <span class="amount">$120.00</span>
                                                                 </ins>
                                                            </div>
                                                            <ul class="flat-color-list">
                                                                 <li>
                                                                      <a href="#" class="red"></a>
                                                                 </li>
                                                                 <li>
                                                                      <a href="#" class="blue"></a>
                                                                 </li>
                                                                 <li>
                                                                      <a href="#" class="black"></a>
                                                                 </li>
                                                            </ul>
                                                       </div>
                                                       <div class="add-to-cart text-center">
                                                            <a href="#">ADD TO CART</a>
                                                       </div>
                                                       <a href="#" class="like"><i class="fa fa-heart-o"></i></a>
                                                  </li>
                                                  <li class="product-item">
                                                       <div class="product-thumb clearfix">
                                                            <a href="#" class="product-thumb">
                                                                 <img src="images/shop/sh-4/7.jpg" alt="image" />
                                                            </a>
                                                       </div>
                                                       <div class="product-info clearfix">
                                                            <span class="product-title">Cotton White Underweaer Block Out Edition</span>
                                                            <div class="price">
                                                                 <ins>
                                                                      <span class="amount">$110.00</span>
                                                                 </ins>
                                                            </div>
                                                       </div>
                                                       <div class="add-to-cart text-center">
                                                            <a href="#">ADD TO CART</a>
                                                       </div>
                                                       <a href="#" class="like"><i class="fa fa-heart-o"></i></a>
                                                  </li>
                                                  <li class="product-item">
                                                       <div class="product-thumb clearfix">
                                                            <a href="#" class="product-thumb">
                                                                 <img src="images/shop/sh-4/8.jpg" alt="image" />
                                                            </a>
                                                            <span class="new">New</span>
                                                       </div>
                                                       <div class="product-info clearfix">
                                                            <span class="product-title">Cotton White Underweaer Block Out Edition</span>
                                                            <div class="price">
                                                                 <ins>
                                                                      <span class="amount">$90.00</span>
                                                                 </ins>
                                                            </div>
                                                       </div>
                                                       <div class="add-to-cart text-center">
                                                            <a href="#">ADD TO CART</a>
                                                       </div>
                                                       <a href="#" class="like"><i class="fa fa-heart-o"></i></a>
                                                  </li>
                                                  <li class="product-item">
                                                       <div class="product-thumb clearfix">
                                                            <a href="#" class="product-thumb">
                                                                 <img src="images/shop/sh-4/9.jpg" alt="image" />
                                                            </a>
                                                            <span class="new">New</span>
                                                       </div>
                                                       <div class="product-info clearfix">
                                                            <span class="product-title">Cotton White Underweaer Block Out Edition</span>
                                                            <div class="price">
                                                                 <ins>
                                                                      <span class="amount">$79.00</span>
                                                                 </ins>
                                                            </div>
                                                       </div>
                                                       <div class="add-to-cart text-center">
                                                            <a href="#">ADD TO CART</a>
                                                       </div>
                                                       <a href="#" class="like"><i class="fa fa-heart-o"></i></a>
                                                  </li>
                                                  <li class="product-item">
                                                       <div class="product-thumb clearfix">
                                                            <a href="#" class="product-thumb">
                                                                 <img src="images/shop/sh-4/10.jpg" alt="image" />
                                                            </a>
                                                            <span class="new sale">Sale</span>
                                                       </div>
                                                       <div class="product-info clearfix">
                                                            <span class="product-title">Cotton White Underweaer Block Out Edition</span>
                                                            <div class="price">
                                                                 <del>
                                                                      <span class="regular">$150.00</span>
                                                                 </del>
                                                                 <ins>
                                                                      <span class="amount">$120.00</span>
                                                                 </ins>
                                                            </div>
                                                            <ul class="flat-color-list">
                                                                 <li>
                                                                      <a href="#" class="red"></a>
                                                                 </li>
                                                                 <li>
                                                                      <a href="#" class="blue"></a>
                                                                 </li>
                                                                 <li>
                                                                      <a href="#" class="black"></a>
                                                                 </li>
                                                            </ul>
                                                       </div>
                                                       <div class="add-to-cart text-center">
                                                            <a href="#">ADD TO CART</a>
                                                       </div>
                                                       <a href="#" class="like"><i class="fa fa-heart-o"></i></a>
                                                  </li>
                                                  <li class="product-item">
                                                       <div class="product-thumb clearfix">
                                                            <a href="#" class="product-thumb">
                                                                 <img src="images/shop/sh-4/11.jpg" alt="image" />
                                                            </a>
                                                       </div>
                                                       <div class="product-info clearfix">
                                                            <span class="product-title">Cotton White Underweaer Block Out Edition</span>
                                                            <div class="price">
                                                                 <ins>
                                                                      <span class="amount">$66.00</span>
                                                                 </ins>
                                                            </div>
                                                       </div>
                                                       <div class="add-to-cart text-center">
                                                            <a href="#">ADD TO CART</a>
                                                       </div>
                                                       <a href="#" class="like"><i class="fa fa-heart-o"></i></a>
                                                  </li>
                                                  <li class="product-item">
                                                       <div class="product-thumb clearfix">
                                                            <a href="#" class="product-thumb">
                                                                 <img src="images/shop/sh-4/12.jpg" alt="image" />
                                                            </a>
                                                            <span class="new">New</span>
                                                       </div>
                                                       <div class="product-info clearfix">
                                                            <span class="product-title">Cotton White Underweaer Block Out Edition</span>
                                                            <div class="price">
                                                                 <ins>
                                                                      <span class="amount">$20.00</span>
                                                                 </ins>
                                                            </div>
                                                       </div>
                                                       <div class="add-to-cart text-center">
                                                            <a href="#">ADD TO CART</a>
                                                       </div>
                                                       <a href="#" class="like"><i class="fa fa-heart-o"></i></a>
                                                  </li>
                                             </ul>
                                             {/* <!-- /.product --> */}
                                        </div>
                                        {/* <!-- /.product-content --> */}
                                        <div class="product-pagination text-center margin-top-11 clearfix">
                                             <ul class="flat-pagination">
                                                  <li class="prev">
                                                       <a href="#"><i class="fa fa-angle-left"></i></a>
                                                  </li>
                                                  <li><a href="#">1</a></li>
                                                  <li class="active"><a href="#" title="">2</a></li>
                                                  <li><a href="#">3</a></li>
                                                  <li><a href="#"><i class="fa fa-angle-right"></i></a></li>
                                             </ul>
                                             {/* <!-- /.flat-pagination --> */}
                                        </div>
                                   </div>
                                   {/* <!-- /.col-md-12 --> */}
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
                                                  <a href="index.html"><img src="images/logo@2x.png" alt="image" width="107" height="24" /></a>
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

export default Shop