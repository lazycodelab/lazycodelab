export default function NewsLetterSignUpForm() {
	return (
		<section className="newsletter-section-two">
			<div className="auto-container">
				<div className="inner-container">
					<div className="color-box"></div>
					<div className="icon-layer-one" style={{ backgroundImage: 'url(images2/icons/pattern-12.png)' }}></div>
					<div className="icon-layer-two" style={{ backgroundImage: 'url(images2/background/pattern-13.png)' }}></div>
					<div className="pattern-layer" style={{ backgroundImage: 'url(images2/background/pattern-14.png)' }}></div>
					<div className="row clearfix">

						<div className="form-column col-lg-7 col-md-12 col-sm-12">
							<div className="inner-column">
								<div className="title-box">
									<h2>Stay up-to-date with our newsletter</h2>
									<div className="text">Receive a weekly email with the latest update on our ongoing projects.</div>
								</div>
								<div className="newsletter-form-two">
									<form action="https://lazycodelab.us1.list-manage.com/subscribe/post?u=9bc3f4b0ae8a2d731b57dab51&amp;id=b1ee2da17e" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" noValidate>
										<div className="form-group">
											<span className="icon fa fa-envelope-o"></span>
											<input type="email" defaultValue="" name="EMAIL" placeholder="Enter your email address" id="mce-EMAIL" />
											<button type="submit" name="subscribe" className="flaticon-next-2 submit-btn" id="mc-embedded-subscribe"></button>
										</div>
										<div id="mce-responses" className="clear">
											<div className="response" id="mce-error-response" style={ { display: 'none' } }></div>
											<div className="response" id="mce-success-response" style={ { display: 'none' } }></div>
										</div>
										<div style={ { position: 'absolute', left: '-5000px' } } aria-hidden="true">
											<input type="text" name="b_9bc3f4b0ae8a2d731b57dab51_b1ee2da17e" tabIndex="-1" defaultValue="" />
										</div>
									</form>
								</div>
							</div>
						</div>

						<div className="image-column col-lg-5 col-md-12 col-sm-12">
							<div className="inner-column">
								<div className="image">
									<img src="images/newsletter.svg" alt="newsletter" />
								</div>
							</div>
						</div>

					</div>
				</div>
			</div>
		</section>
	)
}