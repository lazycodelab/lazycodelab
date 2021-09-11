export default function SiteFooter() {
	return (
		<footer className="main-footer">
			<div className="circle-layer"></div>
			<div className="pattern-layer-one" style={ { backgroundImage: ' url(images/background/pattern-12.png)' } }></div>
			<div className="pattern-layer-two" style={ { backgroundImage: ' url(images/background/pattern-13.png)' } }></div>
			<div className="pattern-layer-three" style={ { backgroundImage: ' url(images/background/pattern-14.png)' } }></div>
			<div className="pattern-layer-four" style={ { backgroundImage: ' url(images/background/pattern-13.png)' } }></div>
			<div className="auto-container">
				<div className="widgets-section">
					<div className="row clearfix">
						<div className="footer-column col-lg-5 col-md-12 col-sm-12">
							<div className="footer-widget logo-widget">
								<div className="logo">
									<a href="/"><img src="images/logo-alt.svg" alt="LazyCodeLab logo" /></a>
								</div>
								<ul className="info-list">
									<li>Email: <a href="mailto:hey@lazycodelab.com">hey@lazycodelab.com</a></li>
								</ul>
								<ul className="social-box">
									<li className="twitter"><a target="_blank" href="http://twitter.com/lazycodelab" className="fa fa-twitter"></a></li>
									<li className="instagram"><a target="_blank" href="http://instagram.com/lazycodelab" className="fa fa-instagram"></a></li>
									<li className="facebook"><a target="_blank" href="http://facebook.com/fbLazyCodeLab" className="fa fa-facebook-f"></a></li>
									<li className="linkedin"><a target="_blank" href="https://linkedin.com/company/lazycodelab" className="fa fa-linkedin"></a></li>
								</ul>
							</div>
						</div>

						<div className="footer-column col-lg-7 col-md-12 col-sm-12">
							<div className="row clearfix">
								<div className="column col-lg-4 col-md-4 col-sm-12">
									<h5>About</h5>
									<ul className="list">
										<li><a href="#">About</a></li>
										<li><a href="#">News</a></li>
										<li><a href="#">Impact</a></li>
										<li><a href="#">Our team</a></li>
									</ul>
								</div>
								<div className="column col-lg-4 col-md-4 col-sm-12">
									<h5>Need some help?</h5>
									<ul className="list">
										<li><a href="#">FAQs</a></li>
										<li><a href="#">Contact</a></li>
										<li><a href="#">About</a></li>
									</ul>
								</div>
							</div>
						</div>

					</div>
				</div>

				<div className="footer-bottom">
					<div className="row clearfix">
						<div className="copyright-column col-lg-6 col-md-12 col-sm-12">
							<div className="copyright">&copy; LazyCodeLab { new Date().getFullYear() }, All rights reserved.</div>
						</div>
						<div className="nav-column col-lg-6 col-md-12 col-sm-12">
							<ul>
								<li><a href="about">SiteMap</a></li>
								<li><a href="about">Privacy Policy</a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}