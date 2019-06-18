import React from 'react'

const details1 = () => {
	return (


		<div className="body">


			<header className="header">
				<div className="header__wrap">
					<div className="container">
						<div className="row">
							<div className="col-12">
								<div className="header__content">

									<a href="Main.js" className="header__logo">

										<img src="img/HappyCelebratedChihuahua-size_restricted.gif" alt=""></img>
									</a>

									<ul className="header__nav">

										<li className="header__nav-item">
											<a className="dropdown-toggle header__nav-link" href="#" role="button"
												id="dropdownMenuHome" data-toggle="dropdown" aria-haspopup="true"
												aria-expanded="false">Home</a>

											<ul className="dropdown-menu header__dropdown-menu" aria-labelledby="dropdownMenuHome">
												<li><a href="Main.js">Home slideshow bg</a></li>
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
											<a href="pricing.js" className="header__nav-link"></a>
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

			<section className="section details">

				<div className="details__bg" data-bg="img/home/home__bg.jpg"></div>

				<div className="container">
					<div className="row">

						<div className="col-12">
							<h1 className="details__title">I Dream in Another Language</h1>
						</div>

						<div className="col-12 col-xl-6">
							<div className="card card--details">
								<div className="row">

									<div className="col-12 col-sm-4 col-md-4 col-lg-3 col-xl-5">
										<div className="card__cover">
											<img src="img/covers/cover.jpg" alt=""></img>
										</div>
									</div>

									<div className="col-12 col-sm-8 col-md-8 col-lg-9 col-xl-7">
										<div className="card__content">
											<div className="card__wrap">
												<span className="card__rate"><i className="icon ion-ios-star"></i>8.4</span>

												<ul className="card__list">
													<li>HD</li>
													<li>16+</li>
												</ul>
											</div>

											<ul className="card__meta">
												<li><span>Genre:</span> <a href="#">Action</a>
													<a href="#">Conspiracy</a></li>
												<li><span>Release year:</span> 2017</li>
												<li><span>Running time:</span> 120 min</li>
												<li><span>Country:</span> <a href="#">USA</a> </li>
											</ul>

											<div className="card__description card__description--details">
												It is a long established fact that a reader will be distracted by the readable
												content of a page when looking at its layout. The point of using Lorem Ipsum is
												that it has a more-or-less normal distribution of letters, as opposed to using
												'Content here, content here', making it look like readable English. Many desktop
												publishing packages and web page editors now use Lorem Ipsum as their default
												model text, and a search for 'lorem ipsum' will uncover many web sites still in
												their infancy.
	    								</div>
										</div>
									</div>

								</div>
							</div>
						</div>

						<div className="col-12 col-xl-6">
							<video controls crossorigin playsinline
								poster="../../../cdn.plyr.io/static//View_From_A_Blue_Moon_Trailer-HD.jpg" id="player" />

							<source src="https://cdn.plyr.io/static//View_From_A_Blue_Moon_Trailer-576p.mp4"
								type="video/mp4" size="576" />
							<source src="https://cdn.plyr.io/static//View_From_A_Blue_Moon_Trailer-720p.mp4"
								type="video/mp4" size="720" />
							<source src="https://cdn.plyr.io/static//View_From_A_Blue_Moon_Trailer-1080p.mp4"
								type="video/mp4" size="1080" />
							<source src="https://cdn.plyr.io/static//View_From_A_Blue_Moon_Trailer-1440p.mp4"
								type="video/mp4" size="1440" />


							<track kind="captions" label="English" srclang="en"
								src="https://cdn.plyr.io/static//View_From_A_Blue_Moon_Trailer-HD.en.vtt" default />
							<track kind="captions" label="Français" srclang="fr"
								src="https://cdn.plyr.io/static//View_From_A_Blue_Moon_Trailer-HD.fr.vtt" />

							<video>
								<a href="https://cdn.plyr.io/static//View_From_A_Blue_Moon_Trailer-576p.mp4"
									download>Download</a>
							</video>
						</div>


						<div className="col-12">
							<div className="details__wrap">

								<div className="details__devices">
									<span className="details__devices-title">Available on devices:</span>
									<ul className="details__devices-list">
										<li><i className="icon ion-logo-apple"></i><span>IOS</span></li>
										<li><i className="icon ion-logo-android"></i><span>Android</span></li>
										<li><i className="icon ion-logo-windows"></i><span>Windows</span></li>
										<li><i className="icon ion-md-tv"></i><span>Smart TV</span></li>
									</ul>
								</div>

								<div className="details__share">
									<span className="details__share-title">Share with friends:</span>

									<ul className="details__share-list">
										<li className="facebook"><a href="#"><i className="icon ion-logo-facebook"></i></a></li>
										<li className="instagram"><a href="#"><i className="icon ion-logo-instagram"></i></a></li>
										<li className="twitter"><a href="#"><i className="icon ion-logo-twitter"></i></a></li>
										<li className="vk"><a href="#"><i className="icon ion-logo-vk"></i></a></li>
									</ul>
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

								<h2 className="content__title">Discover</h2>

								<ul className="nav nav-tabs content__tabs" id="content__tabs" role="tablist">
									<li className="nav-item">
										<a className="nav-link active" data-toggle="tab" href="#tab-1" role="tab"
											aria-controls="tab-1" aria-selected="true">Comments</a>
									</li>

									<li className="nav-item">
										<a className="nav-link" data-toggle="tab" href="#tab-2" role="tab" aria-controls="tab-2"
											aria-selected="false">Reviews</a>
									</li>

									<li className="nav-item">
										<a className="nav-link" data-toggle="tab" href="#tab-3" role="tab" aria-controls="tab-3"
											aria-selected="false">Photos</a>
									</li>
								</ul>

								<div className="content__mobile-tabs" id="content__mobile-tabs">
									<div className="content__mobile-tabs-btn dropdown-toggle" role="navigation" id="mobile-tabs"
										data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
										<input type="button" value="Comments"></input>
										<span></span>
									</div>

									<div className="content__mobile-tabs-menu dropdown-menu" aria-labelledby="mobile-tabs">
										<ul className="nav nav-tabs" role="tablist">
											<li className="nav-item"><a className="nav-link active" id="1-tab" data-toggle="tab"
												href="#tab-1" role="tab" aria-controls="tab-1"
												aria-selected="true">Comments</a></li>

											<li className="nav-item"><a className="nav-link" id="2-tab" data-toggle="tab" href="#tab-2"
												role="tab" aria-controls="tab-2" aria-selected="false">Reviews</a></li>

											<li className="nav-item"><a className="nav-link" id="3-tab" data-toggle="tab" href="#tab-3"
												role="tab" aria-controls="tab-3" aria-selected="false">Photos</a></li>
										</ul>
									</div>
								</div>

							</div>
						</div>
					</div>
				</div>

				<div className="container">
					<div className="row">
						<div className="col-12 col-lg-8 col-xl-8">

							<div className="tab-content" id="myTabContent">
								<div className="tab-pane fade show active" id="tab-1" role="tabpanel" aria-labelledby="1-tab">
									<div className="row">

										<div className="col-12">
											<div className="comments">
												<ul className="comments__list">
													<li className="comments__item">
														<div className="comments__autor">
															<img className="comments__avatar" src="img/user.png" alt=""></img>
															<span className="comments__name">John Doe</span>
															<span className="comments__time">30.08.2018, 17:53</span>
														</div>
														<p className="comments__text">There are many variations of passages of Lorem
															Ipsum available, but the majority have suffered alteration in some
															form, by injected humour, or randomised words which don't look even
															slightly believable. If you are going to use a passage of Lorem
															Ipsum, you need to be sure there isn't anything embarrassing hidden
	    												in the middle of text.</p>
														<div className="comments__actions">
															<div className="comments__rate">
																<button type="button"><i
																	className="icon ion-md-thumbs-up"></i>12</button>

																<button type="button">7<i className="icon ion-md-thumbs-down"></i></button>
															</div>

															<button type="button"><i
																className="icon ion-ios-share-alt"></i>Reply</button>
															<button type="button"><i
																className="icon ion-ios-quote"></i>Quote</button>
														</div>
													</li>

													<li className="comments__item comments__item--answer">
														<div className="comments__autor">
															<img className="comments__avatar" src="img/user.png" alt=""></img>
															<span className="comments__name">John Doe</span>
															<span className="comments__time">24.08.2018, 16:41</span>
														</div>
														<p className="comments__text">Lorem Ipsum is simply dummy text of the
															printing and typesetting industry. Lorem Ipsum has been the
															industry's standard dummy text ever since the 1500s, when an unknown
															printer took a galley of type and scrambled it to make a type
	    												specimen book.</p>
														<div className="comments__actions">
															<div className="comments__rate">
																<button type="button"><i className="icon ion-md-thumbs-up"></i>8</button>

																<button type="button">3<i className="icon ion-md-thumbs-down"></i></button>
															</div>

															<button type="button"><i className="icon ion-ios-share-alt"></i>Reply</button>
															<button type="button"><i className="icon ion-ios-quote"></i>Quote</button>
														</div>
													</li>

													<li className="comments__item comments__item--quote">
														<div className="comments__autor">
															<img className="comments__avatar" src="img/user.png" alt=""></img>
															<span className="comments__name">John Doe</span>
															<span className="comments__time">11.08.2018, 11:11</span>
														</div>
														<p className="comments__text"><span>There are many variations of passages of
																Lorem Ipsum available, but the majority have suffered alteration
																in some form, by injected humour, or randomised words which
	    													don't look even slightly believable.</span>It has survived not
	    												only five centuries, but also the leap into electronic typesetting,
	    												remaining essentially unchanged. It was popularised in the 1960s
	    												with the release of Letraset sheets containing Lorem Ipsum passages,
	    												and more recently with desktop publishing software like Aldus
	    												PageMaker including versions of Lorem Ipsum.</p>
														<div className="comments__actions">
															<div className="comments__rate">
																<button type="button"><i className="icon ion-md-thumbs-up"></i>11</button>

																<button type="button">1<i className="icon ion-md-thumbs-down"></i></button>
															</div>

															<button type="button"><i className="icon ion-ios-share-alt"></i>Reply</button>
															<button type="button"><i className="icon ion-ios-quote"></i>Quote</button>
														</div>
													</li>

													<li className="comments__item">
														<div className="comments__autor">
															<img className="comments__avatar" src="img/user.png" alt=""></img>
															<span className="comments__name">John Doe</span>
															<span className="comments__time">07.08.2018, 14:33</span>
														</div>
														<p className="comments__text">There are many variations of passages of Lorem
															Ipsum available, but the majority have suffered alteration in some
															form, by injected humour, or randomised words which don't look even
															slightly believable. If you are going to use a passage of Lorem
															Ipsum, you need to be sure there isn't anything embarrassing hidden
	    												in the middle of text.</p>
														<div className="comments__actions">
															<div className="comments__rate">
																<button type="button"><i className="icon ion-md-thumbs-up"></i>99</button>

																<button type="button">35<i className="icon ion-md-thumbs-down"></i></button>
															</div>

															<button type="button"><i className="icon ion-ios-share-alt"></i>Reply</button>
															<button type="button"><i className="icon ion-ios-quote"></i>Quote</button>
														</div>
													</li>

													<li className="comments__item">
														<div className="comments__autor">
															<img className="comments__avatar" src="img/user.png" alt=""></img>
															<span className="comments__name">John Doe</span>
															<span className="comments__time">02.08.2018, 15:24</span>
														</div>
														<p className="comments__text">Many desktop publishing packages and web page
															editors now use Lorem Ipsum as their default model text, and a
															search for 'lorem ipsum' will uncover many web sites still in their
															infancy. Various versions have evolved over the years, sometimes by
	    												accident, sometimes on purpose (injected humour and the like).</p>
														<div className="comments__actions">
															<div className="comments__rate">
																<button type="button"><i className="icon ion-md-thumbs-up"></i>74</button>

																<button type="button">13<i className="icon ion-md-thumbs-down"></i></button>
															</div>

															<button type="button"><i className="icon ion-ios-share-alt"></i>Reply</button>
															<button type="button"><i className="icon ion-ios-quote"></i>Quote</button>
														</div>
													</li>
												</ul>

												<form action="#" className="form">
													<textarea id="text" name="text" className="form__textarea" placeholder="Add comment"></textarea>
													<button type="button" className="form__btn">Send</button>
												</form>
											</div>
										</div>

									</div>
								</div>

								<div className="tab-pane fade" id="tab-2" role="tabpanel" aria-labelledby="2-tab">
									<div className="row">

										<div className="col-12">
											<div className="reviews">
												<ul className="reviews__list">
													<li className="reviews__item">
														<div className="reviews__autor">
															<img className="reviews__avatar" src="img/user.png" alt=""></img>
															<span className="reviews__name">Best Marvel movie in my opinion</span>
															<span className="reviews__time">24.08.2018, 17:53 by John Doe</span>

															<span className="reviews__rating"><i className="icon ion-ios-star"></i>8.4</span>
														</div>
														<p className="reviews__text">There are many variations of passages of Lorem
															Ipsum available, but the majority have suffered alteration in some
															form, by injected humour, or randomised words which don't look even
															slightly believable. If you are going to use a passage of Lorem
															Ipsum, you need to be sure there isn't anything embarrassing hidden
	    												in the middle of text.</p>
													</li>

													<li className="reviews__item">
														<div className="reviews__autor">
															<img className="reviews__avatar" src="img/user.png" alt=""></img>
															<span className="reviews__name">Best Marvel movie in my opinion</span>
															<span className="reviews__time">24.08.2018, 17:53 by John Doe</span>

															<span className="reviews__rating"><i
																className="icon ion-ios-star"></i>9.0</span>
														</div>
														<p className="reviews__text">There are many variations of passages of Lorem
															Ipsum available, but the majority have suffered alteration in some
															form, by injected humour, or randomised words which don't look even
															slightly believable. If you are going to use a passage of Lorem
															Ipsum, you need to be sure there isn't anything embarrassing hidden
	    												in the middle of text.</p>
													</li>

													<li className="reviews__item">
														<div className="reviews__autor">
															<img className="reviews__avatar" src="img/user.png" alt=""></img>
															<span className="reviews__name">Best Marvel movie in my opinion</span>
															<span className="reviews__time">24.08.2018, 17:53 by John Doe</span>

															<span className="reviews__rating"><i className="icon ion-ios-star"></i>7.5</span>
														</div>
														<p className="reviews__text">There are many variations of passages of Lorem
															Ipsum available, but the majority have suffered alteration in some
															form, by injected humour, or randomised words which don't look even
															slightly believable. If you are going to use a passage of Lorem
															Ipsum, you need to be sure there isn't anything embarrassing hidden
	    												in the middle of text.</p>
													</li>
												</ul>

												<form action="#" className="form">
													<input type="text" className="form__input" placeholder="Title"></input>
													<textarea className="form__textarea" placeholder="Review"></textarea>
													<div className="form__slider">
														<div className="form__slider-rating" id="slider__rating"></div>
														<div className="form__slider-value" id="form__slider-value"></div>
													</div>
													<button type="button" className="form__btn">Send</button>
												</form>
											</div>
										</div>

									</div>
								</div>

								<div className="tab-pane fade" id="tab-3" role="tabpanel" aria-labelledby="3-tab">

									<div className="gallery" itemscope>
										<div className="row">

											<figure className="col-12 col-sm-6 col-xl-4" itemprop="associatedMedia" itemscope>
												<a href="img/gallery/project-1.jpg" itemprop="contentUrl" data-size="1920x1280">
													<img src="img/gallery/project-1.jpg" itemprop="thumbnail"
														alt="Image description" />
												</a>
												<figcaption itemprop="caption description">Some image caption 1</figcaption>
											</figure>



											<figure className="col-12 col-sm-6 col-xl-4" itemprop="associatedMedia" itemscope>
												<a href="img/gallery/project-2.jpg" itemprop="contentUrl" data-size="1920x1280">
													<img src="img/gallery/project-2.jpg" itemprop="thumbnail"
														alt="Image description" />
												</a>
												<figcaption itemprop="caption description">Some image caption 2</figcaption>
											</figure>



											<figure className="col-12 col-sm-6 col-xl-4" itemprop="associatedMedia" itemscope>
												<a href="img/gallery/project-3.jpg" itemprop="contentUrl" data-size="1920x1280">
													<img src="img/gallery/project-3.jpg" itemprop="thumbnail"
														alt="Image description" />
												</a>
												<figcaption itemprop="caption description">Some image caption 3</figcaption>
											</figure>



											<figure className="col-12 col-sm-6 col-xl-4" itemprop="associatedMedia" itemscope>
												<a href="img/gallery/project-4.jpg" itemprop="contentUrl" data-size="1920x1280">
													<img src="img/gallery/project-4.jpg" itemprop="thumbnail"
														alt="Image description" />
												</a>
												<figcaption itemprop="caption description">Some image caption 4</figcaption>
											</figure>



											<figure className="col-12 col-sm-6 col-xl-4" itemprop="associatedMedia" itemscope>
												<a href="img/gallery/project-5.jpg" itemprop="contentUrl" data-size="1920x1280">
													<img src="img/gallery/project-5.jpg" itemprop="thumbnail"
														alt="Image description" />
												</a>
												<figcaption itemprop="caption description">Some image caption 5</figcaption>
											</figure>



											<figure className="col-12 col-sm-6 col-xl-4" itemprop="associatedMedia" itemscope>
												<a href="img/gallery/project-6.jpg" itemprop="contentUrl" data-size="1920x1280" />
												<img src="img/gallery/project-6.jpg" itemprop="thumbnail" alt="Image description"></img>
												<figcaption itemprop="caption description">Some image caption 6</figcaption>
											</figure>

										</div>
									</div>

								</div>
							</div>

						</div>


						<div className="col-12 col-lg-4 col-xl-4">
							<div className="row">

								<div className="col-12">
									<h2 className="section__title section__title--sidebar">You may also like...</h2>
								</div>



								<div className="col-6 col-sm-4 col-lg-6">
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



								<div className="col-6 col-sm-4 col-lg-6">
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



								<div className="col-6 col-sm-4 col-lg-6">
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



								<div className="col-6 col-sm-4 col-lg-6">
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



								<div className="col-6 col-sm-4 col-lg-6">
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



								<div className="col-6 col-sm-4 col-lg-6">
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

							</div>
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
								<li className="facebook"><a href="https://www.facebook.com"><i className="icon ion-logo-facebook"></i></a></li>
								<li className="instagram"><a href="https://www.instagram.com/"><i className="icon ion-logo-instagram"></i></a></li>
								<li className="twitter"><a href="https://twitter.com"><i className="icon ion-logo-twitter"></i></a></li>
							</ul>
						</div>


					</div>
				</div>
			</footer>

			<div className="pswp" tabindex="-1" role="dialog" aria-hidden="true">


				<div className="pswp__bg"></div>


				<div className="pswp__scroll-wrap">

					<div className="pswp__container">
						<div className="pswp__item"></div>
						<div className="pswp__item"></div>
						<div className="pswp__item"></div>
					</div>

					<div className="pswp__ui pswp__ui--hidden">

						<div className="pswp__top-bar">

							<div className="pswp__counter"></div>

							<button className="pswp__button pswp__button--close" title="Close (Esc)"></button>

							<button className="pswp__button pswp__button--fs" title="Toggle fullscreen"></button>


							<div className="pswp__preloader">
								<div className="pswp__preloader__icn">
									<div className="pswp__preloader__cut">
										<div className="pswp__preloader__donut"></div>
									</div>
								</div>
							</div>
						</div>

						<button className="pswp__button pswp__button--arrow--left" title="Previous (arrow left)"></button>

						<button className="pswp__button pswp__button--arrow--right" title="Next (arrow right)"></button>

						<div className="pswp__caption">
							<div className="pswp__caption__center"></div>
						</div>
					</div>
				</div>
			</div>

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
export default details1
