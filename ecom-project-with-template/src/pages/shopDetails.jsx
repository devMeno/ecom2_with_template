import React from 'react'

function ShopDetails() {

    const message = "Your message";

    return (
        <div className="header_sticky header-style-2 has-menu-extra">

            {/* <!-- Preloader --> */}
            <div id="loading-overlay">
                <div className="loader"></div>
            </div>


            {/* <!-- Boxed --> */}
            <div className="boxed">
                <div id="site-header-wrap">

                    {/* <!-- Header --> */}
                    <header id="header" className="header clearfix">
                        <div className="container-fluid clearfix container-width-93" id="site-header-inner">
                            <div id="logo" className="logo float-left">
                                <a href="index.html" title="logo">
                                    <img src="./public/assets/images/logo.png" alt="image" width="107" height="24" data-retina="images/logo@2x.png" data-width="107" data-height="24" />
                                </a>
                            </div>
                            {/* <!-- /.logo --> */}
                            <div className="mobile-button"><span></span></div>
                            <ul className="menu-extra">
                                <li className="box-search">
                                    <a className="icon_search header-search-icon" href="#"></a>
                                    <form role="search" method="get" className="header-search-form" action="#">
                                        <input type="text" name="s" className="header-search-field" placeholder="Search..." />
                                        <button type="submit" className="header-search-submit" title="Search">Search</button>
                                    </form>
                                </li>
                                <li className="box-login">
                                    <a className="icon_login" href="#"></a>
                                </li>
                                <li className="box-cart nav-top-cart-wrapper">
                                    <a className="icon_cart nav-cart-trigger active" href="#"><span>3</span></a>
                                    <div className="nav-shop-cart">
                                        <div className="widget_shopping_cart_content">
                                            <div className="woocommerce-min-cart-wrap">
                                                <ul className="woocommerce-mini-cart cart_list product_list_widget ">
                                                    <li className="woocommerce-mini-cart-item mini_cart_item">
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
                            <div className="nav-wrap">
                                <nav id="mainnav" className="mainnav">
                                    <ul className="menu">
                                        <li>
                                            <a href="index.html">HOME</a>
                                            <ul className="submenu">
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
                                        <li className="active">
                                            <a href="shop-3col.html">SHOP</a>
                                            <ul className="submenu">
                                                <li>
                                                    <a href="shop-3col.html">Shop Layouts</a>
                                                    <ul className="submenu">
                                                        <li><a href="shop-3col.html">Three Columns</a></li>
                                                        <li><a href="shop-4col.html">Four Columns</a></li>
                                                        <li><a href="shop-5col.html">Five Columns</a></li>
                                                        <li><a href="shop-3col-slide.html">Slidebar Three Columns</a></li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a href="shop-detail-des.html">Shop Details</a>
                                                    <ul className="submenu">
                                                        <li><a href="shop-detail-des.html">Details Description</a></li>
                                                        <li><a href="shop-detail-exter.html">Details External</a></li>
                                                        <li><a href="shop-detail-option.html">Details Options</a></li>
                                                        <li><a href="shop-detail-fix.html">Details Fix</a></li>
                                                        <li className="active"><a href="shop-detail-zoom.html">Details Zoom</a></li>
                                                        <li><a href="shop-detail-group.html">Details Grouped</a></li>
                                                        <li><a href="shop-detail-video.html">Details Video</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="coming-soon.html">PAGE</a>
                                            <ul className="submenu">
                                                <li><a href="coming-soon.html">Coming Soon</a></li>
                                                <li><a href="404.html"> Error 404</a></li>
                                                <li><a href="faqs.html">FAQs</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="blog-list.html">BLOG</a>
                                            <ul className="submenu">
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
                                            <ul className="submenu right-submenu">
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
                <div className="page-title parallax parallax1">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="page-title-heading">
                                    <h1 className="title">Woolen T-Shirt</h1>
                                </div>
                                {/* <!-- /.page-title-heading --> */}
                                <div className="breadcrumbs">
                                    <ul>
                                        <li><a href="index.html">Home</a></li>
                                        <li><a href="shop-3col.html">Shop</a></li>
                                        <li><a href="shop-detail-zoom.html">Products</a></li>
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

                <section className="flat-row main-shop shop-detail style-1">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="wrap-flexslider">
                                    <div className="inner padding-top-5">
                                        <div className="flexslider style-2 has-relative">
                                            <ul className="slides">
                                                <li data-thumb="./public/assets/images/shop/sh-detail/thumb-detail-12.jpg">
                                                    <img src="./public/assets/images/shop/sh-detail/detail-07.jpg" alt="Image" />
                                                    <div className="flat-icon style-1">
                                                        <a href="./public/assets/images/shop/sh-detail/detail-07.jpg" className="zoom-popup"><span className="fa fa-search-plus"></span></a>
                                                    </div>
                                                </li>
                                                <li data-thumb="./public/assets/images/shop/sh-detail/thumb-detail-11.jpg">
                                                    <img src="./public/assets/images/shop/sh-detail/detail-07.jpg" alt="Image" />
                                                    <div className="flat-icon style-1">
                                                        <a href="./public/assets/images/shop/sh-detail/detail-07.jpg" className="zoom-popup"><span className="fa fa-search-plus"></span></a>
                                                    </div>
                                                </li>
                                                <li data-thumb="./public/assets/images/shop/sh-detail/thumb-detail-10.jpg">
                                                    <img src="./public/assets/images/shop/sh-detail/detail-07.jpg" alt="Image" />
                                                    <div className="flat-icon style-1">
                                                        <a href="./public/assets/images/shop/sh-detail/detail-07.jpg" className="zoom-popup"><span className="fa fa-search-plus"></span></a>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        {/* <!-- /.flexslider --> */}
                                    </div>
                                </div>
                            </div>
                            {/* <!-- /.col-md-6 --> */}

                            <div className="col-md-6">
                                <div className="divider h0"></div>
                                <div className="product-detail">
                                    <div className="inner">
                                        <div className="content-detail">
                                            <h2 className="product-title">Best Woolen T-Shirt</h2>
                                            <div className="flat-star style-1">
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star-half-o"></i>
                                                <i className="fa fa-star-half-o"></i>
                                                <span>(1)</span>
                                            </div>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                            <div className="price margin-top-30">
                                                <ins className="no-padding"><span className="amount">$24.00</span></ins>
                                            </div>
                                            <div className="product-quantity margin-top-44">
                                                <div className="quantity">
                                                    <input type="text" value="1" name="quantity-number" className="quantity-number" />
                                                    <span className="inc quantity-button">+</span>
                                                    <span className="dec quantity-button">-</span>
                                                </div>
                                                <div className="add-to-cart">
                                                    <a href="#">ADD TO CART</a>
                                                </div>
                                                <div className="box-like">
                                                    <a href="#" className="like"><i className="fa fa-heart-o"></i></a>
                                                </div>
                                            </div>
                                            <ul className="product-infor style-1 margin-top-32">
                                                <li><span>100% cotton</span></li>
                                                <li><span>6 months warranty</span></li>
                                                <li><span>Free Shipping</span></li>
                                                <li><span>High Quality</span></li>
                                            </ul>
                                            <div className="product-categories margin-top-22">
                                                <span>Categories: </span><a href="#">Men,</a> <a href="#">Shoes</a>
                                            </div>
                                            <div className="product-tags">
                                                <span>Tags: </span><a href="#">Dress,</a> <a href="#">Fashion,</a> <a href="#">Furniture,</a> <a href="#">Lookbok</a>
                                            </div>
                                            <ul className="flat-socials margin-top-15">
                                                <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                                <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                                <li><a href="#"><i className="fa fa-pinterest"></i></a></li>
                                                <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                                                <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- /.product-detail --> */}
                            </div>
                        </div>
                        {/* <!-- /.row --> */}
                    </div>
                    {/* <!-- /.container --> */}
                </section>
                {/* <!-- /.flat-row --> */}

                <section className="flat-row shop-detail-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="flat-tabs style-1 has-border">
                                    <div className="inner">
                                        <ul className="menu-tab">
                                            <li className="active">Description</li>
                                            <li>Additional information</li>
                                            <li>Reviews</li>
                                        </ul>
                                        <div className="content-tab">
                                            <div className="content-inner">
                                                <div className="inner max-width-77 padding-top-33 padding-left-7">
                                                    <p>Fashion has always been so temporary and uncertain. You can’t keep up with it.  This social phenomenon is very whimsical, thus we as the consumers always try to stay in touch with all the latest fashion tendencies. Obviously there is nothing wrong about it because fashion satisfies our willingness to be attractive. And also fashion is the detector of prosperity and social rank. So, our natural desire to wear fashionable clothes has many reasons such as historical, social and others. Therefore being fashionable costs a lot of money. But nowadays fashion is not such unavailable as it was a couple of centuries ago. We are lucky to have an opportunity to buy qualitative, fashionable and affordable clothes.</p>
                                                    <p className="margin-top-11 line-height-24">So, with the great pleasure we are offering you our goods, and we are sure that only our choices of garments will suit you best. Our product is universal because it suits different customers with different demands. We assure you it is really important, it shows that our good has such capacity as flexibility. And it is good for you because as we all know people change their claims with the course of time, and our good will be actual for a long time. The main reason of buying our clothes is the unique combination of fair price, extraordinary style and perfect quality.  Here you can find garments of all sizes, colors, styles and fabrics.</p>
                                                </div>
                                            </div>
                                            {/* <!-- /.content-inner --> */}
                                            <div className="content-inner">
                                                <div className="inner max-width-40">
                                                    <table>
                                                        <tbody>
                                                            <tr>
                                                                <td>Weight</td>
                                                                <td>1.73 kg</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Dimensions</td>
                                                                <td>100 x 37 x 100 cm</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Materials</td>
                                                                <td>80% cotton, 20% linen</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Size</td>
                                                                <td>One Size, XL, L, M, S</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                            {/* <!-- /.content-inner --> */}
                                            <div className="content-inner">
                                                <div className="inner max-width-83 padding-top-33">
                                                    <ol className="review-list">
                                                        <li className="review">
                                                            <div className="thumb">
                                                                <img src="./public/assets/images/avatar-1.png" alt="Image" />
                                                            </div>
                                                            <div className="text-wrap">
                                                                <div className="review-meta">
                                                                    <h5 className="name">Sophia Rosla</h5>
                                                                    <div className="flat-star style-1">
                                                                        <i className="fa fa-star"></i>
                                                                        <i className="fa fa-star"></i>
                                                                        <i className="fa fa-star"></i>
                                                                        <i className="fa fa-star"></i>
                                                                        <i className="fa fa-star-half-o"></i>
                                                                    </div>
                                                                </div>
                                                                <div className="review-text">
                                                                    <p>I wanted to thank you so much for the rug we have received it really is beautiful and expertly made. I will be recommending you to all our friends.</p>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        {/* <!--  /.review    --> */}
                                                        <li className="review">
                                                            <div className="thumb">
                                                                <img src="./public/assets/images/avatar.png" alt="Image" />
                                                            </div>
                                                            <div className="text-wrap">
                                                                <div className="review-meta">
                                                                    <h5 className="name">Jayne Haughton</h5>
                                                                    <div className="flat-star style-1">
                                                                        <i className="fa fa-star"></i>
                                                                        <i className="fa fa-star"></i>
                                                                        <i className="fa fa-star"></i>
                                                                        <i className="fa fa-star"></i>
                                                                        <i className="fa fa-star-half-o"></i>
                                                                    </div>
                                                                </div>
                                                                <div className="review-text">
                                                                    <p className="line-height-28">Customer service is very important part of the buying experience to us and we must say that we have found Utility's to be impressive - we will certainly look to buy again in future.</p>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        {/* <!--  /.review    -->                     */}
                                                    </ol>
                                                    {/* <!-- /.review-list --> */}
                                                    <div className="comment-respond review-respond" id="respond">
                                                        <div className="comment-reply-title margin-bottom-14">
                                                            <h5>Write a review</h5>
                                                            <p>Your email address will not be published. Required fields are marked *</p>
                                                        </div>
                                                        <form noValidate="" className="comment-form review-form" id="commentform" method="post" action="#">
                                                            <p className="flat-star style-2">
                                                                <label>Rating*:</label>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                            </p>
                                                            <p className="comment-form-comment">
                                                                <label>Review*</label>
                                                                <textarea className="" tabIndex="4" name="comment" value={message} required> </textarea>
                                                            </p>
                                                            <p className="comment-name">
                                                                <label>Name*</label>
                                                                <input type="text" aria-required="true" size="30" name="name" id="name" />
                                                            </p>
                                                            <p className="comment-email">
                                                                <label>Email*</label>
                                                                <input type="email" size="30" name="email" id="email" />
                                                            </p>
                                                            <p className="comment-form-notify clearfix">
                                                                <input type="checkbox" name="check-notify" id="check-notify" /> <label htmlFor="check-notify">Notify me of new posts by email</label>
                                                            </p>
                                                            <p className="form-submit">
                                                                <button className="comment-submit">Submit</button>
                                                            </p>
                                                        </form>
                                                    </div>
                                                    {/* <!-- /.comment-respond -->                                             */}
                                                </div>
                                            </div>
                                            {/* <!-- /.content-inner --> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- /.shop-detail-content --> */}

                <section className="flat-row shop-related">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="title-section margin-bottom-55">
                                    <h2 className="title">Related Products</h2>
                                </div>

                                <div className="product-content product-fourcolumn clearfix">
                                    <ul className="product style2">
                                        <li className="product-item">
                                            <div className="product-thumb clearfix">
                                                <a href="#">
                                                    <img src="./public/assets/images/shop/sh-4/1.jpg" alt="image" />
                                                </a>
                                            </div>
                                            <div className="product-info clearfix">
                                                <span className="product-title">Cotton White Underweaer Block Out Edition</span>
                                                <div className="price">
                                                    <ins>
                                                        <span className="amount">$19.00</span>
                                                    </ins>
                                                </div>
                                                <ul className="flat-color-list">
                                                    <li>
                                                        <a href="#" className="red"></a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="blue"></a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="black"></a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="add-to-cart text-center">
                                                <a href="#">ADD TO CART</a>
                                            </div>
                                            <a href="#" className="like"><i className="fa fa-heart-o"></i></a>
                                        </li>
                                        <li className="product-item">
                                            <div className="product-thumb clearfix">
                                                <a href="#">
                                                    <img src="./public/assets/images/shop/sh-4/2.jpg" alt="image" />
                                                </a>
                                                <span className="new">New</span>
                                            </div>
                                            <div className="product-info clearfix">
                                                <span className="product-title">Cotton White Underweaer Block Out Edition</span>
                                                <div className="price">
                                                    <ins>
                                                        <span className="amount">$10.00</span>
                                                    </ins>
                                                </div>
                                            </div>
                                            <div className="add-to-cart text-center">
                                                <a href="#">ADD TO CART</a>
                                            </div>
                                            <a href="#" className="like"><i className="fa fa-heart-o"></i></a>
                                        </li>
                                        <li className="product-item">
                                            <div className="product-thumb clearfix">
                                                <a href="#" className="product-thumb">
                                                    <img src="./public/assets/images/shop/sh-4/3.jpg" alt="image" />
                                                </a>
                                            </div>
                                            <div className="product-info clearfix">
                                                <span className="product-title">Cotton White Underweaer Block Out Edition</span>
                                                <div className="price">
                                                    <ins>
                                                        <span className="amount">$20.00</span>
                                                    </ins>
                                                </div>
                                            </div>
                                            <div className="add-to-cart text-center">
                                                <a href="#">ADD TO CART</a>
                                            </div>
                                            <a href="#" className="like"><i className="fa fa-heart-o"></i></a>
                                        </li>
                                        <li className="product-item">
                                            <div className="product-thumb clearfix">
                                                <a href="#" className="product-thumb">
                                                    <img src="./public/assets/images/shop/sh-4/4.jpg" alt="image" />
                                                </a>
                                                <span className="new sale">Sale</span>
                                            </div>
                                            <div className="product-info clearfix">
                                                <span className="product-title">Cotton White Underweaer Block Out Edition</span>
                                                <div className="price">
                                                    <del>
                                                        <span className="regular">$90.00</span>
                                                    </del>
                                                    <ins>
                                                        <span className="amount">$60.00</span>
                                                    </ins>
                                                </div>
                                                <ul className="flat-color-list">
                                                    <li>
                                                        <a href="#" className="red"></a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="blue"></a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="black"></a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="add-to-cart text-center">
                                                <a href="#">ADD TO CART</a>
                                            </div>
                                            <a href="#" className="like"><i className="fa fa-heart-o"></i></a>
                                        </li>
                                    </ul>
                                    {/* <!-- /.product --> */}
                                </div>
                                {/* <!-- /.product-content --> */}
                            </div>
                        </div>
                        {/* <!-- /.row --> */}
                    </div>
                </section>

                <section className="flat-row mail-chimp">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="text">
                                    <h3>Sign up for Send Newsletter</h3>
                                </div>
                            </div>
                            <div className="col-md-8">
                                <div className="subscribe clearfix">
                                    <form action="#" method="post" acceptCharset="utf-8" id="subscribe-form">
                                        <div className="subscribe-content">
                                            <div className="input">
                                                <input type="email" name="subscribe-email" placeholder="Your Email" />
                                            </div>
                                            <div className="button">
                                                <button type="button">SUBCRIBE</button>
                                            </div>
                                        </div>
                                    </form>
                                    <ul className="flat-social">
                                        <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                        <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                        <li><a href="#"><i className="fa fa-google"></i></a></li>
                                        <li><a href="#"><i className="fa fa-behance"></i></a></li>
                                        <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
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
                <footer className="footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3">
                                <div className="widget widget-link">
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
                            <div className="col-md-3">
                                <div className="widget widget-link link-login">
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
                            <div className="col-md-3">
                                <div className="widget widget-link link-faq">
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
                            <div className="col-md-3">
                                <div className="widget widget-brand">
                                    <div className="logo logo-footer">
                                        <a href="index.html"><img src="./public/assets/images/logo@2x.png" alt="image" width="107" height="24" /></a>
                                    </div>
                                    <ul className="flat-contact">
                                        <li className="address">112 Kingdom, NA 12, New York</li>
                                        <li className="phone">+12 345 678 910</li>
                                        <li className="email">infor.deercreative@gmail.com</li>
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

                <div className="footer-bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <p className="copyright text-center">Copyright @2018 <a href="#">Modaz</a></p>
                            </div>
                        </div>
                    </div>
                </div>


                {/* <!-- Go Top --> */}
                <a className="go-top">
                    <i className="fa fa-chevron-up"></i>
                </a>

            </div>

        </div>
    )
}

export default ShopDetails