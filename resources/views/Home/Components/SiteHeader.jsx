export default function SiteHeader() {
	return (
		<header className="main-header header-style-two">
			{/* Header-Upper */ }
			<div className="header-upper">
				<div className="outer-container clearfix">

					<div className="pull-left logo-box">
						<div className="logo">
							<a href="index.html">
								<img src="images/logo-2.png" alt="" title="" />
							</a>
						</div>
					</div>

					<div className="nav-outer clearfix">
						{/* Mobile Navigation Toggler */ }
						<div className="mobile-nav-toggler"><span className="icon flaticon-menu"></span></div>
						{/* Main Menu */ }
						<nav className="main-menu navbar-expand-md">
							<div className="navbar-header">
								{/* Toggle Button */ }
								<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
									<span className="icon-bar"></span>
									<span className="icon-bar"></span>
									<span className="icon-bar"></span>
								</button>
							</div>

							<div className="navbar-collapse collapse clearfix" id="navbarSupportedContent">
								<ul className="navigation clearfix">
									<li className="current dropdown"><a href="#"><span data-hover="Home">Home</span></a>
										<ul>
											<li><a href="index.html">Home page 01</a></li>
											<li><a href="index-2.html">Home page 02</a></li>
											<li><a href="index-3.html">Home page 03 <span className="new-page">New</span></a></li>
											<li className="dropdown">
												<a href="#">Header styles</a>
												<ul>
													<li><a href="index.html">Header Style 01</a></li>
													<li><a href="index-2.html">Header Style 02</a></li>
													<li><a href="index-3.html">Header Style 03 <span class="new-page">New</span></a></li>
												</ul>
											</li>
										</ul>
									</li>
									<li className="dropdown"><a href="#">About</a>
										<ul>
											<li><a href="about.html">About Us</a></li>
											<li><a href="faq.html">Faq</a></li>
											<li><a href="teacher.html">Teacher</a></li>
											<li><a href="profile.html">User Profile</a></li>
											<li><a href="membership.html">Membership</a></li>
										</ul>
									</li>
									<li className="dropdown"><a href="#">Courses</a>
										<ul>
											<li><a href="course.html">Courses</a></li>
											<li><a href="course-2.html">Courses 02</a></li>
											<li><a href="course-3.html">Courses 03</a></li>
											<li><a href="course-4.html">Courses 04</a></li>
											<li><a href="course-detail.html">Courses Detail</a></li>
										</ul>
									</li>
									<li className="dropdown"><a href="#">Blog</a>
										<ul>
											<li><a href="blog.html">Our Blog</a></li>
											<li><a href="blog-list.html">Blog List</a></li>
											<li><a href="blog-detail.html">Blog Detail</a></li>
											<li><a href="not-found.html">Not Found</a></li>
										</ul>
									</li>
									<li><a href="contact.html">Contact</a></li>
									<li><a href="donation.html">Donation</a></li>
								</ul>
							</div>
						</nav>

						{/* Main Menu End */ }
						<div className="outer-box clearfix">

							{/* Search */ }
							<div className="search-box">
								<form method="post" action="#">
									<div className="form-group">
										<input type="search" name="search-field" value="" placeholder="Online course" required />
										<button type="submit"><span class="icon fa fa-search"></span></button>
									</div>
								</form>
							</div>

							{/* Cart Box */ }
							<div className="cart-box">
								<div className="dropdown">
									<button className="cart-box-btn dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span className="flaticon-shopping-bag-1"></span><span className="total-cart">2</span></button>
									<div className="dropdown-menu pull-right cart-panel" aria-labelledby="dropdownMenu1">

										<div className="cart-product">
											<div className="inner">
												<div className="cross-icon"><span className="icon fa fa-remove"></span></div>
												<div className="image"><img src="images/resource/post-thumb-1.jpg" alt="" /></div>
												<h3><a href="shop-single.html">Product 01</a></h3>
												<div className="quantity-text">Quantity 1</div>
												<div className="price">$99.00</div>
											</div>
										</div>
										<div className="cart-product">
											<div className="inner">
												<div className="cross-icon"><span className="icon fa fa-remove"></span></div>
												<div className="image"><img src="images/resource/post-thumb-2.jpg" alt="" /></div>
												<h3><a href="shop-single.html">Product 02</a></h3>
												<div className="quantity-text">Quantity 1</div>
												<div className="price">$99.00</div>
											</div>
										</div>
										<div className="cart-total">Sub Total: <span>$198</span></div>
										<ul className="btns-boxed">
											<li><a href="shoping-cart.html">View Cart</a></li>
											<li><a href="checkout.html">CheckOut</a></li>
										</ul>

									</div>
								</div>
							</div>

							{/* Nav Btn */ }
							<div className="nav-btn navSidebar-button"><span className="icon flaticon-menu-4"></span></div>

						</div>
					</div>

				</div>
			</div >
			{/* End Header Upper */ }

			{/* Sticky Header */ }
			<div className="sticky-header">
				<div className="auto-container clearfix">
					{/* Logo */ }
					<div className="logo pull-left">
						<a href="index.html" title=""><img src="images/logo.png" alt="" title="" /></a>
					</div>
					{/* Right Col */ }
					<div className="pull-right">
						{/* Main Menu */ }
						<nav className="main-menu">
							{/* Keep This Empty / Menu will come through Javascript */ }
						</nav>
						{/* Main Menu End */ }
						{/* Main Menu End */ }
						<div className="outer-box clearfix">

						</div>

					</div>
				</div>
			</div>
			{/* End Sticky Menu */ }

			{/* Mobile Menu */ }
			<div className="mobile-menu">
				<div className="menu-backdrop"></div>
				<div className="close-btn"><span className="icon flaticon-multiply"></span></div>

				<nav className="menu-box">
					<div className="nav-logo"><a href="index.html"><img src="images/logo.png" alt="" title="" /></a></div>
					<div className="menu-outer">
						{/* Here Menu Will Come Automatically Via Javascript / Same Menu as in Header */ }
					</div>
				</nav>
			</div>
			{/* End Mobile Menu */ }

		</header >
	)
}
