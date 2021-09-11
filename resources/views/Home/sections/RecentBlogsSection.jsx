export default function RecentBlogSection() {
	return (
		<section className="news-section style-two">
			<div className="pattern-layer" style={ { backgroundImage: 'url(images/background/pattern-11.png)' } }></div>
			<div className="outer-container">
				<div className="sec-title centered">
					<div className="title">Good Read</div>
					<h2>Recent Blog Posts</h2>
					<div className="text">Well written, easy to digest articles.</div>
				</div>
				<div className="inner-container">
					<div className="icon-layer-one" style={ { backgroundImage: 'url(images/icons/icon-1.png)' } }></div>
					<div className="icon-layer-two" style={ { backgroundImage: 'url(images/icons/icon-2.png)' } }></div>
					<div className="icon-layer-three" style={ { backgroundImage: 'url(images/icons/icon-2.png)' } }></div>
					<div className="row clearfix">
						<div className="news-block style-two col-lg-4 col-md-6 col-sm-12">
							<div className="inner-box">
								<div className="image">
									<a href="#"><img src="images/placeholder-blog-1.png" alt="" /></a>
								</div>
								<div className="lower-content">
									<div className="border-layer"></div>
									<ul className="post-info">
										<li>JavaScript</li>
										{/*<li>Updated  Sep 26, 2020</li>*/}
									</ul>
									<h4><a href="#">Amazing blog title 1</a></h4>
									<a href="#" className="more">More <span className="fa fa-angle-double-right"></span></a>
								</div>
							</div>
						</div>

						<div className="news-block style-two col-lg-4 col-md-6 col-sm-12">
							<div className="inner-box">
								<div className="image">
									<a href="#"><img src="images/placeholder-blog-2.png" alt="" /></a>
								</div>
								<div className="lower-content">
									<div className="border-layer"></div>
									<ul className="post-info">
										<li>Unreal 5 EA2</li>
										{/*<li>Updated  Sep 26, 2020</li>*/}
									</ul>
									<h4><a href="#">Amazing blog title 2</a></h4>
									<a href="#" className="more">More <span className="fa fa-angle-double-right"></span></a>
								</div>
							</div>
						</div>

						<div className="news-block style-two col-lg-4 col-md-6 col-sm-12">
							<div className="inner-box">
								<div className="image">
									<a href="#"><img src="images/placeholder-blog-3.png" alt="" /></a>
								</div>
								<div className="lower-content">
									<div className="border-layer"></div>
									<ul className="post-info">
										<li>Python</li>
										{/*<li>Updated  Sep 26, 2020</li>*/}
									</ul>
									<h4><a href="#">Amazing blog title 3</a></h4>
									<a href="#" className="more">More <span className="fa fa-angle-double-right"></span></a>
								</div>
							</div>
						</div>

					</div>
				</div>
				<div className="coming-soon"></div>
			</div>
		</section>
	)
}