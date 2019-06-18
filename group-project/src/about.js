import React from 'react'

const About = () => {
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
											<a href="Main.js" className="header__nav-link">Home</a>
										</li>

										<li className="header__nav-item">
											<a href="catalog1.js" className="header__nav-link">History</a>
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

									<button className="header__btn" type="button" />
									<span></span>
									<span></span>
									<span></span>

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
									<input type="text" placeholder="Search"></input>

									<button type="button">search</button>
								</div>
							</div>
						</div>
					</div>
				</form>

			</header>

			<section className="section section--first section--bg" data-bg="img/section/section.jpg">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<div className="section__wrap">

								<h2 className="section__title">About Us</h2>



								<ul className="breadcrumb">
									<li className="breadcrumb__item"><a href="#">Home</a></li>
									<li className="breadcrumb__item breadcrumb__item--active">About Us</li>
								</ul>

							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="section">
				<div className="container">
					<div className="row">

						<div className="col-12">
							<h2 className="section__title"><b></b> – Best Place for Video</h2>
						</div>

						<div className="col-12">
							<p className="section__text">It is a long <b>established</b> fact that that freedom is non-negotiable.
								As soon as censorship bigins, tyrany will follow. As a content provider, we believe that if
								there is something that you, the viewer, finds offensive, you are responsible enough to turn it
								off or change it something else. We understand that you, our viewers, are the ones who should
						determine what is offensive and what is not.</p>

							<p className="section__text section__text--last-with-margin">'One this platform -- EVERYONE has a voice.
					</p>
						</div>


						<div className="col-12 col-md-6 col-lg-4">
							<div className="feature">
								<i className="icon ion-ios-tv feature__icon"></i>
								<h3 className="feature__title">Ultra HD</h3>
								<p className="feature__text">If you are going to use a passage of Lorem Ipsum, you need to be sure
							there isn't anything embarrassing hidden in the middle of text.</p>
							</div>
						</div>

						<div className="col-12 col-md-6 col-lg-4">
							<div className="feature">
								<i className="icon ion-ios-film feature__icon"></i>
								<h3 className="feature__title">Film</h3>
								<p className="feature__text">All the Lorem Ipsum generators on the Internet tend to repeat
							predefined chunks as necessary, making this the first.</p>
							</div>
						</div>

						<div className="col-12 col-md-6 col-lg-4">
							<div className="feature">
								<i className="icon ion-ios-trophy feature__icon"></i>
								<h3 className="feature__title">Awards</h3>
								<p className="feature__text">It to make a type specimen book. It has survived not only five
							centuries, but also the leap into electronic typesetting, remaining.</p>
							</div>
						</div>

						<div className="col-12 col-md-6 col-lg-4">
							<div className="feature">
								<i className="icon ion-ios-notifications feature__icon"></i>
								<h3 className="feature__title">Notifications</h3>
								<p className="feature__text">Various versions have evolved over the years, sometimes by accident,
							sometimes on purpose.</p>
							</div>
						</div>

						<div className="col-12 col-md-6 col-lg-4">
							<div className="feature">
								<i className="icon ion-ios-rocket feature__icon"></i>
								<h3 className="feature__title">Rocket</h3>
								<p className="feature__text">It to make a type specimen book. It has survived not only five
							centuries, but also the leap into electronic typesetting.</p>
							</div>
						</div>



						<div className="col-12 col-md-6 col-lg-4">
							<div className="feature">
								<i className="icon ion-ios-globe feature__icon"></i>
								<h3 className="feature__title">Multi Language Subtitles </h3>
								<p className="feature__text">Various versions have evolved over the years, sometimes by accident,
							sometimes on purpose.</p>
							</div>
						</div>

					</div>
				</div>
			</section>


			<section className="section section--dark">
				<div className="container">
					<div className="row">

						<div className="col-12">
							<h2 className="section__title section__title--no-margin">How it works?</h2>
						</div>

						<div className="col-12 col-md-6 col-lg-4">
							<div className="how">
								<span className="how__number">01</span>
								<h3 className="how__title">Create an account</h3>
								<p className="how__text">It has never been an issue to find an old movie or TV show on the internet.
							However, this is not the case with the TRENDING.</p>
							</div>
						</div>

						<div className="col-12 col-md-6 col-lg-4">
							<div className="how">
								<span className="how__number">02</span>
								<h3 className="how__title">Choose your Plan</h3>
								<p className="how__text">It has never been an issue to find an old movie or TV show on the internet.
							However, this is not the case with the TRENDING.</p>
							</div>
						</div>

						<div className="col-12 col-md-6 col-lg-4">
							<div className="how">
								<span className="how__number">03</span>
								<h3 className="how__title">Enjoy MovieGo</h3>
								<p className="how__text">It has never been an issue to find an old movie or TV show on the internet.
							However, this is not the case with the TRENDING.</p>
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
								<li><a href="https://play.google.com/store"><img src="img/google-play-badge.png" alt=""></img></a></li>
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

export default About