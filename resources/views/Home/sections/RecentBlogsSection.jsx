export default function RecentBlogSection() {
	return (
		<section className="news-section style-two">
			<div className="pattern-layer" style={ { backgroundImage: 'url(images/background/pattern-11.png)' } }></div>
			<div className="outer-container">
				<div className="sec-title centered">
					<div className="title">Artical</div>
					<h2>Latest articles & news</h2>
					<div className="text">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu <br /> fugiat nulla pariatur Duis aute irure dolor in reprehenderit in</div>
				</div>
				<div className="inner-container">
					<div className="icon-layer-one" style={ { backgroundImage: 'url(images/icons/icon-1.png)' } }></div>
					<div className="icon-layer-two" style={ { backgroundImage: 'url(images/icons/icon-2.png)' } }></div>
					<div className="icon-layer-three" style={ { backgroundImage: 'url(images/icons/icon-2.png)' } }></div>
					<div className="row clearfix">
						<div className="news-block style-two col-lg-4 col-md-6 col-sm-12">
							<div className="inner-box">
								<div className="image">
									<a href="#"><img src="images/resource/news-3.jpg" alt="" /></a>
								</div>
								<div className="lower-content">
									<div className="border-layer"></div>
									<ul className="post-info">
										<li>Technology</li>
										<li>Updated  Sep 26, 2020</li>
									</ul>
									<h4><a href="#">All The Security & Privacy <br /> Updates From Amazon’s</a></h4>
									<a href="#" className="more">More <span className="fa fa-angle-double-right"></span></a>
								</div>
							</div>
						</div>

						<div className="news-block style-two col-lg-4 col-md-6 col-sm-12">
							<div className="inner-box">
								<div className="image">
									<a href="#"><img src="images/resource/news-4.jpg" alt="" /></a>
								</div>
								<div className="lower-content">
									<div className="border-layer"></div>
									<ul className="post-info">
										<li>Education</li>
										<li>Updated  Sep 26, 2020</li>
									</ul>
									<h4><a href="#">All The Security & Privacy Updates From Amazon’s</a></h4>
									<a href="#" className="more">More <span className="fa fa-angle-double-right"></span></a>
								</div>
							</div>
						</div>

						<div className="news-block style-two col-lg-4 col-md-6 col-sm-12">
							<div className="inner-box">
								<div className="image">
									<a href="#"><img src="images/resource/news-5.jpg" alt="" /></a>
								</div>
								<div className="lower-content">
									<div className="border-layer"></div>
									<ul className="post-info">
										<li>Education</li>
										<li>Updated  Sep 26, 2020</li>
									</ul>
									<h4><a href="#">All The Security & Privacy Updates From Amazon’s</a></h4>
									<a href="#" className="more">More <span className="fa fa-angle-double-right"></span></a>
								</div>
							</div>
						</div>

					</div>
				</div>
			</div>
		</section>
	)
}