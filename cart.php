<?php
include 'includes/header.php';
$page = 'home';
?>

<header class="cart-head">
    <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container p-0">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="#">
                            Categories</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="#">Products</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="#">
                            Pages</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="#">
                            Blog</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="#">
                            Elements</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="#">
                            Contact Us</a>
                    </li>
                </ul>
            </div>
            <div class="cart-bottom">
                <ul>
                    <li>Special Offer!</li>
                    <li>Buy Porto!</li>
                </ul>
            </div>
        </div>
    </nav>
</header>


<section class="cart-product-sec">
    <div class="container">
        <div class="row">
            <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div class="prod">
                    <ul>
                        <li><a href="javascript:;"><i class="fa-solid fa-house"></i></a></li>
                        <li>></li>
                        <li><a href="javascripts:;">Products</a></li>
                    </ul>
                </div>
            </div>
            <div class="col-12 col-sm-12 col-md-5 col-lg-5 col-xl-5 col-xxl-5">
                <div class="slider-forone">

                    <div class="product-img--main" data-scale="1.6" data-image="images/product-1-big.jpg"
                        class="img-fluid">
                    </div>
                    <div class="product-img--main" data-scale="1.6" data-image="images/product-2-big.jpg"
                        class="img-fluid">
                    </div>
                    <div class="product-img--main" data-scale="1.6" data-image="images/product-3-big.jpg"
                        class="img-fluid">
                    </div>
                    <div class="product-img--main" data-scale="1.6" data-image="images/product-4-big.jpg"
                        class="img-fluid">
                    </div>
                    <div class="product-img--main" data-scale="1.6" data-image="images/product-5-big.jpg"
                        class="img-fluid">
                    </div>
                </div>
                <div class="slider-nav1">
                    <div><img src="images/products-1.jpg" alt="img" class="w-100"></div>
                    <div><img src="images/products-2.jpg" alt="img" class="w-100"></div>
                    <div><img src="images/products-3.jpg" alt="img" class="w-100"></div>
                    <div><img src="images/products-4.jpg" alt="img" class="w-100"></div>
                    <div><img src="images/products-5.jpg" alt="img" class="w-100"></div>
                </div>
            </div>
            <div class="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 col-xxl-7">
                <div class="content">
                    <h2>Men Black Sports Shoes</h2>
                    <div class="reviews">
                        <ul>
                            <li><i class="fa-solid fa-star"></i></li>
                            <li><i class="fa-solid fa-star"></i></li>
                            <li><i class="fa-solid fa-star"></i></li>
                            <li><i class="fa-solid fa-star"></i></li>
                            <li><i class="fa-solid fa-star"></i></li>
                        </ul>
                        <a href="Javascript:;">( 6 Reviews )</a>
                    </div>
                    <div class="line"></div>
                    <h3><del>$1,999.00</del> $1,699.00</h3>
                    <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                        Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero
                        sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
                    <div class="category">
                        <ul>
                            <li><span>SKU:</span> 654613612</li>
                            <li><span>CATEGORY:</span> SHOES</li>
                            <li><span>TAGs:</span> CLOTHES, SWEATER</li>
                        </ul>
                    </div>
                </div>
                <div class="plus-minus">
                    <div class="quantity">
                        <button class="minus" aria-label="Decrease">&minus;</button>
                        <input type="number" class="input-box" value="1" min="1" max="100">
                        <button class="plus" aria-label="Increase">&plus;</button>
                    </div>
                        <button class="addcart"><i class="fa-solid fa-bag-shopping"></i>
                            ADD TO CART
                        </button>
                </div>
                <div class="icon">
                    <ul>
                        <li><a href="javascript:;"><i class="fa-brands fa-facebook-f"></i></a></li>
                        <li><a href="javascript:;"><i class="fa-brands fa-twitter"></i></a></li>
                        <li><a href="javascript:;"><i class="fa-brands fa-linkedin-in"></i></a></li>
                        <li><a href="javascript:;"><i class="fa-brands fa-google-plus-g"></i></a></li>
                        <li><a href="javascript:;"><i class="fa-regular fa-envelope"></i></a></li>
                    </ul>
                    <a href="javascript:;"><i class="fa-regular fa-heart"></i> Add to Wishlist</a>
                </div>
            </div>
        </div>
    </div>
</section>



<?php
include 'includes/footer.php';
$page = 'home';
?>