export default function LatestProductsSection() {
	return (
		<section className="professional-section">
			<div className="background-layer-one" style={ { backgroundImage: 'url(images/background/pattern-5.png)' } }></div>
			<div className="auto-container">
				<div className="row clearfix">
					<div className="images-column col-lg-6 col-md-12 col-sm-12">
						<div className="inner-column">
							<div className="pattern-layer" style={{ backgroundImage: 'url(images/background/pattern-3.png)' } }></div>
							<div className="pattern-layer-two" style={{ backgroundImage: 'url(images/background/pattern-4.png)' } }></div>
							<div className="color-layer"></div>
							<div className="color-layer-two"></div>
							<div className="image wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
								<img src="images/resource/professional.jpg" alt="" />
							</div>
						</div>
					</div>

					<div className="content-column col-lg-6 col-md-12 col-sm-12">
						<div className="inner-column">
							<div className="pattern-layer-three" style={{ backgroundImage: 'url(images/background/pattern-16.png)' } }></div>
							<div className="sec-title">
								<div className="title">Our latest work</div>
								<h2>This is what we've been working on</h2>
							</div>
							<div className="bold-text">Kurve is a great WordPress plugin. You should download it, honestly.</div>
							<p>Learn the best practices out there to become a better programmer. Get to know some neat tip and tricks that you could use to save time and efforts in your next big thing.</p>
							<div className="btn-box">
								<a href="#" className="theme-btn btn-style-four"><span className="txt">Know More</span></a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}