export default function HeroSection() {
	return (
		<section className="banner-section-two">
			<div className="auto-container">
				<div className="pattern-layer-two" style={{ backgroundImage: 'url(images/background/pattern-15.png)' }}></div>
				<div className="pattern-layer-three" style={{ backgroundImage: 'url(images/main-slider/icon-2.png)' }}></div>
				<div className="row clearfix">

					<div className="content-column col-lg-6 col-md-12 col-sm-12">
						<div className="pattern-layer-one" style={{ backgroundImage: 'url(images/main-slider/pattern-1.png)' }}></div>
						<div className="icon-layer-one" style={{ backgroundImage: 'url(images/main-slider/icon-2.png)' }}></div>
						<div className="icon-layer-two" style={{ backgroundImage: 'url(images/main-slider/pattern-2.png)' }}></div>
						<div className="icon-layer-three" style={{ backgroundImage: 'url(images/main-slider/icon-1.png)' }}></div>
						<div className="icon-layer-four" style={{ backgroundImage: 'url(images/icons/icon-3.png)' }}></div>
						<div className="icon-layer-five" style={{ backgroundImage: 'url(images/icons/icon-4.png)' }}></div>
						<div className="inner-column">
							<div className="title">Learn best practices</div>
							<h1>Be better at programming</h1>
							<div className="btns-box">
								<a href="about" className="theme-btn btn-style-one"><span className="txt">Learn More</span></a>
							</div>
						</div>
					</div>

					<div className="image-column col-lg-6 col-md-12 col-sm-12">
						<div className="inner-column">
							<div className="image titlt" data-tilt data-tilt-max="4">
								<img src="images/vector-1.svg" alt="vector-1" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}