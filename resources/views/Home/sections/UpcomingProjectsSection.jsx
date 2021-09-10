export default function UpcomingProjectsSection() {
	return (
		<section className="event-section">
			<div className="auto-container">
				<div className="row clearfix">
					<div className="content-column col-lg-6 col-md-12 col-sm-12">
						<div className="inner-column">
							<div className="sec-title">
								<div className="title">We are growing</div>
								<h2>Our Upcoming Projects</h2>
							</div>
							<div className="bold-text">A lot of new and exciting projects are coming soon. Game development, App development, Advanced web development, you name it.</div>
							<p>We are constantly working on various interesting projects for every developer out there. Our aim is to be one of the best resources for all kind of developers.</p>
							<div className="btn-box">
								<a href="#" className="theme-btn btn-style-one"><span className="txt">Keep me posted</span></a>
							</div>
						</div>
					</div>

					<div className="images-column col-lg-6 col-md-12 col-sm-12">
						<div className="background-layer-one" style={ { backgroundImage: 'url(images/background/pattern-7.png)' } }></div>
						<div className="inner-column titlt" data-tilt data-tilt-max="4">
							<div className="image wow fadeInRight" data-wow-delay="0ms" data-wow-duration="1500ms">
								<img src="images/upcoming-projects.svg" alt="Upcoming Projects" />
							</div>
						</div>
					</div>

				</div>

			</div>
		</section>
	)
}