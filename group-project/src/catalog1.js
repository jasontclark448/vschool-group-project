import React from 'react'


const catalog1 = () => {
    return (


        <div>
            <header class="header">
                <div class="header__wrap">
                    <div class="container">
                        <div class="row">
                            <div class="col-12">
                                <div class="header__content">

                                    <a href="Main.js" class="header__logo">

                                        <img src="img/HappyCelebratedChihuahua-size_restricted.gif" alt=""></img>

                                    </a>

                                    <ul class="header__nav">

                                        <li class="header__nav-item">
                                            <a href="Main.js" class="header__nav-link">Home</a>
                                        </li>


                                        <li class="header__nav-item">
                                            <a href="catalog1.js" class="header__nav-link">History</a>
                                        </li>

                                        <li class="header__nav-item">
                                            <a href="pricing.js" class="header__nav-link">pricing Plan</a>
                                        </li>

                                        <li class="header__nav-item">
                                            <a href="help.js" class="header__nav-link">Help</a>
                                        </li>


                                        <li class="dropdown header__nav-item"></li>
                                        <a class="dropdown-toggle header__nav-link header__nav-link--more" href="#"
                                            role="button" id="dropdownMenuMore" data-toggle="dropdown" aria-haspopup="true"
                                            aria-expanded="false"><i class="icon ion-ios-more"></i></a>

                                        <ul class="dropdown-menu header__dropdown-menu" aria-labelledby="dropdownMenuMore">
                                            <li><a href="about.js">About</a></li>
                                            <li><a href="signin.js">Sign In</a></li>
                                            <li><a href="signup.js">Sign Up</a></li>
                                            <li><a href="help.js">404 Page</a></li>
                                        </ul>
                                    </ul>

                                    <div class="header__auth">
                                        <button class="header__search-btn" type="button">
                                            <i class="icon ion-ios-search"></i>
                                        </button>

                                        <a href="signin.js" class="header__sign-in">
                                            <i class="icon ion-ios-log-in"></i>
                                            <span>sign in</span>
                                        </a>
                                    </div>

                                    <button class="header__btn" type="button">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <form action="#" class="header__search">
                    <div class="container">
                        <div class="row">
                            <div class="col-12">
                                <div class="header__search-content">
                                    <input type="text" placeholder="Search"></input>

                                    <button type="button">search</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </header>

            <section class="section section--first section--bg" data-bg="img/section/section.jpg">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="section__wrap">

                                <h2 class="section__title">History</h2>

                                <ul class="breadcrumb">
                                    <li class="breadcrumb__item"><a href="#">Home</a></li>
                                    <li class="breadcrumb__item breadcrumb__item--active">History</li>
                                </ul>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <br></br>
            <div class="catalog">
                <div class="container">
                    <div class="row">

                        <div class="col-6 col-sm-4 col-lg-3 col-xl-2">
                            <div class="card">
                                <div class="card__cover">
                                    <img src="img/covers/cover.jpg" alt=""></img>
                                    <a href="#" class="card__play">
                                        <i class="icon ion-ios-play"></i>
                                    </a>
                                </div>
                                <div class="card__content">
                                    <h3 class="card__title"><a href="#">I Dream in Another Language</a></h3>
                                    <span class="card__category">
                                        <a href="#">Action</a>
                                        <a href="#">Conspiracy</a>
                                    </span>
                                    <span class="card__rate"><i class="icon ion-ios-star"></i>8.4</span>
                                </div>
                            </div>
                        </div>



                        <div class="col-6 col-sm-4 col-lg-3 col-xl-2">
                            <div class="card">
                                <div class="card__cover">
                                    <img src="img/covers/cover2.jpg" alt=""></img>
                                    <a href="#" class="card__play">
                                        <i class="icon ion-ios-play"></i>
                                    </a>
                                </div>
                                <div class="card__content">
                                    <h3 class="card__title"><a href="#">I am a video</a></h3>
                                    <span class="card__category">
                                        <a href="#">Conspiracy</a>
                                    </span>
                                    <span class="card__rate"><i class="icon ion-ios-star"></i>7.1</span>
                                </div>
                            </div>
                        </div>



                        <div class="col-6 col-sm-4 col-lg-3 col-xl-2">
                            <div class="card">
                                <div class="card__cover">
                                    <img src="img/covers/cover3.jpg" alt=""></img>
                                    <a href="#" class="card__play">
                                        <i class="icon ion-ios-play"></i>
                                    </a>
                                </div>
                                <div class="card__content">
                                    <h3 class="card__title"><a href="#">I am a video</a></h3>
                                    <span class="card__category">
                                        <a href="#">Conspiracy</a>
                                        <a href="#">Conspiracy</a>
                                        <a href="#">Music</a>
                                    </span>
                                    <span class="card__rate"><i class="icon ion-ios-star"></i>6.3</span>
                                </div>
                            </div>
                        </div>



                        <div class="col-6 col-sm-4 col-lg-3 col-xl-2">
                            <div class="card">
                                <div class="card__cover">
                                    <img src="img/covers/cover4.jpg" alt=""></img>
                                    <a href="#" class="card__play">
                                        <i class="icon ion-ios-play"></i>
                                    </a>
                                </div>
                                <div class="card__content">
                                    <h3 class="card__title"><a href="#">I am a video</a></h3>
                                    <span class="card__category">
                                        <a href="#">Conspiracy</a>
                                        <a href="#">Conspiracy</a>
                                    </span>
                                    <span class="card__rate"><i class="icon ion-ios-star"></i>7.9</span>
                                </div>
                            </div>
                        </div>



                        <div class="col-6 col-sm-4 col-lg-3 col-xl-2">
                            <div class="card">
                                <div class="card__cover">
                                    <img src="img/covers/cover5.jpg" alt=""></img>
                                    <a href="#" class="card__play">
                                        <i class="icon ion-ios-play"></i>
                                    </a>
                                </div>
                                <div class="card__content">
                                    <h3 class="card__title"><a href="#">I Dream in Another Language</a></h3>
                                    <span class="card__category">
                                        <a href="#">Action</a>
                                        <a href="#">Conspiracy</a>
                                    </span>
                                    <span class="card__rate"><i class="icon ion-ios-star"></i>8.4</span>
                                </div>
                            </div>
                        </div>



                        <div class="col-6 col-sm-4 col-lg-3 col-xl-2">
                            <div class="card">
                                <div class="card__cover">
                                    <img src="img/covers/cover6.jpg" alt=""></img>
                                    <a href="#" class="card__play">
                                        <i class="icon ion-ios-play"></i>
                                    </a>
                                </div>
                                <div class="card__content">
                                    <h3 class="card__title"><a href="#">I am a video</a></h3>
                                    <span class="card__category">
                                        <a href="#">Conspiracy</a>
                                    </span>
                                    <span class="card__rate"><i class="icon ion-ios-star"></i>7.1</span>
                                </div>
                            </div>
                        </div>



                        <div class="col-6 col-sm-4 col-lg-3 col-xl-2">
                            <div class="card">
                                <div class="card__cover">
                                    <img src="img/covers/cover6.jpg" alt=""></img>
                                    <a href="#" class="card__play">
                                        <i class="icon ion-ios-play"></i>
                                    </a>
                                </div>
                                <div class="card__content">
                                    <h3 class="card__title"><a href="#">I am a video</a></h3>
                                    <span class="card__category">
                                        <a href="#">Conspiracy</a>
                                        <a href="#">Conspiracy</a>
                                        <a href="#">Music</a>
                                    </span>
                                    <span class="card__rate"><i class="icon ion-ios-star"></i>6.3</span>
                                </div>
                            </div>
                        </div>



                        <div class="col-6 col-sm-4 col-lg-3 col-xl-2">
                            <div class="card">
                                <div class="card__cover">
                                    <img src="img/covers/cover5.jpg" alt=""></img>
                                    <a href="#" class="card__play">
                                        <i class="icon ion-ios-play"></i>
                                    </a>
                                </div>
                                <div class="card__content">
                                    <h3 class="card__title"><a href="#">I am a video</a></h3>
                                    <span class="card__category">
                                        <a href="#">Conspiracy</a>
                                        <a href="#">Conspiracy</a>
                                    </span>
                                    <span class="card__rate"><i class="icon ion-ios-star"></i>7.9</span>
                                </div>
                            </div>
                        </div>



                        <div class="col-6 col-sm-4 col-lg-3 col-xl-2">
                            <div class="card">
                                <div class="card__cover">
                                    <img src="img/covers/cover4.jpg" alt=""></img>
                                    <a href="#" class="card__play">
                                        <i class="icon ion-ios-play"></i>
                                    </a>
                                </div>
                                <div class="card__content">
                                    <h3 class="card__title"><a href="#">I Dream in Another Language</a></h3>
                                    <span class="card__category">
                                        <a href="#">Action</a>
                                        <a href="#">Conspiracy</a>
                                    </span>
                                    <span class="card__rate"><i class="icon ion-ios-star"></i>8.4</span>
                                </div>
                            </div>
                        </div>



                        <div class="col-6 col-sm-4 col-lg-3 col-xl-2">
                            <div class="card">
                                <div class="card__cover">
                                    <img src="img/covers/cover3.jpg" alt=""></img>
                                    <a href="#" class="card__play">
                                        <i class="icon ion-ios-play"></i>
                                    </a>
                                </div>
                                <div class="card__content">
                                    <h3 class="card__title"><a href="#">I am a video</a></h3>
                                    <span class="card__category">
                                        <a href="#">Conspiracy</a>
                                    </span>
                                    <span class="card__rate"><i class="icon ion-ios-star"></i>7.1</span>
                                </div>
                            </div>
                        </div>



                        <div class="col-6 col-sm-4 col-lg-3 col-xl-2">
                            <div class="card">
                                <div class="card__cover">
                                    <img src="img/covers/cover2.jpg" alt=""></img>
                                    <a href="#" class="card__play">
                                        <i class="icon ion-ios-play"></i>
                                    </a>
                                </div>
                                <div class="card__content">
                                    <h3 class="card__title"><a href="#">I am a video</a></h3>
                                    <span class="card__category">
                                        <a href="#">Conspiracy</a>
                                        <a href="#">Conspiracy</a>
                                        <a href="#">Music</a>
                                    </span>
                                    <span class="card__rate"><i class="icon ion-ios-star"></i>6.3</span>
                                </div>
                            </div>
                        </div>



                        <div class="col-6 col-sm-4 col-lg-3 col-xl-2">
                            <div class="card">
                                <div class="card__cover">
                                    <img src="img/covers/cover.jpg" alt=""></img>
                                    <a href="#" class="card__play">
                                        <i class="icon ion-ios-play"></i>
                                    </a>
                                </div>
                                <div class="card__content">
                                    <h3 class="card__title"><a href="#">I am a video</a></h3>
                                    <span class="card__category">
                                        <a href="#">Conspiracy</a>
                                        <a href="#">Conspiracy</a>
                                    </span>
                                    <span class="card__rate"><i class="icon ion-ios-star"></i>7.9</span>
                                </div>
                            </div>
                        </div>



                        <div class="col-12">
                            <ul class="paginator">
                                <li class="paginator__item paginator__item--prev">
                                    <a href="#"><i class="icon ion-ios-arrow-back"></i></a>
                                </li>
                                <li class="paginator__item"><a href="#">1</a></li>
                                <li class="paginator__item paginator__item--active"><a href="#">2</a></li>
                                <li class="paginator__item"><a href="#">3</a></li>
                                <li class="paginator__item"><a href="#">4</a></li>
                                <li class="paginator__item paginator__item--next">
                                    <a href="#"><i class="icon ion-ios-arrow-forward"></i></a>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>

            <section class="section section--bg" data-bg="img/section/section.jpg">
                <div class="container">
                    <div class="row">

                        <div class="col-12">
                            <h2 class="section__title">History</h2>
                        </div>


                        <div class="col-6 col-sm-4 col-lg-3 col-xl-2">
                            <div class="card">
                                <div class="card__cover">
                                    <img src="img/covers/cover.jpg" alt=""></img>
                                    <a href="#" class="card__play">
                                        <i class="icon ion-ios-play"></i>
                                    </a>
                                </div>
                                <div class="card__content">
                                    <h3 class="card__title"><a href="#">I Dream in Another Language</a></h3>
                                    <span class="card__category">
                                        <a href="#">Action</a>
                                        <a href="#">Conspiracy</a>
                                    </span>
                                    <span class="card__rate"><i class="icon ion-ios-star"></i>8.4</span>
                                </div>
                            </div>
                        </div>



                        <div class="col-6 col-sm-4 col-lg-3 col-xl-2">
                            <div class="card">
                                <div class="card__cover">
                                    <img src="img/covers/cover3.jpg" alt=""></img>
                                    <a href="#" class="card__play">
                                        <i class="icon ion-ios-play"></i>
                                    </a>
                                </div>
                                <div class="card__content">
                                    <h3 class="card__title"><a href="#">I am a video</a></h3>
                                    <span class="card__category">
                                        <a href="#">Conspiracy</a>
                                    </span>
                                    <span class="card__rate"><i class="icon ion-ios-star"></i>7.1</span>
                                </div>
                            </div>
                        </div>



                        <div class="col-6 col-sm-4 col-lg-3 col-xl-2">
                            <div class="card">
                                <div class="card__cover">
                                    <img src="img/covers/cover2.jpg" alt=""></img>
                                    <a href="#" class="card__play">
                                        <i class="icon ion-ios-play"></i>
                                    </a>
                                </div>
                                <div class="card__content">
                                    <h3 class="card__title"><a href="#">I am a video</a></h3>
                                    <span class="card__category">
                                        <a href="#">Conspiracy</a>
                                        <a href="#">Conspiracy</a>
                                        <a href="#">Music</a>
                                    </span>
                                    <span class="card__rate"><i class="icon ion-ios-star"></i>6.3</span>
                                </div>
                            </div>
                        </div>



                        <div class="col-6 col-sm-4 col-lg-3 col-xl-2">
                            <div class="card">
                                <div class="card__cover">
                                    <img src="img/covers/cover6.jpg" alt=""></img>
                                    <a href="#" class="card__play">
                                        <i class="icon ion-ios-play"></i>
                                    </a>
                                </div>
                                <div class="card__content">
                                    <h3 class="card__title"><a href="#">I am a video</a></h3>
                                    <span class="card__category">
                                        <a href="#">Conspiracy</a>
                                        <a href="#">Conspiracy</a>
                                    </span>
                                    <span class="card__rate"><i class="icon ion-ios-star"></i>7.9</span>
                                </div>
                            </div>
                        </div>

                        <div class="col-6 col-sm-4 col-lg-3 col-xl-2">
                            <div class="card">
                                <div class="card__cover">
                                    <img src="img/covers/cover4.jpg" alt=""></img>
                                    <a href="#" class="card__play">
                                        <i class="icon ion-ios-play"></i>
                                    </a>
                                </div>
                                <div class="card__content">
                                    <h3 class="card__title"><a href="#">I Dream in Another Language</a></h3>
                                    <span class="card__category">
                                        <a href="#">Action</a>
                                        <a href="#">Conspiracy</a>
                                    </span>
                                    <span class="card__rate"><i class="icon ion-ios-star"></i>8.4</span>
                                </div>
                            </div>
                        </div>

                        <div class="col-6 col-sm-4 col-lg-3 col-xl-2">
                            <div class="card">
                                <div class="card__cover">
                                    <img src="img/covers/cover5.jpg" alt=""></img>
                                    <a href="#" class="card__play">
                                        <i class="icon ion-ios-play"></i>
                                    </a>
                                </div>
                                <div class="card__content">
                                    <h3 class="card__title"><a href="#">I am a video</a></h3>
                                    <span class="card__category">
                                        <a href="#">Conspiracy</a>
                                    </span>
                                    <span class="card__rate"><i class="icon ion-ios-star"></i>7.1</span>
                                </div>
                            </div>
                        </div>

                        <div class="col-12">
                            <a href="#" class="section__btn">Show more</a>
                        </div>

                    </div>
                </div>
            </section>

            <footer class="footer">
                <div class="container">
                    <div class="row">

                        <div class="col-12 col-md-3">
                            <h6 class="footer__title">Download Our App</h6>
                            <ul class="footer__app">
                                <li><a href="appstore.com"><img src="img/Download_on_the_App_Store_Badge.svg" alt=""></img></a></li>
                                <li><a href="https://play.google.com/store"><img src="img/google-play-badge.png" alt=""></img></a></li>
                            </ul>
                        </div>

                        <div class="col-6 col-sm-4 col-md-3">
                            <h6 class="footer__title">Resources</h6>
                            <ul class="footer__list">
                                <li><a href="help.js">About Us</a></li>
                                <li><a href="help.js"></a></li>
                                <li><a href="help.js">Help</a></li>
                            </ul>
                        </div>

                        <div class="col-6 col-sm-4 col-md-3">
                            <h6 class="footer__title">Legal</h6>
                            <ul class="footer__list">
                                <li><a href="#">Terms of Use</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Security</a></li>
                            </ul>
                        </div>

                        <div class="col-12 col-sm-4 col-md-3">
                            <h6 class="footer__title">Contact</h6>
                            <ul class="footer__list">
                                <li><a href="tel:+18001231212">+1 (800) 123-1212</a></li>
                                <li><a href="mailto:support@moviego.com">support@nomorecensorship.com</a></li>
                            </ul>
                            <ul class="footer__social">
                                <li class="facebook"><a href="https://www.facebook.com"><i
                                    class="icon ion-logo-facebook"></i></a></li>
                                <li class="instagram"><a href="https://www.instagram.com/"><i
                                    class="icon ion-logo-instagram"></i></a></li>
                                <li class="twitter"><a href="https://twitter.com"><i class="icon ion-logo-twitter"></i></a></li>
                            </ul>
                        </div>


                    </div>
                </div>
            </footer>

            <script src="js/jquery-3.3.1.min.js"></script>
            <script src="js/bootstrap.bundle.min.js"></script>
            <script src="js/owl.carousel.min.js"></script>
            <script src="js/jquery.mousewheel.min.js"></script>
            <script src="js/jquery.mCustomScrollbar.min.js"></script>
            <script src="js/wNumb.js"></script>
            <script src="js/nouislider.min.js"></script>
            <script src="js/plyr.min.js"></script>
            <script src="js/jquery.morelines.min.js"></script>
            <script src="js/photoswipe.min.js"></script>
            <script src="js/photoswipe-ui-default.min.js"></script>
            <script src="js/main.js"></script>


        </div>


    )
}
export default catalog1