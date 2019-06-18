import React from 'react'





const Main2 = () => {
    return (


<div className="body">


    <header className="header">
        <div className="header__wrap">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="header__content">

                            <a href="index.html" className="header__logo">

                                <img src="img/HappyCelebratedChihuahua-size_restricted.gif" alt=""></img>
                            </a>

                            <ul className="header__nav">

                                <li className="header__nav-item">
                                    <a className="dropdown-toggle header__nav-link" href="#" role="button"
                                        id="dropdownMenuHome" data-toggle="dropdown" aria-haspopup="true"
                                        aria-expanded="false">Home</a>

                                    <ul className="dropdown-menu header__dropdown-menu" aria-labelledby="dropdownMenuHome">
                                        <li><a href="index.html">Home slideshow bg</a></li>
                                        <li><a href="Main2.js">Home static bg</a></li>
                                    </ul>
                                </li>

                                <li className="header__nav-item">
                                    <a className="dropdown-toggle header__nav-link" href="#" role="button"
                                        id="dropdownMenuCatalog" data-toggle="dropdown" aria-haspopup="true"
                                        aria-expanded="false">Catalog</a>

                                    <ul className="dropdown-menu header__dropdown-menu"
                                        aria-labelledby="dropdownMenuCatalog">
                                        <li><a href="catalog1.js">Catalog Grid</a></li>
                                        <li><a href="catalog2.js">Catalog List</a></li>
                                        <li><a href="details1.js">Details Movie</a></li>
                                        <li><a href="details2.js">Details LIKED</a></li>
                                    </ul>
                                </li>

                                <li className="header__nav-item">
                                    <a href="pricing.js" className="header__nav-link">pricing Plan</a>
                                </li>

                                <li className="header__nav-item">
                                    <a href="help.js" className="header__nav-link">Help</a>
                                </li>


                                <li className="dropdown header__nav-item">
                                    <a className="dropdown-toggle header__nav-link header__nav-link--more" href="#"
                                        role="button" id="dropdownMenuMore" data-toggle="dropdown" aria-haspopup="true"
                                        aria-expanded="false"><i className="icon ion-ios-more"></i></a>

                                    <ul className="dropdown-menu header__dropdown-menu" aria-labelledby="dropdownMenuMore">
                                        <li><a href="about.js">About</a></li>
                                        <li><a href="signin.js">Sign In</a></li>
                                        <li><a href="signup.js">Sign Up</a></li>
                                        <li><a href="help.js">404 Page</a></li>
                                    </ul>
                                </li>

                            </ul>

                            <div className="header__auth">
                                <button className="header__search-btn" type="button">
                                    <i className="icon ion-ios-search"></i>
                                </button>

                                <a href="signin.js" className="header__sign-in">
                                    <i className="icon ion-ios-log-in"></i>
                                    <span>sign in</span>
                                </a>
                            </div>

                            <button className="header__btn" type="button">
                                <span></span>
                                <span></span>
                                <span></span>
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        </div>


        <form action="#" className="header__search">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="header__search-content">
                            <input type="text" placeholder="Search for a movie, LIKED that you are looking for"></input>

                            <button type="button">search</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>

    </header>

    <section className="home home--bg">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1 className="home__title"><b>Trending</b> OF THIS SEASON</h1>

                    <button className="home__nav home__nav--prev" type="button">
                        <i className="icon ion-ios-arrow-round-back"></i>
                    </button>
                    <button className="home__nav home__nav--next" type="button">
                        <i className="icon ion-ios-arrow-round-forward"></i>
                    </button>
                </div>

                <div className="col-12">
                    <div className="owl-carousel home__carousel">
                        <div className="item">

                            <div className="card card--big">
                                <div className="card__cover">
                                    <img src="img/covers/cover.jpg" alt=""></img>
                                    <a href="#" className="card__play">
                                        <i className="icon ion-ios-play"></i>
                                    </a>
                                </div>
                                <div className="card__content">
                                    <h3 className="card__title"><a href="#">I Dream in Another Language</a></h3>
                                    <span className="card__category">
                                        <a href="#">Action</a>
                                        <a href="#">Conspiracy</a>
                                    </span>
                                    <span className="card__rate"><i className="icon ion-ios-star"></i>8.4</span>
                                </div>
                            </div>

                        </div>

                        <div className="item">

                            <div className="card card--big">
                                <div className="card__cover">
                                    <img src="img/covers/cover2.jpg" alt=""></img>
                                    <a href="#" className="card__play">
                                        <i className="icon ion-ios-play"></i>
                                    </a>
                                </div>
                                <div className="card__content">
                                    <h3 className="card__title"><a href="#">I am a video</a></h3>
                                    <span className="card__category">
                                        <a href="#">Conspiracy</a>
                                    </span>
                                    <span className="card__rate"><i className="icon ion-ios-star"></i>7.1</span>
                                </div>
                            </div>

                        </div>

                        <div className="item">

                            <div className="card card--big">
                                <div className="card__cover">
                                    <img src="img/covers/cover3.jpg" alt=""></img>
                                    <a href="#" className="card__play">
                                        <i className="icon ion-ios-play"></i>
                                    </a>
                                </div>
                                <div className="card__content">
                                    <h3 className="card__title"><a href="#">I am a video</a></h3>
                                    <span className="card__category">
                                        <a href="#">Conspiracy</a>
                                        <a href="#">Conspiracy</a>
                                    </span>
                                    <span className="card__rate"><i className="icon ion-ios-star"></i>6.3</span>
                                </div>
                            </div>

                        </div>

                        <div className="item">

                            <div className="card card--big">
                                <div className="card__cover">
                                    <img src="img/covers/cover4.jpg" alt=""></img>
                                    <a href="#" className="card__play">
                                        <i className="icon ion-ios-play"></i>
                                    </a>
                                </div>
                                <div className="card__content">
                                    <h3 className="card__title"><a href="#">I am a video</a></h3>
                                    <span className="card__category">
                                        <a href="#">Conspiracy</a>
                                        <a href="#">Conspiracy</a>
                                    </span>
                                    <span className="card__rate"><i className="icon ion-ios-star"></i>7.9</span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="content">
        <div className="content__head">
            <div className="container">
                <div className="row">
                    <div className="col-12">

                        <h2 className="content__title">Trending</h2>

                        <ul className="nav nav-tabs content__tabs" id="content__tabs" role="tablist">
                            <li className="nav-item">
                                <a className="nav-link active" data-toggle="tab" href="#tab-1" role="tab"
                                    aria-controls="tab-1" aria-selected="true">TRENDING</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" data-toggle="tab" href="#tab-2" role="tab" aria-controls="tab-2"
                                    aria-selected="false">HISTORY</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" data-toggle="tab" href="#tab-3" role="tab" aria-controls="tab-3"
                                    aria-selected="false">LIKED</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" data-toggle="tab" href="#tab-4" role="tab" aria-controls="tab-4"
                                    aria-selected="false">SUBSCRIBED</a>
                            </li>
                        </ul>

                        <div className="content__mobile-tabs" id="content__mobile-tabs">
                            <div className="content__mobile-tabs-btn dropdown-toggle" role="navigation" id="mobile-tabs"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <input type="button" value="Trending"></input>
                                <span></span>
                            </div>

                            <div className="content__mobile-tabs-menu dropdown-menu" aria-labelledby="mobile-tabs">
                                <ul className="nav nav-tabs" role="tablist">
                                    <li className="nav-item"><a className="nav-link active" id="1-tab" data-toggle="tab"
                                        href="#tab-1" role="tab" aria-controls="tab-1"
                                        aria-selected="true">TRENDING</a></li>

                                    <li className="nav-item"><a className="nav-link" id="2-tab" data-toggle="tab" href="#tab-2"
                                        role="tab" aria-controls="tab-2" aria-selected="false">HISTORY</a></li>

                                    <li className="nav-item"><a className="nav-link" id="3-tab" data-toggle="tab" href="#tab-3"
                                        role="tab" aria-controls="tab-3" aria-selected="false">LIKED</a></li>

                                    <li className="nav-item"><a className="nav-link" id="4-tab" data-toggle="tab" href="#tab-4"
                                        role="tab" aria-controls="tab-4" aria-selected="false">SUBSCRIBED</a></li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

        <div className="container">

            <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="tab-1" role="tabpanel" aria-labelledby="1-tab">
                    <div className="row">

                        <div className="col-6 col-sm-12 col-lg-6">
                            <div className="card card--list">
                                <div className="row">
                                    <div className="col-12 col-sm-4">
                                        <div className="card__cover">
                                            <img src="img/covers/cover.jpg" alt=""></img>
                                            <a href="#" className="card__play">
                                                <i className="icon ion-ios-play"></i>
                                            </a>
                                        </div>
                                    </div>

                                    <div className="col-12 col-sm-8">
                                        <div className="card__content">
                                            <h3 className="card__title"><a href="#">I Dream in Another Language</a></h3>
                                            <span className="card__category">
                                                <a href="#">Action</a>
                                                <a href="#">Conspiracy</a>
                                            </span>

                                            <div className="card__wrap">
                                                <span className="card__rate"><i className="icon ion-ios-star"></i>8.4</span>

                                                <ul className="card__list">
                                                    <li>HD</li>
                                                    <li>16+</li>
                                                </ul>
                                            </div>

                                            <div className="card__description">
                                                <p>It is a long established fact that a reader will be distracted by the
													readable content of a page when looking at its layout. The point of
													using Lorem Ipsum is that it has a more-or-less normal distribution
													of letters, as opposed to using 'Content here, content here', making
													it look like readable English.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>



                        <div className="col-6 col-sm-12 col-lg-6">
                            <div className="card card--list">
                                <div className="row">
                                    <div className="col-12 col-sm-4">
                                        <div className="card__cover">
                                            <img src="img/covers/cover2.jpg" alt=""></img>
                                            <a href="#" className="card__play">
                                                <i className="icon ion-ios-play"></i>
                                            </a>
                                        </div>
                                    </div>

                                    <div className="col-12 col-sm-8">
                                        <div className="card__content">
                                            <h3 className="card__title"><a href="#">I am a video</a></h3>
                                            <span className="card__category">
                                                <a href="#">Conspiracy</a>
                                            </span>

                                            <div className="card__wrap">
                                                <span className="card__rate"><i className="icon ion-ios-star"></i>7.1</span>

                                                <ul className="card__list">
                                                    <li>HD</li>
                                                    <li>16+</li>
                                                </ul>
                                            </div>

                                            <div className="card__description">
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting
													industry. Lorem Ipsum has been the industry's standard dummy text
													ever since the 1500s, when an unknown printer took a galley of type
													and scrambled it to make a type specimen book.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>



                        <div className="col-6 col-sm-12 col-lg-6">
                            <div className="card card--list">
                                <div className="row">
                                    <div className="col-12 col-sm-4">
                                        <div className="card__cover">
                                            <img src="img/covers/cover3.jpg" alt=""></img>
                                            <a href="#" className="card__play">
                                                <i className="icon ion-ios-play"></i>
                                            </a>
                                        </div>
                                    </div>

                                    <div className="col-12 col-sm-8">
                                        <div className="card__content">
                                            <h3 className="card__title"><a href="#">I am a video</a></h3>
                                            <span className="card__category">
                                                <a href="#">Conspiracy</a>
                                                <a href="#">Conspiracy</a>
                                                <a href="#">Music</a>
                                            </span>

                                            <div className="card__wrap">
                                                <span className="card__rate"><i className="icon ion-ios-star"></i>6.3</span>

                                                <ul className="card__list">
                                                    <li>HD</li>
                                                    <li>16+</li>
                                                </ul>
                                            </div>

                                            <div className="card__description">
                                                <p>It has survived not only five centuries, but also the leap into
													electronic typesetting, remaining essentially unchanged. It was
													popularised in the 1960s with the release of Letraset sheets
													containing Lorem Ipsum passages, and more recently with desktop
													publishing software like Aldus PageMaker including versions of Lorem
													Ipsum.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>



                        <div className="col-6 col-sm-12 col-lg-6">
                            <div className="card card--list">
                                <div className="row">
                                    <div className="col-12 col-sm-4">
                                        <div className="card__cover">
                                            <img src="img/covers/cover4.jpg" alt=""></img>
                                            <a href="#" className="card__play">
                                                <i className="icon ion-ios-play"></i>
                                            </a>
                                        </div>
                                    </div>

                                    <div className="col-12 col-sm-8">
                                        <div className="card__content">
                                            <h3 className="card__title"><a href="#">I am a video</a></h3>
                                            <span className="card__category">
                                                <a href="#">Conspiracy</a>
                                                <a href="#">Conspiracy</a>
                                            </span>

                                            <div className="card__wrap">
                                                <span className="card__rate"><i className="icon ion-ios-star"></i>7.9</span>

                                                <ul className="card__list">
                                                    <li>HD</li>
                                                    <li>16+</li>
                                                </ul>
                                            </div>

                                            <div className="card__description">
                                                <p>Many desktop publishing packages and web page editors now use Lorem
													Ipsum as their default model text, and a search for 'lorem ipsum'
													will uncover many web sites still in their infancy. Various versions
													have evolved over the years, sometimes by accident, sometimes on
													purpose (injected humour and the like).</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>



                        <div className="col-6 col-sm-12 col-lg-6">
                            <div className="card card--list">
                                <div className="row">
                                    <div className="col-12 col-sm-4">
                                        <div className="card__cover">
                                            <img src="img/covers/cover5.jpg" alt=""></img>
                                            <a href="#" className="card__play">
                                                <i className="icon ion-ios-play"></i>
                                            </a>
                                        </div>
                                    </div>

                                    <div className="col-12 col-sm-8">
                                        <div className="card__content">
                                            <h3 className="card__title"><a href="#">I Dream in Another Language</a></h3>
                                            <span className="card__category">
                                                <a href="#">Action</a>
                                                <a href="#">Conspiracy</a>
                                            </span>

                                            <div className="card__wrap">
                                                <span className="card__rate"><i className="icon ion-ios-star"></i>8.4</span>

                                                <ul className="card__list">
                                                    <li>HD</li>
                                                    <li>16+</li>
                                                </ul>
                                            </div>

                                            <div className="card__description">
                                                <p>There are many variations of passages of Lorem Ipsum available, but
													the majority have suffered alteration in some form, by injected
													humour, or randomised words which don't look even slightly
													believable. If you are going to use a passage of Lorem Ipsum, you
													need to be sure there isn't anything embarrassing hidden in the
													middle of text.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>



                        <div className="col-6 col-sm-12 col-lg-6">
                            <div className="card card--list">
                                <div className="row">
                                    <div className="col-12 col-sm-4">
                                        <div className="card__cover">
                                            <img src="img/covers/cover6.jpg" alt=""></img>
                                            <a href="#" className="card__play">
                                                <i className="icon ion-ios-play"></i>
                                            </a>
                                        </div>
                                    </div>

                                    <div className="col-12 col-sm-8">
                                        <div className="card__content">
                                            <h3 className="card__title"><a href="#">I am a video</a></h3>
                                            <span className="card__category">
                                                <a href="#">Conspiracy</a>
                                            </span>

                                            <div className="card__wrap">
                                                <span className="card__rate"><i className="icon ion-ios-star"></i>7.1</span>

                                                <ul className="card__list">
                                                    <li>HD</li>
                                                    <li>16+</li>
                                                </ul>
                                            </div>

                                            <div className="card__description">
                                                <p>All the Lorem Ipsum generators on the Internet tend to repeat
													predefined chunks as necessary, making this the first true generator
													on the Internet. It uses a dictionary of over 200 Latin words,
													combined with a handful of model sentence structures, to generate
													Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is
													therefore always free from repetition, injected humour, or
													non-characteristic words etc.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="tab-pane fade" id="tab-2" role="tabpanel" aria-labelledby="2-tab">
                    <div className="row">

                        <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                            <div className="card">
                                <div className="card__cover">
                                    <img src="img/covers/cover.jpg" alt=""></img>
                                    <a href="#" className="card__play">
                                        <i className="icon ion-ios-play"></i>
                                    </a>
                                </div>
                                <div className="card__content">
                                    <h3 className="card__title"><a href="#">I Dream in Another Language</a></h3>
                                    <span className="card__category">
                                        <a href="#">Action</a>
                                        <a href="#">Conspiracy</a>
                                    </span>
                                    <span className="card__rate"><i className="icon ion-ios-star"></i>8.4</span>
                                </div>
                            </div>
                        </div>



                        <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                            <div className="card">
                                <div className="card__cover">
                                    <img src="img/covers/cover2.jpg" alt=""></img>
                                    <a href="#" className="card__play">
                                        <i className="icon ion-ios-play"></i>
                                    </a>
                                </div>
                                <div className="card__content">
                                    <h3 className="card__title"><a href="#">I am a video</a></h3>
                                    <span className="card__category">
                                        <a href="#">Conspiracy</a>
                                    </span>
                                    <span className="card__rate"><i className="icon ion-ios-star"></i>7.1</span>
                                </div>
                            </div>
                        </div>



                        <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                            <div className="card">
                                <div className="card__cover">
                                    <img src="img/covers/cover3.jpg" alt=""></img>
                                    <a href="#" className="card__play">
                                        <i className="icon ion-ios-play"></i>
                                    </a>
                                </div>
                                <div className="card__content">
                                    <h3 className="card__title"><a href="#">I am a video</a></h3>
                                    <span className="card__category">
                                        <a href="#">Conspiracy</a>
                                        <a href="#">Conspiracy</a>
                                        <a href="#">Music</a>
                                    </span>
                                    <span className="card__rate"><i className="icon ion-ios-star"></i>6.3</span>
                                </div>
                            </div>
                        </div>



                        <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                            <div className="card">
                                <div className="card__cover">
                                    <img src="img/covers/cover4.jpg" alt=""></img>
                                    <a href="#" className="card__play">
                                        <i className="icon ion-ios-play"></i>
                                    </a>
                                </div>
                                <div className="card__content">
                                    <h3 className="card__title"><a href="#">I am a video</a></h3>
                                    <span className="card__category">
                                        <a href="#">Conspiracy</a>
                                        <a href="#">Conspiracy</a>
                                    </span>
                                    <span className="card__rate"><i className="icon ion-ios-star"></i>7.9</span>
                                </div>
                            </div>
                        </div>



                        <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                            <div className="card">
                                <div className="card__cover">
                                    <img src="img/covers/cover5.jpg" alt=""></img>
                                    <a href="#" className="card__play">
                                        <i className="icon ion-ios-play"></i>
                                    </a>
                                </div>
                                <div className="card__content">
                                    <h3 className="card__title"><a href="#">I Dream in Another Language</a></h3>
                                    <span className="card__category">
                                        <a href="#">Action</a>
                                        <a href="#">Conspiracy</a>
                                    </span>
                                    <span className="card__rate"><i className="icon ion-ios-star"></i>8.4</span>
                                </div>
                            </div>
                        </div>



                        <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                            <div className="card">
                                <div className="card__cover">
                                    <img src="img/covers/cover6.jpg" alt=""></img>
                                    <a href="#" className="card__play">
                                        <i className="icon ion-ios-play"></i>
                                    </a>
                                </div>
                                <div className="card__content">
                                    <h3 className="card__title"><a href="#">I am a video</a></h3>
                                    <span className="card__category">
                                        <a href="#">Conspiracy</a>
                                    </span>
                                    <span className="card__rate"><i className="icon ion-ios-star"></i>7.1</span>
                                </div>
                            </div>
                        </div>



                        <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                            <div className="card">
                                <div className="card__cover">
                                    <img src="img/covers/cover6.jpg" alt=""></img>
                                    <a href="#" className="card__play">
                                        <i className="icon ion-ios-play"></i>
                                    </a>
                                </div>
                                <div className="card__content">
                                    <h3 className="card__title"><a href="#">I am a video</a></h3>
                                    <span className="card__category">
                                        <a href="#">Conspiracy</a>
                                        <a href="#">Conspiracy</a>
                                        <a href="#">Music</a>
                                    </span>
                                    <span className="card__rate"><i className="icon ion-ios-star"></i>6.3</span>
                                </div>
                            </div>
                        </div>



                        <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                            <div className="card">
                                <div className="card__cover">
                                    <img src="img/covers/cover5.jpg" alt=""></img>
                                    <a href="#" className="card__play">
                                        <i className="icon ion-ios-play"></i>
                                    </a>
                                </div>
                                <div className="card__content">
                                    <h3 className="card__title"><a href="#">I am a video</a></h3>
                                    <span className="card__category">
                                        <a href="#">Conspiracy</a>
                                        <a href="#">Conspiracy</a>
                                    </span>
                                    <span className="card__rate"><i className="icon ion-ios-star"></i>7.9</span>
                                </div>
                            </div>
                        </div>



                        <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                            <div className="card">
                                <div className="card__cover">
                                    <img src="img/covers/cover4.jpg" alt=""></img>
                                    <a href="#" className="card__play">
                                        <i className="icon ion-ios-play"></i>
                                    </a>
                                </div>
                                <div className="card__content">
                                    <h3 className="card__title"><a href="#">I Dream in Another Language</a></h3>
                                    <span className="card__category">
                                        <a href="#">Action</a>
                                        <a href="#">Conspiracy</a>
                                    </span>
                                    <span className="card__rate"><i className="icon ion-ios-star"></i>8.4</span>
                                </div>
                            </div>
                        </div>



                        <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                            <div className="card">
                                <div className="card__cover">
                                    <img src="img/covers/cover3.jpg" alt=""></img>
                                    <a href="#" className="card__play">
                                        <i className="icon ion-ios-play"></i>
                                    </a>
                                </div>
                                <div className="card__content">
                                    <h3 className="card__title"><a href="#">I am a video</a></h3>
                                    <span className="card__category">
                                        <a href="#">Conspiracy</a>
                                    </span>
                                    <span className="card__rate"><i className="icon ion-ios-star"></i>7.1</span>
                                </div>
                            </div>
                        </div>



                        <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                            <div className="card">
                                <div className="card__cover">
                                    <img src="img/covers/cover2.jpg" alt=""></img>
                                    <a href="#" className="card__play">
                                        <i className="icon ion-ios-play"></i>
                                    </a>
                                </div>
                                <div className="card__content">
                                    <h3 className="card__title"><a href="#">I am a video</a></h3>
                                    <span className="card__category">
                                        <a href="#">Conspiracy</a>
                                        <a href="#">Conspiracy</a>
                                        <a href="#">Music</a>
                                    </span>
                                    <span className="card__rate"><i className="icon ion-ios-star"></i>6.3</span>
                                </div>
                            </div>
                        </div>



                        <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                            <div className="card">
                                <div className="card__cover">
                                    <img src="img/covers/cover.jpg" alt=""></img>
                                    <a href="#" className="card__play">
                                        <i className="icon ion-ios-play"></i>
                                    </a>
                                </div>
                                <div className="card__content">
                                    <h3 className="card__title"><a href="#">I am a video</a></h3>
                                    <span className="card__category">
                                        <a href="#">Conspiracy</a>
                                        <a href="#">Conspiracy</a>
                                    </span>
                                    <span className="card__rate"><i className="icon ion-ios-star"></i>7.9</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="tab-pane fade" id="tab-3" role="tabpanel" aria-labelledby="3-tab">
                    <div className="row">

                        <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                            <div className="card">
                                <div className="card__cover">
                                    <img src="img/covers/cover2.jpg" alt=""></img>
                                    <a href="#" className="card__play">
                                        <i className="icon ion-ios-play"></i>
                                    </a>
                                </div>
                                <div className="card__content">
                                    <h3 className="card__title"><a href="#">I Dream in Another Language</a></h3>
                                    <span className="card__category">
                                        <a href="#">Action</a>
                                        <a href="#">Conspiracy</a>
                                    </span>
                                    <span className="card__rate"><i className="icon ion-ios-star"></i>8.4</span>
                                </div>
                            </div>
                        </div>



                        <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                            <div className="card">
                                <div className="card__cover">
                                    <img src="img/covers/cover.jpg" alt=""></img>
                                    <a href="#" className="card__play">
                                        <i className="icon ion-ios-play"></i>
                                    </a>
                                </div>
                                <div className="card__content">
                                    <h3 className="card__title"><a href="#">I am a video</a></h3>
                                    <span className="card__category">
                                        <a href="#">Conspiracy</a>
                                    </span>
                                    <span className="card__rate"><i className="icon ion-ios-star"></i>7.1</span>
                                </div>
                            </div>
                        </div>



                        <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                            <div className="card">
                                <div className="card__cover">
                                    <img src="img/covers/cover4.jpg" alt=""></img>
                                    <a href="#" className="card__play">
                                        <i className="icon ion-ios-play"></i>
                                    </a>
                                </div>
                                <div className="card__content">
                                    <h3 className="card__title"><a href="#">I am a video</a></h3>
                                    <span className="card__category">
                                        <a href="#">Conspiracy</a>
                                        <a href="#">Conspiracy</a>
                                        <a href="#">Music</a>
                                    </span>
                                    <span className="card__rate"><i className="icon ion-ios-star"></i>6.3</span>
                                </div>
                            </div>
                        </div>



                        <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                            <div className="card">
                                <div className="card__cover">
                                    <img src="img/covers/cover3.jpg" alt=""></img>
                                    <a href="#" className="card__play">
                                        <i className="icon ion-ios-play"></i>
                                    </a>
                                </div>
                                <div className="card__content">
                                    <h3 className="card__title"><a href="#">I am a video</a></h3>
                                    <span className="card__category">
                                        <a href="#">Conspiracy</a>
                                        <a href="#">Conspiracy</a>
                                    </span>
                                    <span className="card__rate"><i className="icon ion-ios-star"></i>7.9</span>
                                </div>
                            </div>
                        </div>



                        <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                            <div className="card">
                                <div className="card__cover">
                                    <img src="img/covers/cover6.jpg" alt=""></img>
                                    <a href="#" className="card__play">
                                        <i className="icon ion-ios-play"></i>
                                    </a>
                                </div>
                                <div className="card__content">
                                    <h3 className="card__title"><a href="#">I Dream in Another Language</a></h3>
                                    <span className="card__category">
                                        <a href="#">Action</a>
                                        <a href="#">Conspiracy</a>
                                    </span>
                                    <span className="card__rate"><i className="icon ion-ios-star"></i>8.4</span>
                                </div>
                            </div>
                        </div>



                        <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                            <div className="card">
                                <div className="card__cover">
                                    <img src="img/covers/cover5.jpg" alt=""></img>
                                    <a href="#" className="card__play">
                                        <i className="icon ion-ios-play"></i>
                                    </a>
                                </div>
                                <div className="card__content">
                                    <h3 className="card__title"><a href="#">I am a video</a></h3>
                                    <span className="card__category">
                                        <a href="#">Conspiracy</a>
                                    </span>
                                    <span className="card__rate"><i className="icon ion-ios-star"></i>7.1</span>
                                </div>
                            </div>
                        </div>



                        <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                            <div className="card">
                                <div className="card__cover">
                                    <img src="img/covers/cover5.jpg" alt=""></img>
                                    <a href="#" className="card__play">
                                        <i className="icon ion-ios-play"></i>
                                    </a>
                                </div>
                                <div className="card__content">
                                    <h3 className="card__title"><a href="#">I am a video</a></h3>
                                    <span className="card__category">
                                        <a href="#">Conspiracy</a>
                                        <a href="#">Conspiracy</a>
                                        <a href="#">Music</a>
                                    </span>
                                    <span className="card__rate"><i className="icon ion-ios-star"></i>6.3</span>
                                </div>
                            </div>
                        </div>



                        <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                            <div className="card">
                                <div className="card__cover">
                                    <img src="img/covers/cover6.jpg" alt=""></img>
                                    <a href="#" className="card__play">
                                        <i className="icon ion-ios-play"></i>
                                    </a>
                                </div>
                                <div className="card__content">
                                    <h3 className="card__title"><a href="#">I am a video</a></h3>
                                    <span className="card__category">
                                        <a href="#">Conspiracy</a>
                                        <a href="#">Conspiracy</a>
                                    </span>
                                    <span className="card__rate"><i className="icon ion-ios-star"></i>7.9</span>
                                </div>
                            </div>
                        </div>



                        <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                            <div className="card">
                                <div className="card__cover">
                                    <img src="img/covers/cover3.jpg" alt=""></img>
                                    <a href="#" className="card__play">
                                        <i className="icon ion-ios-play"></i>
                                    </a>
                                </div>
                                <div className="card__content">
                                    <h3 className="card__title"><a href="#">I Dream in Another Language</a></h3>
                                    <span className="card__category">
                                        <a href="#">Action</a>
                                        <a href="#">Conspiracy</a>
                                    </span>
                                    <span className="card__rate"><i className="icon ion-ios-star"></i>8.4</span>
                                </div>
                            </div>
                        </div>



                        <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                            <div className="card">
                                <div className="card__cover">
                                    <img src="img/covers/cover4.jpg" alt=""></img>
                                    <a href="#" className="card__play">
                                        <i className="icon ion-ios-play"></i>
                                    </a>
                                </div>
                                <div className="card__content">
                                    <h3 className="card__title"><a href="#">I am a video</a></h3>
                                    <span className="card__category">
                                        <a href="#">Conspiracy</a>
                                    </span>
                                    <span className="card__rate"><i className="icon ion-ios-star"></i>7.1</span>
                                </div>
                            </div>
                        </div>



                        <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                            <div className="card">
                                <div className="card__cover">
                                    <img src="img/covers/cover.jpg" alt=""></img>
                                    <a href="#" className="card__play">
                                        <i className="icon ion-ios-play"></i>
                                    </a>
                                </div>
                                <div className="card__content">
                                    <h3 className="card__title"><a href="#">I am a video</a></h3>
                                    <span className="card__category">
                                        <a href="#">Conspiracy</a>
                                        <a href="#">Conspiracy</a>
                                        <a href="#">Music</a>
                                    </span>
                                    <span className="card__rate"><i className="icon ion-ios-star"></i>6.3</span>
                                </div>
                            </div>
                        </div>



                        <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                            <div className="card">
                                <div className="card__cover">
                                    <img src="img/covers/cover2.jpg" alt=""></img>
                                    <a href="#" className="card__play">
                                        <i className="icon ion-ios-play"></i>
                                    </a>
                                </div>
                                <div className="card__content">
                                    <h3 className="card__title"><a href="#">I am a video</a></h3>
                                    <span className="card__category">
                                        <a href="#">Conspiracy</a>
                                        <a href="#">Conspiracy</a>
                                    </span>
                                    <span className="card__rate"><i className="icon ion-ios-star"></i>7.9</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="tab-pane fade" id="tab-4" role="tabpanel" aria-labelledby="4-tab">
                    <div className="row">

                        <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                            <div className="card">
                                <div className="card__cover">
                                    <img src="img/covers/cover.jpg" alt=""></img>
                                    <a href="#" className="card__play">
                                        <i className="icon ion-ios-play"></i>
                                    </a>
                                </div>
                                <div className="card__content">
                                    <h3 className="card__title"><a href="#">I Dream in Another Language</a></h3>
                                    <span className="card__category">
                                        <a href="#">Action</a>
                                        <a href="#">Conspiracy</a>
                                    </span>
                                    <span className="card__rate"><i className="icon ion-ios-star"></i>8.4</span>
                                </div>
                            </div>
                        </div>



                        <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                            <div className="card">
                                <div className="card__cover">
                                    <img src="img/covers/cover3.jpg" alt=""></img>
                                    <a href="#" className="card__play">
                                        <i className="icon ion-ios-play"></i>
                                    </a>
                                </div>
                                <div className="card__content">
                                    <h3 className="card__title"><a href="#">I am a video</a></h3>
                                    <span className="card__category">
                                        <a href="#">Conspiracy</a>
                                    </span>
                                    <span className="card__rate"><i className="icon ion-ios-star"></i>7.1</span>
                                </div>
                            </div>
                        </div>



                        <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                            <div className="card">
                                <div className="card__cover">
                                    <img src="img/covers/cover2.jpg" alt=""></img>
                                    <a href="#" className="card__play">
                                        <i className="icon ion-ios-play"></i>
                                    </a>
                                </div>
                                <div className="card__content">
                                    <h3 className="card__title"><a href="#">I am a video</a></h3>
                                    <span className="card__category">
                                        <a href="#">Conspiracy</a>
                                        <a href="#">Conspiracy</a>
                                        <a href="#">Music</a>
                                    </span>
                                    <span className="card__rate"><i className="icon ion-ios-star"></i>6.3</span>
                                </div>
                            </div>
                        </div>



                        <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                            <div className="card">
                                <div className="card__cover">
                                    <img src="img/covers/cover6.jpg" alt=""></img>
                                    <a href="#" className="card__play">
                                        <i className="icon ion-ios-play"></i>
                                    </a>
                                </div>
                                <div className="card__content">
                                    <h3 className="card__title"><a href="#">I am a video</a></h3>
                                    <span className="card__category">
                                        <a href="#">Conspiracy</a>
                                        <a href="#">Conspiracy</a>
                                    </span>
                                    <span className="card__rate"><i className="icon ion-ios-star"></i>7.9</span>
                                </div>
                            </div>
                        </div>



                        <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                            <div className="card">
                                <div className="card__cover">
                                    <img src="img/covers/cover4.jpg" alt=""></img>
                                    <a href="#" className="card__play">
                                        <i className="icon ion-ios-play"></i>
                                    </a>
                                </div>
                                <div className="card__content">
                                    <h3 className="card__title"><a href="#">I Dream in Another Language</a></h3>
                                    <span className="card__category">
                                        <a href="#">Action</a>
                                        <a href="#">Conspiracy</a>
                                    </span>
                                    <span className="card__rate"><i className="icon ion-ios-star"></i>8.4</span>
                                </div>
                            </div>
                        </div>



                        <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                            <div className="card">
                                <div className="card__cover">
                                    <img src="img/covers/cover5.jpg" alt=""></img>
                                    <a href="#" className="card__play">
                                        <i className="icon ion-ios-play"></i>
                                    </a>
                                </div>
                                <div className="card__content">
                                    <h3 className="card__title"><a href="#">I am a video</a></h3>
                                    <span className="card__category">
                                        <a href="#">Conspiracy</a>
                                    </span>
                                    <span className="card__rate"><i className="icon ion-ios-star"></i>7.1</span>
                                </div>
                            </div>
                        </div>



                        <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                            <div className="card">
                                <div className="card__cover">
                                    <img src="img/covers/cover6.jpg" alt=""></img>
                                    <a href="#" className="card__play">
                                        <i className="icon ion-ios-play"></i>
                                    </a>
                                </div>
                                <div className="card__content">
                                    <h3 className="card__title"><a href="#">I am a video</a></h3>
                                    <span className="card__category">
                                        <a href="#">Conspiracy</a>
                                        <a href="#">Conspiracy</a>
                                        <a href="#">Music</a>
                                    </span>
                                    <span className="card__rate"><i className="icon ion-ios-star"></i>6.3</span>
                                </div>
                            </div>
                        </div>



                        <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                            <div className="card">
                                <div className="card__cover">
                                    <img src="img/covers/cover5.jpg" alt=""></img>
                                    <a href="#" className="card__play">
                                        <i className="icon ion-ios-play"></i>
                                    </a>
                                </div>
                                <div className="card__content">
                                    <h3 className="card__title"><a href="#">I am a video</a></h3>
                                    <span className="card__category">
                                        <a href="#">Conspiracy</a>
                                        <a href="#">Conspiracy</a>
                                    </span>
                                    <span className="card__rate"><i className="icon ion-ios-star"></i>7.9</span>
                                </div>
                            </div>
                        </div>



                        <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                            <div className="card">
                                <div className="card__cover">
                                    <img src="img/covers/cover4.jpg" alt=""></img>
                                    <a href="#" className="card__play">
                                        <i className="icon ion-ios-play"></i>
                                    </a>
                                </div>
                                <div className="card__content">
                                    <h3 className="card__title"><a href="#">I Dream in Another Language</a></h3>
                                    <span className="card__category">
                                        <a href="#">Action</a>
                                        <a href="#">Conspiracy</a>
                                    </span>
                                    <span className="card__rate"><i className="icon ion-ios-star"></i>8.4</span>
                                </div>
                            </div>
                        </div>



                        <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                            <div className="card">
                                <div className="card__cover">
                                    <img src="img/covers/cover3.jpg" alt=""></img>
                                    <a href="#" className="card__play">
                                        <i className="icon ion-ios-play"></i>
                                    </a>
                                </div>
                                <div className="card__content">
                                    <h3 className="card__title"><a href="#">I am a video</a></h3>
                                    <span className="card__category">
                                        <a href="#">Conspiracy</a>
                                    </span>
                                    <span className="card__rate"><i className="icon ion-ios-star"></i>7.1</span>
                                </div>
                            </div>
                        </div>



                        <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                            <div className="card">
                                <div className="card__cover">
                                    <img src="img/covers/cover2.jpg" alt=""></img>
                                    <a href="#" className="card__play">
                                        <i className="icon ion-ios-play"></i>
                                    </a>
                                </div>
                                <div className="card__content">
                                    <h3 className="card__title"><a href="#">I am a video</a></h3>
                                    <span className="card__category">
                                        <a href="#">Conspiracy</a>
                                        <a href="#">Conspiracy</a>
                                        <a href="#">Music</a>
                                    </span>
                                    <span className="card__rate"><i className="icon ion-ios-star"></i>6.3</span>
                                </div>
                            </div>
                        </div>



                        <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                            <div className="card">
                                <div className="card__cover">
                                    <img src="img/covers/cover.jpg" alt=""></img>
                                    <a href="#" className="card__play">
                                        <i className="icon ion-ios-play"></i>
                                    </a>
                                </div>
                                <div className="card__content">
                                    <h3 className="card__title"><a href="#">I am a video</a></h3>
                                    <span className="card__category">
                                        <a href="#">Conspiracy</a>
                                        <a href="#">Conspiracy</a>
                                    </span>
                                    <span className="card__rate"><i className="icon ion-ios-star"></i>7.9</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            
		</div>
    </section>
   

	<section className="section section--bg" data-bg="img/section/section.jpg">
        <div className="container">
            <div className="row">
                
				<div className="col-12">
                    <h2 className="section__title">History</h2>
                </div>
                


				<div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                    <div className="card">
                        <div className="card__cover">
                            <img src="img/covers/cover.jpg" alt=""></img>
                            <a href="#" className="card__play">
                                <i className="icon ion-ios-play"></i>
                            </a>
                        </div>
                        <div className="card__content">
                            <h3 className="card__title"><a href="#">I Dream in Another Language</a></h3>
                            <span className="card__category">
                                <a href="#">Action</a>
                                <a href="#">Conspiracy</a>
                            </span>
                            <span className="card__rate"><i className="icon ion-ios-star"></i>8.4</span>
                        </div>
                    </div>
                </div>



                <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                    <div className="card">
                        <div className="card__cover">
                            <img src="img/covers/cover3.jpg" alt=""></img>
                            <a href="#" className="card__play">
                                <i className="icon ion-ios-play"></i>
                            </a>
                        </div>
                        <div className="card__content">
                            <h3 className="card__title"><a href="#">I am a video</a></h3>
                            <span className="card__category">
                                <a href="#">Conspiracy</a>
                            </span>
                            <span className="card__rate"><i className="icon ion-ios-star"></i>7.1</span>
                        </div>
                    </div>
                </div>



                <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                    <div className="card">
                        <div className="card__cover">
                            <img src="img/covers/cover2.jpg" alt=""></img>
                            <a href="#" className="card__play">
                                <i className="icon ion-ios-play"></i>
                            </a>
                        </div>
                        <div className="card__content">
                            <h3 className="card__title"><a href="#">I am a video</a></h3>
                            <span className="card__category">
                                <a href="#">Conspiracy</a>
                                <a href="#">Conspiracy</a>
                                <a href="#">Music</a>
                            </span>
                            <span className="card__rate"><i className="icon ion-ios-star"></i>6.3</span>
                        </div>
                    </div>
                </div>



                <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                    <div className="card">
                        <div className="card__cover">
                            <img src="img/covers/cover6.jpg" alt=""></img>
                            <a href="#" className="card__play">
                                <i className="icon ion-ios-play"></i>
                            </a>
                        </div>
                        <div className="card__content">
                            <h3 className="card__title"><a href="#">I am a video</a></h3>
                            <span className="card__category">
                                <a href="#">Conspiracy</a>
                                <a href="#">Conspiracy</a>
                            </span>
                            <span className="card__rate"><i className="icon ion-ios-star"></i>7.9</span>
                        </div>
                    </div>
                </div>



                <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                    <div className="card">
                        <div className="card__cover">
                            <img src="img/covers/cover4.jpg" alt=""></img>
                            <a href="#" className="card__play">
                                <i className="icon ion-ios-play"></i>
                            </a>
                        </div>
                        <div className="card__content">
                            <h3 className="card__title"><a href="#">I Dream in Another Language</a></h3>
                            <span className="card__category">
                                <a href="#">Action</a>
                                <a href="#">Conspiracy</a>
                            </span>
                            <span className="card__rate"><i className="icon ion-ios-star"></i>8.4</span>
                        </div>
                    </div>
                </div>



                <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                    <div className="card">
                        <div className="card__cover">
                            <img src="img/covers/cover5.jpg" alt=""></img>
                            <a href="#" className="card__play">
                                <i className="icon ion-ios-play"></i>
                            </a>
                        </div>
                        <div className="card__content">
                            <h3 className="card__title"><a href="#">I am a video</a></h3>
                            <span className="card__category">
                                <a href="#">Conspiracy</a>
                            </span>
                            <span className="card__rate"><i className="icon ion-ios-star"></i>7.1</span>
                        </div>
                    </div>
                </div>


                <div className="col-12">
                    <a href="#" className="section__btn">Show more</a>
                </div>

            </div>
        </div>
    </section>

    <section className="section">
        <div className="container">
            <div className="row">

                <div className="col-12">
                    <h2 className="section__title section__title--no-margin">Our Partners</h2>
                </div>

                <div className="col-12">
                    <p className="section__text section__text--last-with-margin">It is a long <b>established</b> fact that a
						reader will be distracted by the readable content of a page when looking at its layout. The
						point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as
						opposed to using.</p>
                </div>



                <div className="col-6 col-sm-4 col-md-3 col-lg-2">
                    <a href="#" className="partner">
                        <img src="img/partners/themeforest-light-background.png" alt="" className="partner__img"></img>
                    </a>
                </div>



                <div className="col-6 col-sm-4 col-md-3 col-lg-2">
                    <a href="#" className="partner">
                        <img src="img/partners/audiojungle-light-background.png" alt="" className="partner__img"></img>
                    </a>
                </div>



                <div className="col-6 col-sm-4 col-md-3 col-lg-2">
                    <a href="#" className="partner">
                        <img src="img/partners/codecanyon-light-background.png" alt="" className="partner__img"></img>
                    </a>
                </div>



                <div className="col-6 col-sm-4 col-md-3 col-lg-2">
                    <a href="#" className="partner">
                        <img src="img/partners/photodune-light-background.png" alt="" className="partner__img"></img>
                    </a>
                </div>



                <div className="col-6 col-sm-4 col-md-3 col-lg-2">
                    <a href="#" className="partner">
                        <img src="img/partners/activeden-light-background.png" alt="" className="partner__img"></img>
                    </a>
                </div>



                <div className="col-6 col-sm-4 col-md-3 col-lg-2">
                    <a href="#" className="partner">
                        <img src="img/partners/3docean-light-background.png" alt="" className="partner__img"></img>
                    </a>
                </div>

            </div>
        </div>
    </section>

    <footer className="footer">
        <div className="container">
            <div className="row">

                <div className="col-12 col-md-3">
                    <h6 className="footer__title">Download Our App</h6>
                    <ul className="footer__app">
                        <li><a href="appstore.com"><img src="img/Download_on_the_App_Store_Badge.svg" alt=""></img></a></li>
                        <li><a href="https://play.google.com/store"><img src="img/google-play-badge.png" alt=""></img></a>
                        </li>
                    </ul>
                </div>

                <div className="col-6 col-sm-4 col-md-3">
                    <h6 className="footer__title">Resources</h6>
                    <ul className="footer__list">
                        <li><a href="help.js">About Us</a></li>
                        <li><a href="help.js"></a></li>
                        <li><a href="help.js">Help</a></li>
                    </ul>
                </div>

                <div className="col-6 col-sm-4 col-md-3">
                    <h6 className="footer__title">Legal</h6>
                    <ul className="footer__list">
                        <li><a href="#">Terms of Use</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Security</a></li>
                    </ul>
                </div>

                <div className="col-12 col-sm-4 col-md-3">
                    <h6 className="footer__title">Contact</h6>
                    <ul className="footer__list">
                        <li><a href="tel:+18001231212">+1 (800) 123-1212</a></li>
                        <li><a href="mailto:support@moviego.com">support@nomorecensorship.com</a></li>
                    </ul>
                    <ul className="footer__social">
                        <li className="facebook"><a href="https://www.facebook.com"><i
                            className="icon ion-logo-facebook"></i></a></li>
                        <li className="instagram"><a href="https://www.instagram.com/"><i
                            className="icon ion-logo-instagram"></i></a></li>
                        <li className="twitter"><a href="https://twitter.com"><i className="icon ion-logo-twitter"></i></a></li>
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


export default Main2