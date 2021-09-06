<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
<meta charset="utf-8">
<title>LazyCodeLab</title>
<!-- Stylesheets -->
<link href="{{ asset( 'css/bootstrap.css' ) }}" rel="stylesheet">
<link href="{{ asset( 'css/style.css' ) }}" rel="stylesheet">
<link href="{{ asset( 'css/responsive.css' ) }}" rel="stylesheet">

<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100;300;400;500;700;900&amp;display=swap" rel="stylesheet">

<link rel="shortcut icon" href="images/favicon.png" type="image/x-icon">
<link rel="icon" href="images/favicon.png" type="image/x-icon">

<!-- Responsive -->
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">

<!--[if lt IE 9]><script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.js"></script><![endif]-->
<!--[if lt IE 9]><script src="js/respond.js"></script><![endif]-->
</head>

<body class="hidden-bar-wrapper">

<div class="page-wrapper">

	<!-- Preloader -->
	<div class="preloader"></div>

 	<!-- Main Header / Header Style Two -->
	<header class="main-header header-style-two">

		<!--Header-Upper-->
		<div class="header-upper">
			<div class="outer-container clearfix">

				<div class="pull-left logo-box">
					<div class="logo"><a href="index"><img src="images/logo.svg" alt="" title=""></a></div>
				</div>

				<div class="nav-outer clearfix">
					<!--Mobile Navigation Toggler-->
					<div class="mobile-nav-toggler"><span class="icon flaticon-menu"></span></div>
					<!-- Main Menu -->
					<nav class="main-menu navbar-expand-md">
						<div class="navbar-header">
							<!-- Toggle Button -->
							<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
								<span class="icon-bar"></span>
								<span class="icon-bar"></span>
								<span class="icon-bar"></span>
							</button>
						</div>

						<div class="navbar-collapse collapse clearfix" id="navbarSupportedContent">
							<ul class="navigation clearfix">
								<li class="current dropdown"><a href="#"><span data-hover="Home">Home</span></a>
									<ul>
										<li><a href="index">Home page 01</a></li>
										<li><a href="index-2">Home page 02</a></li>
										<li><a href="index-3">Home page 03 <span class="new-page">New</span></a></li>
										<li class="dropdown"><a href="#">Header styles</a>
											<ul>
												<li><a href="index">Header Style 01</a></li>
												<li><a href="index-2">Header Style 02</a></li>
												<li><a href="index-3">Header Style 03 <span class="new-page">New</span></a></a></li>
											</ul>
										</li>
									</ul>
								</li>
								<li class="dropdown"><a href="#">About</a>
									<ul>
										<li><a href="about">About Us</a></li>
										<li><a href="faq">Faq</a></li>
										<li><a href="teacher">Teacher</a></li>
										<li><a href="profile">User Profile</a></li>
										<li><a href="membership">Membership</a></li>
									</ul>
								</li>
								<li class="dropdown"><a href="#">Courses</a>
									<ul>
										<li><a href="course">Courses</a></li>
										<li><a href="course-2">Courses 02</a></li>
										<li><a href="course-3">Courses 03</a></li>
										<li><a href="course-4">Courses 04</a></li>
										<li><a href="course-detail">Courses Detail</a></li>
									</ul>
								</li>
								<li class="dropdown"><a href="#">Blog</a>
									<ul>
										<li><a href="blog">Our Blog</a></li>
										<li><a href="blog-list">Blog List</a></li>
										<li><a href="blog-detail">Blog Detail</a></li>
										<li><a href="not-found">Not Found</a></li>
									</ul>
								</li>
								<li><a href="#">Contact</a></li>
								<li><a href="#">Donation</a></li>
							</ul>
						</div>
					</nav>
				</div>

			</div>
		</div>
		<!--End Header Upper-->

		<!-- Sticky Header  -->
		<div class="sticky-header">
			<div class="auto-container clearfix">
				<!--Logo-->
				<div class="logo pull-left">
					<a href="index" title=""><img src="images/logo.svg" alt="" title=""></a>
				</div>
				<!--Right Col-->
				<div class="pull-right">
					<!-- Main Menu -->
					<nav class="main-menu">
						<!--Keep This Empty / Menu will come through Javascript-->
					</nav>
					<!-- Main Menu End-->

					<!-- Main Menu End-->
					<div class="outer-box clearfix">

					</div>

				</div>
			</div>
		</div>
		<!-- End Sticky Menu -->

		<!-- Mobile Menu  -->
		<div class="mobile-menu">
			<div class="menu-backdrop"></div>
			<div class="close-btn"><span class="icon flaticon-multiply"></span></div>

			<nav class="menu-box">
				<div class="nav-logo"><a href="index"><img src="images/logo.svg" alt="" title=""></a></div>
				<div class="menu-outer"><!--Here Menu Will Come Automatically Via Javascript / Same Menu as in Header--></div>
			</nav>
		</div><!-- End Mobile Menu -->

	</header>
	<!-- End Main Header -->

	<!-- Sidebar Cart Item -->
	<div class="xs-sidebar-group info-group">
		<div class="xs-overlay xs-bg-black"></div>
		<div class="xs-sidebar-widget">
			<div class="sidebar-widget-container">
				<div class="widget-heading">
					<a href="#" class="close-side-widget">
						X
					</a>
				</div>
				<div class="sidebar-textwidget">

					<!-- Sidebar Info Content -->
					<div class="sidebar-info-contents">
						<div class="content-inner">
							<div class="logo">
								<a href="index"><img src="images/logo-2.png" alt="" /></a>
							</div>
							<div class="content-box">
								<h2>About Us</h2>
								<p class="text">The argument in favor of using filler text goes something like this: If you use real content in the Consulting Process, anytime you reach a review point you’ll end up reviewing and negotiating the content itself and not the design.</p>
								<a href="#" class="theme-btn btn-style-two"><span class="txt">Consultation</span></a>
							</div>
							<div class="contact-info">
								<h2>Contact Info</h2>
								<ul class="list-style-two">
									<li><span class="icon fa fa-location-arrow"></span>Chicago 12, Melborne City, USA</li>
									<li><span class="icon fa fa-phone"></span>(111) 111-111-1111</li>
									<li><span class="icon fa fa-envelope"></span>lebari@gmail.com</li>
									<li><span class="icon fa fa-clock-o"></span>Week Days: 09.00 to 18.00 Sunday: Closed</li>
								</ul>
							</div>
							<!-- Social Box -->
							<ul class="social-box">
								<li class="facebook"><a href="#" class="fa fa-facebook-f"></a></li>
								<li class="twitter"><a href="#" class="fa fa-twitter"></a></li>
								<li class="linkedin"><a href="#" class="fa fa-linkedin"></a></li>
								<li class="instagram"><a href="#" class="fa fa-instagram"></a></li>
								<li class="youtube"><a href="#" class="fa fa-youtube"></a></li>
							</ul>
						</div>
					</div>

				</div>
			</div>
		</div>
	</div>
	<!-- END sidebar widget item -->

	<!-- Banner Section Two -->
	<section class="banner-section-two">
		<div class="auto-container">
			<div class="pattern-layer-two" style="background-image: url(images/background/pattern-15.png)"></div>
			<div class="pattern-layer-three" style="background-image: url(images/main-slider/icon-2.png)"></div>
			<div class="row clearfix">

				<!-- Content Column -->
				<div class="content-column col-lg-6 col-md-12 col-sm-12">
					<div class="pattern-layer-one" style="background-image: url(images/main-slider/pattern-1.png)"></div>
					<div class="icon-layer-one" style="background-image: url(images/main-slider/icon-2.png)"></div>
					<div class="icon-layer-two" style="background-image: url(images/main-slider/pattern-2.png)"></div>
					<div class="icon-layer-three" style="background-image: url(images/main-slider/icon-1.png)"></div>
					<div class="icon-layer-four" style="background-image: url(images/icons/icon-3.png)"></div>
					<div class="icon-layer-five" style="background-image: url(images/icons/icon-4.png)"></div>
					<div class="inner-column">
						<div class="title">Learn best practicies</div>
						<h1>Be better at programming</h1>
						<div class="btns-box">
							<a href="about" class="theme-btn btn-style-one"><span class="txt">Learn More</span></a>
						</div>
					</div>
				</div>

				<!-- Image Column -->
				<div class="image-column col-lg-6 col-md-12 col-sm-12">
					<div class="inner-column">
						<div class="image titlt" data-tilt data-tilt-max="4">
							<img src="images/vector-1.svg" alt="vector-1" />
						</div>
					</div>
				</div>

			</div>
		</div>
	</section>
	<!-- End Banner Section -->

	<!-- Instructor Section -->
	<section class="instructor-section">
		<div class="background-layer" style="background-image:url(images/background/1.png)"></div>
		<div class="background-layer-one" style="background-image:url(images/background/pattern-1.png)"></div>
		<div class="background-layer-two" style="background-image:url(images/background/pattern-2.png)"></div>
		<div class="auto-container">
			<div class="row clearfix">

				<!-- Blocks Column -->
				<div class="blocks-column col-lg-8 col-md-12 col-sm-12">
					<div class="inner-column">
						<div class="row clearfix">

							<!-- Service Block -->
							<div class="service-block col-lg-6 col-md-6 col-sm-12">
								<div class="inner-box wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
									<div class="border-layer"></div>
									<div class="icon-box">
										<div class="icon flaticon-verify"></div>
									</div>
									<h4><a href="course-detail">Web Development</a></h4>
									<div class="text">Learn all the best practicies to become one of the best web developer.</div>
								</div>
							</div>

							<!-- Service Block -->
							<div class="service-block col-lg-6 col-md-6 col-sm-12">
								<div class="inner-box wow fadeInLeft" data-wow-delay="150ms" data-wow-duration="1500ms">
									<div class="border-layer"></div>
									<div class="icon-box">
										<div class="icon flaticon-heart-box"></div>
									</div>
									<h4><a href="course-detail">Flexible courses</a></h4>
									<div class="text">We provide online learning solutions for secondary education, from structured content to courses fully taught </div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<!-- Instructor Column -->
				<div class="instructor-column col-lg-4 col-md-12 col-sm-12">
					<div class="inner-column wow fadeInRight" data-wow-delay="0ms" data-wow-duration="1500ms">
						<h4>Become an instructor</h4>
						<p>Top instructors from around the world teach millions of students  Duis aute irure dolor in reprehenderit in </p>
						<p>voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non</p>
						<a class="click-here" href="#">Click here for apply</a>
						<div class="image titlt" data-tilt data-tilt-max="4">
							<img src="images/resource/instructor.png" alt="" />
						</div>
					</div>
				</div>

			</div>
		</div>
	</section>
	<!-- End Instructor Section -->

	<!-- Professional Section -->
	<section class="professional-section">
		<div class="background-layer-one" style="background-image:url(images/background/pattern-5.png)"></div>
		<div class="auto-container">
			<div class="row clearfix">

				<!-- Images Column -->
				<div class="images-column col-lg-6 col-md-12 col-sm-12">
					<div class="inner-column">
						<div class="pattern-layer" style="background-image:url(images/background/pattern-3.png)"></div>
						<div class="pattern-layer-two" style="background-image:url(images/background/pattern-4.png)"></div>
						<div class="color-layer"></div>
						<div class="color-layer-two"></div>
						<div class="image wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
							<img src="images/resource/professional.jpg" alt="" />
						</div>
					</div>
				</div>

				<!-- Content Column -->
				<div class="content-column col-lg-6 col-md-12 col-sm-12">
					<div class="inner-column">
						<div class="pattern-layer-three" style="background-image:url(images/background/pattern-16.png)"></div>
						<div class="sec-title">
							<div class="title">Learn anything</div>
							<h2>Take online courses Earn <br> professional</h2>
						</div>
						<div class="bold-text">Position yourself for success with a variety of collegeclasses including general education courses</div>
						<p>Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
						<div class="btn-box">
							<a href="#" class="theme-btn btn-style-four"><span class="txt">Short courses</span></a>
						</div>
					</div>
				</div>

			</div>

		</div>
	</section>
	<!-- End Professional Section -->

	<!-- Event Section -->
	<section class="event-section">
		<div class="auto-container">
			<div class="row clearfix">

				<!-- Content Column -->
				<div class="content-column col-lg-6 col-md-12 col-sm-12">
					<div class="inner-column">
						<div class="sec-title">
							<div class="title">Explore Event</div>
							<h2>Our Upcoming Events</h2>
						</div>
						<div class="bold-text">Sed do eiusmod but laboris incididunt ut labore et dolore magna aliqua.sed do eiusmod</div>
						<p>aboris incididunt ut labore et dolore magna aliqua.sed do eiusmod but laboris incididunt ut labore et dolore magna aliqua.but laboris incididunt ut labore et dolore magna aliqua.</p>
						<div class="btn-box">
							<a href="#" class="theme-btn btn-style-one"><span class="txt">Explore Event</span></a>
						</div>
					</div>
				</div>

				<!-- Images Column -->
				<div class="images-column col-lg-6 col-md-12 col-sm-12">
					<div class="background-layer-one" style="background-image:url(images/background/pattern-7.png)"></div>
					<div class="inner-column titlt" data-tilt data-tilt-max="4">
						<div class="image wow fadeInRight" data-wow-delay="0ms" data-wow-duration="1500ms">
							<img src="images/resource/event.png" alt="" />
						</div>
					</div>
				</div>

			</div>

		</div>
	</section>
	<!-- End Event Section -->

	<!-- Testimonial Section Two -->
	<section class="testimonial-section-two style-two">
		<div class="circle-one paroller" data-paroller-factor="-0.20" data-paroller-factor-lg="0.20" data-paroller-type="foreground" data-paroller-direction="horizontal"></div>
		<div class="circle-two paroller" data-paroller-factor="0.20" data-paroller-factor-lg="-0.20" data-paroller-type="foreground" data-paroller-direction="horizontal"></div>
		<div class="pattern-layer-two" style="background-image:url(images/background/pattern-10.png)"></div>
		<div class="auto-container">
			<div class="inner-container">
				<div class="pattern-layer" style="background-image:url(images/background/pattern-9.png)"></div>
				<!-- Sec Title -->
				<div class="sec-title centered">
					<div class="title">Testimonial</div>
					<h2>Words From Customers</h2>
					<div class="text">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu <br> fugiat nulla pariatur Duis aute irure dolor in reprehenderit in</div>
				</div>
				<div class="testimonial-carousel-two owl-carousel owl-theme">

					<!-- Testimonial Block Two -->
					<div class="testimonial-block-two">
						<div class="inner-box">
							<div class="border-layer"></div>
							<div class="text">From exhibitions and dinners, to celebrations and conferences, the University of Bath is a great place to hold any event.</div>
							<div class="author-info">
								<div class="info-inner">
									<div class="author-image">
										<img src="images/resource/author-1.jpg" alt="" />
									</div>
									<h6>Mahfuz Riad</h6>
									<div class="designation">Online Teacher</div>
								</div>
							</div>
							<div class="quote-icon flaticon-quote-2"></div>
						</div>
					</div>

					<!-- Testimonial Block Two -->
					<div class="testimonial-block-two">
						<div class="inner-box">
							<div class="border-layer"></div>
							<div class="text">From exhibitions and dinners, to celebrations and conferences, the University of Bath is a great place to hold any event.</div>
							<div class="author-info">
								<div class="info-inner">
									<div class="author-image">
										<img src="images/resource/author-2.jpg" alt="" />
									</div>
									<h6>Shopnil mahadi</h6>
									<div class="designation">Online Teacher</div>
								</div>
							</div>
							<div class="quote-icon flaticon-quote-2"></div>
						</div>
					</div>

					<!-- Testimonial Block Two -->
					<div class="testimonial-block-two">
						<div class="inner-box">
							<div class="border-layer"></div>
							<div class="text">From exhibitions and dinners, to celebrations and conferences, the University of Bath is a great place to hold any event.</div>
							<div class="author-info">
								<div class="info-inner">
									<div class="author-image">
										<img src="images/resource/author-3.jpg" alt="" />
									</div>
									<h6>Alamin Sa</h6>
									<div class="designation">Online Teacher</div>
								</div>
							</div>
							<div class="quote-icon flaticon-quote-2"></div>
						</div>
					</div>

					<!-- Testimonial Block Two -->
					<div class="testimonial-block-two">
						<div class="inner-box">
							<div class="border-layer"></div>
							<div class="text">From exhibitions and dinners, to celebrations and conferences, the University of Bath is a great place to hold any event.</div>
							<div class="author-info">
								<div class="info-inner">
									<div class="author-image">
										<img src="images/resource/author-1.jpg" alt="" />
									</div>
									<h6>Mahfuz Riad</h6>
									<div class="designation">Online Teacher</div>
								</div>
							</div>
							<div class="quote-icon flaticon-quote-2"></div>
						</div>
					</div>

					<!-- Testimonial Block Two -->
					<div class="testimonial-block-two">
						<div class="inner-box">
							<div class="border-layer"></div>
							<div class="text">From exhibitions and dinners, to celebrations and conferences, the University of Bath is a great place to hold any event.</div>
							<div class="author-info">
								<div class="info-inner">
									<div class="author-image">
										<img src="images/resource/author-2.jpg" alt="" />
									</div>
									<h6>Shopnil mahadi</h6>
									<div class="designation">Online Teacher</div>
								</div>
							</div>
							<div class="quote-icon flaticon-quote-2"></div>
						</div>
					</div>

					<!-- Testimonial Block Two -->
					<div class="testimonial-block-two">
						<div class="inner-box">
							<div class="border-layer"></div>
							<div class="text">From exhibitions and dinners, to celebrations and conferences, the University of Bath is a great place to hold any event.</div>
							<div class="author-info">
								<div class="info-inner">
									<div class="author-image">
										<img src="images/resource/author-3.jpg" alt="" />
									</div>
									<h6>Alamin Sa</h6>
									<div class="designation">Online Teacher</div>
								</div>
							</div>
							<div class="quote-icon flaticon-quote-2"></div>
						</div>
					</div>

					<!-- Testimonial Block Two -->
					<div class="testimonial-block-two">
						<div class="inner-box">
							<div class="border-layer"></div>
							<div class="text">From exhibitions and dinners, to celebrations and conferences, the University of Bath is a great place to hold any event.</div>
							<div class="author-info">
								<div class="info-inner">
									<div class="author-image">
										<img src="images/resource/author-1.jpg" alt="" />
									</div>
									<h6>Mahfuz Riad</h6>
									<div class="designation">Online Teacher</div>
								</div>
							</div>
							<div class="quote-icon flaticon-quote-2"></div>
						</div>
					</div>

					<!-- Testimonial Block Two -->
					<div class="testimonial-block-two">
						<div class="inner-box">
							<div class="border-layer"></div>
							<div class="text">From exhibitions and dinners, to celebrations and conferences, the University of Bath is a great place to hold any event.</div>
							<div class="author-info">
								<div class="info-inner">
									<div class="author-image">
										<img src="images/resource/author-2.jpg" alt="" />
									</div>
									<h6>Shopnil mahadi</h6>
									<div class="designation">Online Teacher</div>
								</div>
							</div>
							<div class="quote-icon flaticon-quote-2"></div>
						</div>
					</div>

					<!-- Testimonial Block Two -->
					<div class="testimonial-block-two">
						<div class="inner-box">
							<div class="border-layer"></div>
							<div class="text">From exhibitions and dinners, to celebrations and conferences, the University of Bath is a great place to hold any event.</div>
							<div class="author-info">
								<div class="info-inner">
									<div class="author-image">
										<img src="images/resource/author-3.jpg" alt="" />
									</div>
									<h6>Alamin Sa</h6>
									<div class="designation">Online Teacher</div>
								</div>
							</div>
							<div class="quote-icon flaticon-quote-2"></div>
						</div>
					</div>

				</div>
			</div>
		</div>
	</section>

	<!-- Goal Section -->
	<section class="goal-section">
		<div class="pattern-layer-four" style="background-image:url(images/background/pattern-18.png)"></div>
		<div class="auto-container">
			<div class="row clearfix">

				<!-- Images Column -->
				<div class="images-column col-lg-6 col-md-12 col-sm-12">
					<div class="color-layer"></div>
					<div class="inner-column">
						<div class="pattern-layer" style="background-image:url(images/background/pattern-4.png)"></div>
						<div class="pattern-layer-two" style="background-image:url(images/background/pattern-17.png)"></div>
						<div class="image">
							<img src="images/resource/goal-1.jpg" alt="" />
						</div>
						<div class="image-two">
							<img src="images/resource/goal-2.jpg" alt="" />
						</div>
					</div>
				</div>

				<!-- Content Column -->
				<div class="content-column col-lg-6 col-md-12 col-sm-12">
					<div class="inner-column">
						<div class="pattern-layer-three" style="background-image:url(images/background/pattern-13.png)"></div>
						<div class="sec-title">
							<div class="title">Achieve Goals</div>
							<h2>Start To Success</h2>
							<div class="text">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur Duis aute irure dolor in</div>
						</div>

						<!-- Fact Counter -->
						<div class="fact-counter">
							<div class="row clearfix">

								<!-- Column -->
								<div class="column counter-column col-lg-6 col-md-6 col-sm-12">
									<div class="inner wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
										<div class="content">
											<div class="count-outer count-box">
												<span class="count-text" data-speed="3000" data-stop="36">0</span>+
											</div>
											<h4 class="counter-title">Over 35 Free Courses</h4>
										</div>
									</div>
								</div>

								<!-- Column -->
								<div class="column counter-column col-lg-6 col-md-6 col-sm-12">
									<div class="inner wow fadeInLeft" data-wow-delay="300ms" data-wow-duration="1500ms">
										<div class="content">
											<div class="count-outer count-box alternate">
												<span class="count-text" data-speed="5000" data-stop="34">0</span>
											</div>
											<h4 class="counter-title">Member State Associations</h4>
										</div>
									</div>
								</div>

								<!-- Column -->
								<div class="column counter-column col-lg-6 col-md-6 col-sm-12">
									<div class="inner wow fadeInLeft" data-wow-delay="600ms" data-wow-duration="1500ms">
										<div class="content">
											<div class="count-outer count-box">
												<span class="count-text" data-speed="2000" data-stop="15">0</span>k
											</div>
											<h4 class="counter-title">Over 19,000 High Schools</h4>
										</div>
									</div>
								</div>

								<!-- Column -->
								<div class="column counter-column col-lg-6 col-md-6 col-sm-12">
									<div class="inner wow fadeInLeft" data-wow-delay="900ms" data-wow-duration="1500ms">
										<div class="content">
											<div class="count-outer count-box">
												<span class="count-text" data-speed="3500" data-stop="20">0</span>m
											</div>
											<h4 class="counter-title">Over 11 million Students</h4>
										</div>
									</div>
								</div>

							</div>
						</div>

					</div>
				</div>

			</div>

		</div>
	</section>
	<!-- End Goal Section -->

	<!-- Skill Section -->
	<section class="skill-section">
		<div class="pattern-layer" style="background-image:url(images/background/pattern-8.png)"></div>
		<div class="auto-container">
			<div class="row clearfix">

				<!-- Skill Column -->
				<div class="skill-column col-lg-7 col-md-12 col-sm-12">
					<div class="inner-column">
						<!-- Sec Title -->
						<div class="sec-title">
							<div class="title">Our Status valu</div>
							<h2>Differentiate your classroom <br> What makes us special?</h2>
							<div class="text">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</div>
						</div>

						<!-- Skills -->
						<div class="skills">

							<!-- Skill Item -->
							<div class="skill-item">
								<div class="skill-header clearfix">
									<div class="skill-title">Joyful</div>
									<div class="skill-percentage">
										<div class="count-box">
											<span class="count-text" data-speed="2000" data-stop="90">0</span>%
										</div>
									</div>
								</div>
								<div class="skill-bar">
									<div class="bar-inner"><div class="bar progress-line" data-width="90"></div></div>
								</div>
							</div>

							<!-- Skill Item -->
							<div class="skill-item">
								<div class="skill-header clearfix">
									<div class="skill-title">Case Study success </div>
									<div class="skill-percentage"><div class="count-box"><span class="count-text" data-speed="2000" data-stop="95">0</span>%</div></div>
								</div>
								<div class="skill-bar">
									<div class="bar-inner"><div class="bar progress-line" data-width="95"></div></div>
								</div>
							</div>

							<!-- Skill Item -->
							<div class="skill-item">
								<div class="skill-header clearfix">
									<div class="skill-title">Engaging</div>
									<div class="skill-percentage"><div class="count-box"><span class="count-text" data-speed="2000" data-stop="75">0</span>%</div></div>
								</div>
								<div class="skill-bar">
									<div class="bar-inner"><div class="bar progress-line" data-width="75"></div></div>
								</div>
							</div>

						</div>

					</div>
				</div>

				<!-- Image Column -->
				<div class="image-column col-lg-5 col-md-12 col-sm-12">
					<div class="inner-column">
						<div class="circle-one"></div>
						<div class="circle-two"></div>
						<div class="image titlt" data-tilt data-tilt-max="4">
							<img src="images/resource/skill.png" alt="" />
						</div>
					</div>
				</div>

			</div>
		</div>
	</section>
	<!-- End Skill Section -->

	<!-- News Section -->
	<section class="news-section style-two">
		<div class="pattern-layer" style="background-image:url(images/background/pattern-11.png)"></div>
		<div class="outer-container">
			<!-- Sec Title -->
			<div class="sec-title centered">
				<div class="title">Artical</div>
				<h2>Latest articles & news</h2>
				<div class="text">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu <br> fugiat nulla pariatur Duis aute irure dolor in reprehenderit in</div>
			</div>
			<div class="inner-container">
				<div class="icon-layer-one" style="background-image:url(images/icons/icon-1.png)"></div>
				<div class="icon-layer-two" style="background-image:url(images/icons/icon-2.png)"></div>
				<div class="icon-layer-three" style="background-image:url(images/icons/icon-2.png)"></div>
				<div class="row clearfix">

					<!-- News Block / Style Two -->
					<div class="news-block style-two col-lg-4 col-md-6 col-sm-12">
						<div class="inner-box">
							<div class="image">
								<a href="#"><img src="images/resource/news-3.jpg" alt="" /></a>
							</div>
							<div class="lower-content">
								<div class="border-layer"></div>
								<ul class="post-info">
									<li>Technology</li>
									<li>Updated  Sep 26, 2020</li>
								</ul>
								<h4><a href="#">All The Security & Privacy <br> Updates From Amazon’s</a></h4>
								<a href="#" class="more">More <span class="fa fa-angle-double-right"></span></a>
							</div>
						</div>
					</div>

					<!-- News Block / Style Two -->
					<div class="news-block style-two col-lg-4 col-md-6 col-sm-12">
						<div class="inner-box">
							<div class="image">
								<a href="#"><img src="images/resource/news-4.jpg" alt="" /></a>
							</div>
							<div class="lower-content">
								<div class="border-layer"></div>
								<ul class="post-info">
									<li>Education</li>
									<li>Updated  Sep 26, 2020</li>
								</ul>
								<h4><a href="#">All The Security & Privacy Updates From Amazon’s</a></h4>
								<a href="#" class="more">More <span class="fa fa-angle-double-right"></span></a>
							</div>
						</div>
					</div>

					<!-- News Block / Style Two -->
					<div class="news-block style-two col-lg-4 col-md-6 col-sm-12">
						<div class="inner-box">
							<div class="image">
								<a href="#"><img src="images/resource/news-5.jpg" alt="" /></a>
							</div>
							<div class="lower-content">
								<div class="border-layer"></div>
								<ul class="post-info">
									<li>Education</li>
									<li>Updated  Sep 26, 2020</li>
								</ul>
								<h4><a href="#">All The Security & Privacy Updates From Amazon’s</a></h4>
								<a href="#" class="more">More <span class="fa fa-angle-double-right"></span></a>
							</div>
						</div>
					</div>

				</div>
			</div>
		</div>
	</section>
	<!-- End News Section -->

	<!-- Contact Section -->
	{{--<section class="contact-section">
		<div class="pattern-layer" style="background-image:url(images/background/pattern-19.png)"></div>
		<div class="pattern-layer-two" style="background-image:url(images/background/pattern-20.png)"></div>
		<div class="icon-layer-two" style="background-image:url(images/icons/icon-2.png)"></div>
		<div class="icon-layer-three" style="background-image:url(images/icons/icon-2.png)"></div>
		<div class="auto-container">
			<div class="row clearfix">

				<!-- Info Column -->
				<div class="info-column col-lg-4 col-md-12 col-sm-12">
					<div class="inner-column">
						<div class="icon-layer" style="background-image:url(images/icons/icon-2.png)"></div>
						<div class="image">
							<img src="images/resource/contact.png" alt="" />
						</div>
						<h5>Contact us</h5>
						<p>It is a long established fact that a reader will be distracted by the readable content of a page </p>
						<ul class="contact-list">
							<li>
								<strong>Phone:</strong>
								<a href="tel:+88-01682648101">+88 01682648101</a>
							</li>
							<li>
								<strong>Email:</strong>
								<a href="mailo:hello@lebari.com">hello@lebari.com</a>
							</li>
						</ul>
					</div>
				</div>

				<!-- Form Column -->
				<div class="form-column col-lg-8 col-md-12 col-sm-12">
					<div class="inner-column">
						<div class="color-layer"></div>
						<!-- Sec Title -->
						<div class="sec-title">
							<h2> Visit us <br> for Free Resources</h2>
							<div class="text">These leading universities are currently offering online degree courses on FutureLearn:</div>
						</div>

						<!-- Default Form -->
						<div class="default-form">
							<form method="post" action="http://themazine.com/html/Lebari/contact">
								<div class="row clearfix">

									<!-- Form Group -->
									<div class="form-group col-lg-6 col-md-6 col-sm-12">
										<input type="text" name="username" value="" placeholder="First Name" required>
									</div>

									<!-- Form Group -->
									<div class="form-group col-lg-6 col-md-6 col-sm-12">
										<input type="text" name="lastname" value="" placeholder="Last Name" required>
									</div>

									<!-- Form Group -->
									<div class="form-group col-lg-12 col-md-12 col-sm-12">
										<input type="email" name="email" value="" placeholder="Email" required>
									</div>

									<!-- Form Group -->
									<div class="form-group col-lg-12 col-md-12 col-sm-12">
										<select name="country" class="custom-select-box">
											<option>When you want to start courses</option>
											<option>courses 01</option>
											<option>courses 02</option>
											<option>courses 03</option>
											<option>courses 04</option>
										</select>
									</div>

									<!-- Form Group -->
									<div class="form-group col-lg-6 col-md-6 col-sm-12">
										<input type="text" name="date" value="" placeholder="Date" required>
									</div>

									<!-- Form Group -->
									<div class="form-group col-lg-6 col-md-6 col-sm-12">
										<input type="text" name="time" value="" placeholder="Time" required>
									</div>

									<!-- Form Group -->
									<div class="form-group col-lg-12 col-md-12 col-sm-12">
										<textarea placeholder="Type you comment here"></textarea>
									</div>

									<div class="form-group col-lg-12 col-md-12 col-sm-12">
										<button type="submit" class="theme-btn btn-style-one"><span class="txt">Submit</span></button>
									</div>
								</div>
							</form>
						</div>

					</div>
				</div>

			</div>
		</div>
	</section>--}}
	<!-- End Contact Section -->

		<!-- Newsletter Section Two -->
		<section class="newsletter-section-two">
			<div class="auto-container">
				<div class="inner-container">
					<div class="color-box"></div>
					<div class="icon-layer-one" style="background-image:url(images2/icons/pattern-12.png)"></div>
					<div class="icon-layer-two" style="background-image:url(images2/background/pattern-13.png)"></div>
					<div class="pattern-layer" style="background-image:url(images2/background/pattern-14.png)"></div>
					<div class="row clearfix">

						<!-- Form Column -->
						<div class="form-column col-lg-7 col-md-12 col-sm-12">
							<div class="inner-column">
								<div class="title-box">
									<h2>Signup to our newsletter</h2>
									<div class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed <br> do eiusmod tempor incididunt </div>
								</div>
								<!-- Newsletter Form -->
								<div class="newsletter-form-two">
									<form method="post" action="http://themazine.com/html/Lebari/contact">
										<div class="form-group">
											<span class="icon fa fa-envelope-o"></span>
											<input type="email" name="email" value="" placeholder="Enter your email address" required>
											<button type="submit" class="flaticon-next-2 submit-btn"></button>
										</div>
									</form>
								</div>
							</div>
						</div>

						<!-- Image Column -->
						<div class="image-column col-lg-5 col-md-12 col-sm-12">
							<div class="inner-column">
								<div class="image">
									<img src="images/newsletter.svg" alt="newsletter" />
								</div>
							</div>
						</div>

					</div>
				</div>
			</div>
		</section>
		<!-- End Newsletter Section Two -->

	<!-- Main Footer -->
	<footer class="main-footer">
		<div class="circle-layer"></div>
		<div class="pattern-layer-one" style="background-image: url(images/background/pattern-12.png)"></div>
		<div class="pattern-layer-two" style="background-image: url(images/background/pattern-13.png)"></div>
		<div class="pattern-layer-three" style="background-image: url(images/background/pattern-14.png)"></div>
		<div class="pattern-layer-four" style="background-image: url(images/background/pattern-13.png)"></div>
		<div class="auto-container">
			<!--Widgets Section-->
			<div class="widgets-section">
				<div class="row clearfix">

					<!-- Footer Column -->
					<div class="footer-column col-lg-5 col-md-12 col-sm-12">
						<div class="footer-widget logo-widget">
							<div class="logo">
								<a href="/"><img src="images/logo-alt.svg" alt="LazyCodeLab logo" /></a>
							</div>
							<ul class="info-list">
								<li>Email: <a href="mailto:hey@lazycodelab.com">hey@lazycodelab.com</a></li>
							</ul>
							<!-- Social Box -->
							<ul class="social-box">
								<li class="twitter"><a target="_blank" href="http://twitter.com/lazycodelab" class="fa fa-twitter"></a></li>
								<li class="instagram"><a target="_blank" href="http://instagram.com/lazycodelab" class="fa fa-instagram"></a></li>
								<li class="facebook"><a target="_blank" href="http://facebook.com/fbLazyCodeLab" class="fa fa-facebook-f"></a></li>
								<li class="linkedin"><a target="_blank" href="https://linkedin.com/company/lazycodelab" class="fa fa-linkedin"></a></li>
							</ul>
						</div>
					</div>

					<!-- Footer Column -->
					<div class="footer-column col-lg-7 col-md-12 col-sm-12">
						<div class="row clearfix">
							<!-- Column -->
							<div class="column col-lg-4 col-md-4 col-sm-12">
								<h5>About</h5>
								<ul class="list">
									<li><a href="#">About</a></li>
									<li><a href="#">News</a></li>
									<li><a href="#">Impact</a></li>
									<li><a href="#">Our team</a></li>
									<li><a href="#">Our interns</a></li>
								</ul>
							</div>
							<!-- Column -->
							<div class="column col-lg-4 col-md-4 col-sm-12">
								<h5>Need some help?</h5>
								<ul class="list">
									<li><a href="#">FAQs</a></li>
									<li><a href="#">Contact</a></li>
									<li><a href="#">About</a></li>
								</ul>
							</div>
						</div>
					</div>

				</div>
			</div>

			<!-- Footer Bottom -->
			<div class="footer-bottom">
				<div class="row clearfix">

					<!-- Copyright Column -->
					<div class="copyright-column col-lg-6 col-md-12 col-sm-12">
						<div class="copyright">Copyright 2021, All Right Reserved</div>
					</div>

					<!-- Nav Column -->
					<div class="nav-column col-lg-6 col-md-12 col-sm-12">
						<ul>
							<li><a href="about">SiteMap</a></li>
							<li><a href="about">Privacy Policy</a></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</footer>

</div>
<!--End pagewrapper-->

<!--Scroll to top-->
<div class="scroll-to-top scroll-to-target" data-target="html"><span class="fa fa-arrow-up"></span></div>

<script src="js/jquery.js"></script>
<script src="js/popper.min.js"></script>
<script src="js/bootstrap.min.js"></script>
<script src="js/jquery.mCustomScrollbar.concat.min.js"></script>
<script src="js/jquery.fancybox.js"></script>
<script src="js/appear.js"></script>
<script src="js/parallax.min.js"></script>
<script src="js/tilt.jquery.min.js"></script>
<script src="js/jquery.paroller.min.js"></script>
<script src="js/owl.js"></script>
<script src="js/wow.js"></script>
<script src="js/nav-tool.js"></script>
<script src="js/jquery-ui.js"></script>
<script src="js/script.js"></script>

</body>

</html>