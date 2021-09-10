export default function YouTubeSection() {
	return (
		<section className="instructor-section">
			<div className="background-layer" style={{ backgroundImage: 'url(images/background/1.png)' }}></div>
			<div className="background-layer-one" style={{ backgroundImage: 'url(images/background/pattern-1.png)' }}></div>
			<div className="background-layer-two" style={{ backgroundImage: 'url(images/background/pattern-2.png)' }}></div>
			<div className="auto-container">
				<div className="row clearfix">
					<div className="blocks-column col-lg-8 col-md-12 col-sm-12">
						<div className="inner-column">
							<div className="row clearfix">
								<div className="service-block col-lg-6 col-md-6 col-sm-12">
									<div className="inner-box wow fadeInLeft video-responsive" data-wow-delay="0ms" data-wow-duration="1500ms">
										<div className="border-layer"></div>
										<iframe width="560" height="315" src="https://www.youtube.com/embed/Cj6HuupVgZU?controls=0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
									</div>
								</div>

								<div className="service-block col-lg-6 col-md-6 col-sm-12">
									<div className="inner-box wow fadeInLeft video-responsive" data-wow-delay="150ms" data-wow-duration="1500ms">
										<div className="border-layer"></div>
										<iframe width="560" height="315" src="https://www.youtube.com/embed/rOFmgbcMCDw?controls=0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="instructor-column col-lg-4 col-md-12 col-sm-12">
						<div className="inner-column wow fadeInRight" data-wow-delay="0ms" data-wow-duration="1500ms">
							<h4>Get a dose of YouTube</h4>
							<p>Top quality videos available for free on YouTube for you to get started with your programming journey.</p>
							<a className="click-here" target="_blank" href="https://www.youtube.com/channel/UCY94jgysTEMCSnNhoYSJy8Q?sub_confirmation=1">I want more</a>
							<div className="image titlt" data-tilt data-tilt-max="4">
								<img src="images/resource/instructor.png" alt="" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}