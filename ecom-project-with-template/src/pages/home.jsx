import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
    const navigate = useNavigate();

    const handleGoToShop = () => {
        navigate('/Shop');
    }

    const handleGoToContact = () => {
        navigate('/Contact');
    }

    return (
        <div className="header_sticky header-style-1 has-menu-extra">

            {/* <!-- Preloader --> */}
            <div id="loading-overlay">
                <div className="loader"></div>
            </div>


            {/* <!-- Boxed --> */}
            <div className="boxed">
                <div id="site-header-wrap">

                    {/* <!-- Header --> */}
                    <header id="header" className="header header-container clearfix">
                        <div className="container clearfix" id="site-header-inner">
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
                                        <li className="active">
                                            <a href="index.html">HOME</a>
                                            <ul className="submenu">
                                                <li className="active"><a href="index.html">Homepage Style 1</a></li>
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
                                                        <li><a href="shop-detail-zoom.html">Details Zoom</a></li>
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
                                        <li >
                                            <a href="blog-list.html">BLOG</a>
                                            <ul className="submenu">
                                                <li ><a href="blog-list.html">Blog List Full</a></li>
                                                <li><a href="blog-list-1.html">Blog list Slide 1</a></li>
                                                <li><a href="blog-list-2.html">Blog list Slide 2</a></li>
                                                <li><a href="blog-grid.html">Blog Gird Full</a></li>
                                                <li><a href="blog-grid-1.html">Blog Gird Slide</a></li>
                                                <li><a href="blog-detail.html">Blog Details</a></li>
                                            </ul>
                                            {/* <!-- /.submenu --> */}
                                        </li>
                                        <li>
                                            <a href="contact.html" onClick={handleGoToContact}>CONTACT</a>
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
                {/* <!-- /#site-header-wrap --> */}


                {/* <!-- SLIDER --> */}
                <div className="rev_slider_wrapper fullwidthbanner-container">
                    <div id="rev-slider1" className="rev_slider fullwidthabanner">
                        <ul>

                            {/* <!-- Slide 1 --> */}
                            <li data-transition="random">

                                {/* <!-- Main Image --> */}
                                <img src="./public/assets/images/slider/slider-bg-5.jpg" alt="" data-bgposition="center center" data-no-retina />


                                {/* <!-- Layers --> */}
                                <div className="tp-caption tp-resizeme text-white font-weight-300"
                                    data-x="['left','left','left','center']" data-hoffset="['0','0','0','0']"
                                    data-y="['middle','middle','middle','middle']" data-voffset="['-93','-93','-93','-93']"
                                    data-fontsize="['24','24','24','18']"
                                    data-lineheight="['72','72','72','36']"
                                    data-width="full"
                                    data-height="none"
                                    data-whitespace="normal"
                                    data-transform_idle="o:1;"
                                    data-transform_in="y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;s:2000;e:Power4.easeInOut;"
                                    data-transform_out="y:[100%];s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;"
                                    data-mask_in="x:0px;y:[100%];"
                                    data-mask_out="x:inherit;y:inherit;"
                                    data-start="700"
                                    data-splitin="none"
                                    data-splitout="none"
                                    data-responsive_offset="on">
                                    NEW TREND 2018
                                </div>

                                <div className="tp-caption tp-resizeme text-white font-weight-500"
                                    data-x="['left','left','left','center']" data-hoffset="['0','0','0','0']"
                                    data-y="['middle','middle','middle','middle']" data-voffset="['-42','-42','-42','-42']"
                                    data-fontsize="['52','52','52','40']"
                                    data-lineheight="['60','60','60','40']"
                                    data-width="full"
                                    data-height="none"
                                    data-whitespace="normal"
                                    data-transform_idle="o:1;"
                                    data-transform_in="y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;s:2000;e:Power4.easeInOut;"
                                    data-transform_out="y:[100%];s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;"
                                    data-mask_in="x:0px;y:[100%];"
                                    data-mask_out="x:inherit;y:inherit;"
                                    data-start="1000"
                                    data-splitin="none"
                                    data-splitout="none"
                                    data-responsive_offset="on">
                                    New Collection
                                </div>

                                <div className="tp-caption tp-resizeme text-white font-weight-400 "
                                    data-x="['left','left','left','center']" data-hoffset="['0','0','0','0']"
                                    data-y="['middle','middle','middle','middle']" data-voffset="['12','12','12','12']"
                                    data-fontsize="['18','18','18','16']"
                                    data-lineheight="['72','72','72','38']"
                                    data-width="full"
                                    data-height="none"
                                    data-whitespace="normal"
                                    data-transform_idle="o:1;"
                                    data-transform_in="y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;s:2000;e:Power4.easeInOut;"
                                    data-transform_out="y:[100%];s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;"
                                    data-mask_in="x:0px;y:[100%];"
                                    data-mask_out="x:inherit;y:inherit;"
                                    data-start="1000"
                                    data-splitin="none"
                                    data-splitout="none"
                                    data-responsive_offset="on">
                                    BIG SALE OF THIS WEEK UP TO 30%
                                </div>

                                <div className="tp-caption"
                                    data-x="['left','left','left','center']" data-hoffset="['0','0','0','0']"
                                    data-y="['middle','middle','middle','middle']" data-voffset="['80','80','80','80']"
                                    data-width="full"
                                    data-height="none"
                                    data-whitespace="normal"
                                    data-transform_idle="o:1;"
                                    data-transform_in="y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;s:2000;e:Power4.easeInOut;"
                                    data-transform_out="y:[100%];s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;"
                                    data-mask_in="x:0px;y:[100%];"
                                    data-mask_out="x:inherit;y:inherit;"
                                    data-start="1000"
                                    data-splitin="none"
                                    data-splitout="none"
                                    data-responsive_offset="on">
                                    <a href="#" className="themesflat-button has-padding-36 bg-accent has-shadow"><span>SHOP NOW</span></a>
                                </div>
                            </li>

                            {/* <!-- /End Slide 1 --> */}


                            {/* <!-- Slide 2 --> */}
                            <li data-transition="random">

                                {/* <!-- Main Image --> */}
                                <img src="./public/assets/images/slider/slider-bg-1.jpg" alt="" data-bgposition="center center" data-no-retina />


                                {/* <!-- Layers --> */}
                                <div className="tp-caption tp-resizeme text-333 font-weight-400 text-right"
                                    data-x="['right','right','right','center']" data-hoffset="['33','33','33','0']"
                                    data-y="['middle','middle','middle','middle']" data-voffset="['-115','-115','-115','-115']"
                                    data-fontsize="['22','22','22','22']"
                                    data-lineheight="['60','60','60','60']"
                                    data-width="full"
                                    data-height="none"
                                    data-whitespace="normal"
                                    data-transform_idle="o:1;"
                                    data-transform_in="y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;s:2000;e:Power4.easeInOut;"
                                    data-transform_out="y:[100%];s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;"
                                    data-mask_in="x:0px;y:[100%];"
                                    data-mask_out="x:inherit;y:inherit;"
                                    data-start="700"
                                    data-splitin="none"
                                    data-splitout="none"
                                    data-responsive_offset="on">
                                    <span className="text-line left"></span>Summer Fashion<span className="text-line right"></span>
                                </div>

                                <div className="tp-caption tp-resizeme text-333 font-weight-500 letter-spacing-10 text-right"
                                    data-x="['right','right','right','center']" data-hoffset="['13','13','13','0']"
                                    data-y="['middle','middle','middle','middle']" data-voffset="['-39','-39','-39','-59']"
                                    data-fontsize="['130','130','130','60']"
                                    data-lineheight="['130','130','130','60']"
                                    data-width="full"
                                    data-height="none"
                                    data-whitespace="normal"
                                    data-transform_idle="o:1;"
                                    data-transform_in="y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;s:2000;e:Power4.easeInOut;"
                                    data-transform_out="y:[100%];s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;"
                                    data-mask_in="x:0px;y:[100%];"
                                    data-mask_out="x:inherit;y:inherit;"
                                    data-start="1000"
                                    data-splitin="none"
                                    data-splitout="none"
                                    data-responsive_offset="on">
                                    SALE
                                </div>

                                <div className="tp-caption tp-resizeme text-333 font-weight-400 text-right"
                                    data-x="['right','right','right','center']" data-hoffset="['13','13','13','0']"
                                    data-y="['middle','middle','middle','middle']" data-voffset="['50','50','50','5']"
                                    data-fontsize="['48','48','48','28']"
                                    data-lineheight="['60','60','60','40']"
                                    data-width="full"
                                    data-height="none"
                                    data-whitespace="normal"
                                    data-transform_idle="o:1;"
                                    data-transform_in="y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;s:2000;e:Power4.easeInOut;"
                                    data-transform_out="y:[100%];s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;"
                                    data-mask_in="x:0px;y:[100%];"
                                    data-mask_out="x:inherit;y:inherit;"
                                    data-start="1000"
                                    data-splitin="none"
                                    data-splitout="none"
                                    data-responsive_offset="on">
                                    UP TO <span className="text-accent">30%</span> OFF
                                </div>

                                <div className="tp-caption text-right"
                                    data-x="['right','right','right','center']" data-hoffset="['105','105','105','0']"
                                    data-y="['middle','middle','middle','middle']" data-voffset="['138','138','138','80']"
                                    data-width="full"
                                    data-height="none"
                                    data-whitespace="normal"
                                    data-transform_idle="o:1;"
                                    data-transform_in="y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;s:2000;e:Power4.easeInOut;"
                                    data-transform_out="y:[100%];s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;"
                                    data-mask_in="x:0px;y:[100%];"
                                    data-mask_out="x:inherit;y:inherit;"
                                    data-start="1000"
                                    data-splitin="none"
                                    data-splitout="none"
                                    data-responsive_offset="on">
                                    <a href="#" className="themesflat-button bg-accent has-shadow"><span>BY NOW</span></a>
                                </div>
                            </li>

                            {/* <!-- /End Slide 2 --> */}
                        </ul>
                    </div>
                </div>

                {/* <!-- END SLIDER --> */}


                {/* <!-- IMAGE BOX --> */}
                <section className="flat-row row-image-box">
                    <div className="container">
                        <div className="row gutter-10">
                            <div className="col-sm-6 col-md-4">
                                <div className="flat-image-box style-1 data-effect div-h22 clearfix">
                                    <div className="item data-effect-item">
                                        <div className="inner">
                                            <div className="thumb">
                                                <img src="./public/assets/images/image-box/imgbox-1-375x500.jpg" alt="Image" />
                                                <div className="elm-btn">
                                                    <a href="#" className="themesflat-button bg-white width-150">For Men’s</a>
                                                </div>
                                                <div className="overlay-effect bg-color-1"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- /.col-md-4 --> */}
                            <div className="col-sm-6 col-md-4">
                                <div className="flat-image-box style-1 row2 data-effect clearfix">
                                    <div className="item data-effect-item">
                                        <div className="inner">
                                            <div className="thumb">
                                                <img src="./public/assets/images/image-box/imgbox-1-375x240.jpg" alt="Image" />
                                                <div className="elm-btn">
                                                    <a href="#" className="themesflat-button bg-white width-150">For Kid’s</a>
                                                </div>
                                                <div className="overlay-effect bg-color-1"></div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="item data-effect-item">
                                        <div className="inner">
                                            <div className="thumb">
                                                <img src="./public/assets/images/image-box/imgbox-2-375x240.jpg" alt="Image" />
                                                <div className="elm-btn">
                                                    <a href="#" className="themesflat-button bg-white width-150">accessories</a>
                                                </div>
                                                <div className="overlay-effect bg-color-1"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- /.col-md-4 --> */}
                            <div className="col-sm-6 col-md-4">
                                <div className="flat-image-box style-1 data-effect div-h20 clearfix">
                                    <div className="item data-effect-item">
                                        <div className="inner">
                                            <div className="thumb">
                                                <img src="./public/assets/images/image-box/imgbox-2-375x500.jpg" alt="Image" />
                                                <div className="elm-btn">
                                                    <a href="#" className="themesflat-button bg-white width-150">For woMen’s</a>
                                                </div>
                                                <div className="overlay-effect bg-color-1"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- /.col-md-4 --> */}
                        </div>
                        {/* <!-- /.row --> */}
                    </div>
                    {/* <!-- /.container --> */}
                </section>

                {/* <!-- END IMAGE BOX --> */}


                {/* <!-- PRODUCT NEW --> */}
                <section className="flat-row row-product-new">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="title-section margin-bottom-52">
                                    <h2 className="title">
                                        New Product
                                    </h2>
                                </div>
                                <div className="product-content product-fourcolumn clearfix">
                                    <ul className="product style2 clearfix">
                                        <li className="product-item">
                                            <div className="product-thumb clearfix">
                                                <a href="#" className="product-thumb">
                                                    <img src="./public/assets/images/shop/sh-4/13.jpg" alt="image" />
                                                </a>
                                                <span className="new">New</span>
                                            </div>
                                            <div className="product-info text-center clearfix">
                                                <span className="product-title">Cotton White Underweaer Block Out Edition</span>
                                                <div className="price">
                                                    <ins>
                                                        <span className="amount">$100.00</span>
                                                    </ins>
                                                </div>
                                                <ul className="flat-color-list width-14">
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
                                                <a href="#" className="product-thumb">
                                                    <img src="./public/assets/images/shop/sh-4/14.jpg" alt="image" />
                                                </a>
                                                <span className="new">New</span>
                                            </div>
                                            <div className="product-info clearfix">
                                                <span className="product-title">Cotton White Underweaer Block Out Edition</span>
                                                <div className="price">
                                                    <ins>
                                                        <span className="amount">$100.00</span>
                                                    </ins>
                                                </div>
                                                <ul className="flat-color-list width-14">
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
                                                <a href="#" className="product-thumb">
                                                    <img src="./public/assets/images/shop/sh-4/15.jpg" alt="image" />
                                                </a>
                                                <span className="new sale">Sale</span>
                                            </div>
                                            <div className="product-info clearfix">
                                                <span className="product-title">Cotton White Underweaer Block Out Edition</span>
                                                <div className="price">
                                                    <del>
                                                        <span className="regular">$150.00</span>
                                                    </del>
                                                    <ins>
                                                        <span className="amount">$100.00</span>
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
                                                    <img src="./public/assets/images/shop/sh-4/16.jpg" alt="image" />
                                                </a>
                                            </div>
                                            <div className="product-info clearfix">
                                                <span className="product-title">Cotton White Underweaer Block Out Edition</span>
                                                <div className="price">
                                                    <ins>
                                                        <span className="amount">$100.00</span>
                                                    </ins>
                                                </div>
                                                <ul className="flat-color-list width-14">
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
                                </div>
                            </div>
                        </div>
                        {/* <!-- /.row --> */}
                    </div>
                    {/* <!-- /.container --> */}
                </section>

                {/* <!-- END PRODUCT NEW --> */}


                {/* <!-- ANIMATION BOX --> */}
                <section className="flat-row row-animation-box bg-section row-1">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="flat-animation-block" >
                                    <div className="title-section width-before-17 bg-before-white margin-bottom-14">
                                        <div className="sup-title"><span>NEW TREND 2018</span></div>
                                        <h2 className="title font-size-52 line-height-76">Women‘s Collection</h2>
                                        <div className="sub-title"><span>Big Sale of this Week</span></div>
                                    </div>
                                    <div className="elm-btn text-center">
                                        <a href="#" className="themesflat-button bg-accent has-padding-36">Shop Now</a>
                                    </div>
                                </div>
                                {/* <!-- /.flat-animation-block --> */}
                            </div>
                        </div>
                        {/* <!-- /.row --> */}
                    </div>
                    {/* <!-- /.container --> */}
                </section>

                {/* <!-- END ANIMATION BOX --> */}


                {/* <!-- PRODUCT --> */}
                <section className="flat-row row-product-project style-1">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="title-section margin-bottom-41">
                                    <h2 className="title">Best Sale</h2>
                                </div>
                                <ul className="flat-filter style-1 text-center max-width-682 clearfix">
                                    <li className="active"><a href="#" data-filter="*">All Product</a></li>
                                    <li><a href="#" data-filter=".kid">For Kid’s</a></li>
                                    <li><a href="#" data-filter=".man">For Man’s</a></li>
                                    <li><a href="#" data-filter=".woman">For Woman’s</a></li>
                                    <li><a href="#" data-filter=".accessories">Accessories</a></li>
                                </ul>
                                <div className="divider h54"></div>
                                <div className="product-content product-fourcolumn clearfix">
                                    <ul className="product style2 isotope-product clearfix">
                                        <li className="product-item kid woman">
                                            <div className="product-thumb clearfix">
                                                <a href="#">
                                                    <img src="./public/assets/images/shop/sh-4/1.jpg" alt="image" />
                                                </a>
                                            </div>
                                            <div className="product-info clearfix">
                                                <span className="product-title">Cotton White Underweaer Block Out Edition</span>
                                                <div className="price">
                                                    <ins>
                                                        <span className="amount">$100.00</span>
                                                    </ins>
                                                </div>
                                                <ul className="flat-color-list width-14">
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
                                        <li className="product-item man accessories">
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
                                                        <span className="amount">$100.00</span>
                                                    </ins>
                                                </div>
                                            </div>
                                            <div className="add-to-cart text-center">
                                                <a href="#">ADD TO CART</a>
                                            </div>
                                            <a href="#" className="like"><i className="fa fa-heart-o"></i></a>
                                        </li>
                                        <li className="product-item kid woman">
                                            <div className="product-thumb clearfix">
                                                <a href="#" className="product-thumb">
                                                    <img src="./public/assets/images/shop/sh-4/3.jpg" alt="image" />
                                                </a>
                                            </div>
                                            <div className="product-info clearfix">
                                                <span className="product-title">Cotton White Underweaer Block Out Edition</span>
                                                <div className="price">
                                                    <ins>
                                                        <span className="amount">$100.00</span>
                                                    </ins>
                                                </div>
                                            </div>
                                            <div className="add-to-cart text-center">
                                                <a href="#">ADD TO CART</a>
                                            </div>
                                            <a href="#" className="like"><i className="fa fa-heart-o"></i></a>
                                        </li>
                                        <li className="product-item man accessories">
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
                                                        <span className="regular">$120.00</span>
                                                    </del>
                                                    <ins>
                                                        <span className="amount">$100.00</span>
                                                    </ins>
                                                </div>
                                                <ul className="flat-color-list width-14">
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
                                        <li className="product-item kid woman">
                                            <div className="product-thumb clearfix">
                                                <a href="#" className="product-thumb">
                                                    <img src="./public/assets/images/shop/sh-4/5.jpg" alt="image" />
                                                </a>
                                                <span className="new">New</span>
                                            </div>
                                            <div className="product-info clearfix">
                                                <span className="product-title">Cotton White Underweaer Block Out Edition</span>
                                                <div className="price">
                                                    <ins>
                                                        <span className="amount">$100.00</span>
                                                    </ins>
                                                </div>
                                            </div>
                                            <div className="add-to-cart text-center">
                                                <a href="#">ADD TO CART</a>
                                            </div>
                                            <a href="#" className="like"><i className="fa fa-heart-o"></i></a>
                                        </li>
                                        <li className="product-item man accessories">
                                            <div className="product-thumb clearfix">
                                                <a href="#" className="product-thumb">
                                                    <img src="./public/assets/images/shop/sh-4/6.jpg" alt="image" />
                                                </a>
                                                <span className="new sale">Sale</span>
                                            </div>
                                            <div className="product-info clearfix">
                                                <span className="product-title">Cotton White Underweaer Block Out Edition</span>
                                                <div className="price">
                                                    <del>
                                                        <span className="regular">$150.00</span>
                                                    </del>
                                                    <ins>
                                                        <span className="amount">$100.00</span>
                                                    </ins>
                                                </div>
                                                <ul className="flat-color-list width-14">
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
                                        <li className="product-item kid woman">
                                            <div className="product-thumb clearfix">
                                                <a href="#" className="product-thumb">
                                                    <img src="./public/assets/images/shop/sh-4/7.jpg" alt="image" />
                                                </a>
                                            </div>
                                            <div className="product-info clearfix">
                                                <span className="product-title">Cotton White Underweaer Block Out Edition</span>
                                                <div className="price">
                                                    <ins>
                                                        <span className="amount">$100.00</span>
                                                    </ins>
                                                </div>
                                            </div>
                                            <div className="add-to-cart text-center">
                                                <a href="#">ADD TO CART</a>
                                            </div>
                                            <a href="#" className="like"><i className="fa fa-heart-o"></i></a>
                                        </li>
                                        <li className="product-item man accessories">
                                            <div className="product-thumb clearfix">
                                                <a href="#" className="product-thumb">
                                                    <img src="./public/assets/images/shop/sh-4/8.jpg" alt="image" />
                                                </a>
                                                <span className="new">New</span>
                                            </div>
                                            <div className="product-info clearfix">
                                                <span className="product-title">Cotton White Underweaer Block Out Edition</span>
                                                <div className="price">
                                                    <ins>
                                                        <span className="amount">$100.00</span>
                                                    </ins>
                                                </div>
                                            </div>
                                            <div className="add-to-cart text-center">
                                                <a href="#">ADD TO CART</a>
                                            </div>
                                            <a href="#" className="like"><i className="fa fa-heart-o"></i></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <!-- END PRODUCT --> */}


                {/* <!-- ICON BOX --> */}
                <section className="flat-row row-icon-box bg-section bg-color-f5f">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3">
                                <div className="flat-icon-box icon-top style-1 clearfix text-center">
                                    <div className="inner no-margin">
                                        <div className="icon-wrap">
                                            <i className="fa fa-truck"></i>
                                        </div>
                                        <div className="text-wrap">
                                            <h5 className="heading"><a href="#">Free Shipping</a></h5>
                                            <p className="desc">Free Shipping on order over $99</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- /.col-md-3 --> */}
                            <div className="col-md-3">
                                <div className="flat-icon-box icon-top style-1 clearfix text-center">
                                    <div className="inner">
                                        <div className="icon-wrap">
                                            <i className="fa fa-money"></i>
                                        </div>
                                        <div className="text-wrap">
                                            <h5 className="heading"><a href="#">Cash On Delivery</a></h5>
                                            <p className="desc">The Internet Trend To Repeat</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- /.col-md-3 --> */}
                            <div className="col-md-3">
                                <div className="flat-icon-box icon-top style-1 clearfix text-center">
                                    <div className="inner">
                                        <div className="icon-wrap">
                                            <i className="fa fa-gift"></i>
                                        </div>
                                        <div className="text-wrap">
                                            <h5 className="heading"><a href="#">Gift For All</a></h5>
                                            <p className="desc">Receive Gift When Subscribe</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- /.col-md-3 --> */}
                            <div className="col-md-3">
                                <div className="flat-icon-box icon-top style-1 clearfix text-center">
                                    <div className="inner">
                                        <div className="icon-wrap">
                                            <i className="fa fa-clock-o"></i>
                                        </div>
                                        <div className="text-wrap">
                                            <h5 className="heading"><a href="#">Opening All Week</a></h5>
                                            <p className="desc">6.00 am - 17.00pm</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- /.col-md-3 --> */}
                        </div>
                    </div>
                </section>

                {/* <!-- END ICON BOX --> */}


                {/* <!-- NEW LATEST --> */}
                <section className="flat-row row-new-latest">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="title-section margin-bottom-40">
                                    <h2 className="title">New Latest</h2>
                                </div>
                                <div className="new-latest-wrap">
                                    <div className="flat-new-latest flat-carousel-box post-wrap style3 data-effect clearfix" data-auto="false" data-column="3" data-column2="2" data-column3="1" data-gap="30" >
                                        <div className="owl-carousel owl-theme">
                                            <article className="post clearfix">
                                                <div className="featured-post data-effect-item">
                                                    <img src="./public/assets/images/blog/new-lastest-1-370x280.jpg" alt="image" />
                                                    <div className="content-post text-center">
                                                        <div className="title-post">
                                                            <h2><a href="blog-detail.html">Trend Of 2018</a></h2>
                                                        </div>
                                                        {/* <!-- /.title-post --> */}
                                                        <ul className="meta-post">
                                                            <li className="date">
                                                                OCT 08, 2018
                                                            </li>
                                                            <li className="author">
                                                                <a href="#">BY ADMIN</a>
                                                            </li>
                                                        </ul>
                                                        {/* <!-- /.meta-post --> */}
                                                        <div className="entry-post">
                                                            <p>This is Heading the bank manager long ago won the battle for the heart of...</p>
                                                            <div className="more-link">
                                                                <a href="blog-detail.html">READ MORE</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* <!-- /.content-post --> */}
                                                    <div className="overlay-effect bg-overlay-black"></div>
                                                </div>
                                            </article>
                                            {/* <!-- /.post --> */}
                                            <article className="post clearfix">
                                                <div className="featured-post data-effect-item">
                                                    <img src="./public/assets/images/blog/new-lastest-2-370x280.jpg" alt="image" />
                                                    <div className="content-post text-center">
                                                        <div className="title-post">
                                                            <h2><a href="blog-detail.html">Trend Of 2018</a></h2>
                                                        </div>
                                                        {/* <!-- /.title-post --> */}
                                                        <ul className="meta-post">
                                                            <li className="date">
                                                                OCT 08, 2018
                                                            </li>
                                                            <li className="author">
                                                                <a href="#">BY ADMIN</a>
                                                            </li>
                                                        </ul>
                                                        {/* <!-- /.meta-post --> */}
                                                        <div className="entry-post">
                                                            <p>This is Heading the bank manager long ago won the battle for the heart of...</p>
                                                            <div className="more-link">
                                                                <a href="blog-detail.html">READ MORE</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* <!-- /.content-post --> */}
                                                    <div className="overlay-effect bg-overlay-black"></div>
                                                </div>
                                            </article>
                                            {/* <!-- /.post --> */}
                                            <article className="post clearfix">
                                                <div className="featured-post data-effect-item">
                                                    <img src="./public/assets/images/blog/new-lastest-3-370x280.jpg" alt="image" />
                                                    <div className="content-post text-center">
                                                        <div className="title-post">
                                                            <h2><a href="blog-detail.html">Trend Of 2018</a></h2>
                                                        </div>
                                                        {/* <!-- /.title-post --> */}
                                                        <ul className="meta-post">
                                                            <li className="date">
                                                                OCT 08, 2018
                                                            </li>
                                                            <li className="author">
                                                                <a href="#">BY ADMIN</a>
                                                            </li>
                                                        </ul>
                                                        {/* <!-- /.meta-post --> */}
                                                        <div className="entry-post">
                                                            <p>This is Heading the bank manager long ago won the battle for the heart of...</p>
                                                            <div className="more-link">
                                                                <a href="blog-detail.html">READ MORE</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* <!-- /.content-post --> */}
                                                    <div className="overlay-effect bg-overlay-black"></div>
                                                </div>
                                            </article>
                                            {/* <!-- /.post --> */}
                                            <article className="post clearfix">
                                                <div className="featured-post data-effect-item">
                                                    <img src="./public/assets/images/blog/new-lastest-1-370x280.jpg" alt="image" />
                                                    <div className="content-post text-center">
                                                        <div className="title-post">
                                                            <h2><a href="blog-detail.html">Trend Of 2018</a></h2>
                                                        </div>
                                                        {/* <!-- /.title-post --> */}
                                                        <ul className="meta-post">
                                                            <li className="date">
                                                                OCT 08, 2018
                                                            </li>
                                                            <li className="author">
                                                                <a href="#">BY ADMIN</a>
                                                            </li>
                                                        </ul>
                                                        {/* <!-- /.meta-post --> */}
                                                        <div className="entry-post">
                                                            <p>This is Heading the bank manager long ago won the battle for the heart of...</p>
                                                            <div className="more-link">
                                                                <a href="blog-detail.html">READ MORE</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* <!-- /.content-post --> */}
                                                    <div className="overlay-effect bg-overlay-black"></div>
                                                </div>
                                            </article>
                                            {/* <!-- /.post --> */}
                                            <article className="post clearfix">
                                                <div className="featured-post data-effect-item">
                                                    <img src="./public/assets/images/blog/new-lastest-2-370x280.jpg" alt="image" />
                                                    <div className="content-post text-center">
                                                        <div className="title-post">
                                                            <h2><a href="blog-detail.html">Trend Of 2018</a></h2>
                                                        </div>
                                                        {/* <!-- /.title-post --> */}
                                                        <ul className="meta-post">
                                                            <li className="date">
                                                                OCT 08, 2018
                                                            </li>
                                                            <li className="author">
                                                                <a href="#">BY ADMIN</a>
                                                            </li>
                                                        </ul>
                                                        {/* <!-- /.meta-post --> */}
                                                        <div className="entry-post">
                                                            <p>This is Heading the bank manager long ago won the battle for the heart of...</p>
                                                            <div className="more-link">
                                                                <a href="blog-detail.html">READ MORE</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* <!-- /.content-post --> */}
                                                    <div className="overlay-effect bg-overlay-black"></div>
                                                </div>
                                            </article>
                                            {/* <!-- /.post --> */}
                                            <article className="post clearfix">
                                                <div className="featured-post data-effect-item">
                                                    <img src="./public/assets/images/blog/new-lastest-3-370x280.jpg" alt="image" />
                                                    <div className="content-post text-center">
                                                        <div className="title-post">
                                                            <h2><a href="blog-detail.html">Trend Of 2018</a></h2>
                                                        </div>
                                                        {/* <!-- /.title-post --> */}
                                                        <ul className="meta-post">
                                                            <li className="date">
                                                                OCT 08, 2018
                                                            </li>
                                                            <li className="author">
                                                                <a href="#">BY ADMIN</a>
                                                            </li>
                                                        </ul>
                                                        {/* <!-- /.meta-post --> */}
                                                        <div className="entry-post">
                                                            <p>This is Heading the bank manager long ago won the battle for the heart of...</p>
                                                            <div className="more-link">
                                                                <a href="blog-detail.html">READ MORE</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* <!-- /.content-post --> */}
                                                    <div className="overlay-effect bg-overlay-black"></div>
                                                </div>
                                            </article>
                                            {/* <!-- /.post --> */}
                                        </div>
                                        {/* <!-- /.owl-carousel --> */}
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>

                {/* <!-- END NEW LATEST --> */}

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
                            <div className="col-sm-6 col-md-3">
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
                            <div className="col-sm-6 col-md-3">
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
                            <div className="col-sm-6 col-md-3">
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
                            <div className="col-sm-6 col-md-3">
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

export default Home