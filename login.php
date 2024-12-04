<?php
include 'includes/header.php';
$page = 'home';
?>
<main>

    <section class="home-banner-wrap">
        <div class="container">
            <div class="row">
                <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"></div>
            </div>
        </div>
    </section>

    <section class="register-sec-wrap">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                    <div class="form-main">
                        <div class="heads">
                            <h6>Account Login</h6>
                            <p>Enter the login credentials to login into your account</p>
                        </div>
                        <form action="">
                            <div class="row">
                                <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                    <div class="input-main">
                                        <label for="">Login Email</label>
                                        <input type="text" class="form-control fm-ctl" placeholder="Enter email address" required>
                                    </div>
                                </div>
                                <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                    <div class="input-main">
                                        <label for="">Login Password</label>
                                        <input id="password-field" type="password" class="form-control fm-ctl" placeholder="enter password" required>
                                        <span toggle="#password-field" class="fa-regular fa-eye field-icon1 toggle-password"></span>
                                    </div>
                                </div>
                                <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                    <button type="submit" class="btn submit-btn hvr-bounce-to-right">sign
                                        in</button>
                                    <p>You don't have an account? <a href="register.php" class="link">create new Account</a>
                                    </p>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>

</main>
<?php
include 'includes/footer.php';
$page = 'home';
?>