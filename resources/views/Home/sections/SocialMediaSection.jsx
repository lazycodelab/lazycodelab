export default function SocialMediaSection() {
	return (
		<section className="courses-section">
			<div className="auto-container">
				<div className="inner-container">
					<div className="sec-title centered">
						<div className="title">Lazy but Social</div>
						<h2>Get to know us better</h2>
						<div className="text">Get to know what LazyCodeLab is upto</div>
					</div>
					<div className="row clearfix">
						<a href="https://www.facebook.com/fbLazyCodeLab">
							<div className="course-block-two col-lg-4 col-md-6 col-sm-12">
								<div className="inner-box wow fadeInLeft animated" data-wow-delay="0ms" data-wow-duration="1500ms" title="We know it's very low but we aren't giving up!">
									<div className="icon flaticon-homework"></div>
									<h5>Facebook</h5>
									<div className="numbers">01</div>
								</div>
							</div>
						</a>

						<div className="course-block-two col-lg-4 col-md-6 col-sm-12">
							<div className="inner-box wow fadeInUp animated" data-wow-delay="0ms" data-wow-duration="1500ms">
								<div className="icon flaticon-calendar"></div>
								<h5>Instagram</h5>
								<div className="numbers">03</div>
							</div>
						</div>

						<div className="course-block-two col-lg-4 col-md-6 col-sm-12">
							<div className="inner-box wow fadeInRight animated" data-wow-delay="0ms" data-wow-duration="1500ms">
								<div className="icon flaticon-customer"></div>
								<h5>Twitter</h5>
								<div className="numbers">60</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}