import Preloader from './Components/Preloader'
import SiteHeader from './Components/SiteHeader'

export default function Home() {
	const Hero = () => {
		return (
			<div className="bg-yellow-100">
				<div className="container flex justify-between items-center mx-auto">
					<h1>Learn andsads sd  asdasd a earn, amiright, nigga text changefe?</h1>
					<img src="/images/vector-1.svg" alt="lol" />
				</div>
			</div>
		)
	}

	const Introduction = () => {
		return (
			<section class="banner-section-two">
				<div class="auto-container">
					<div class="pattern-layer-two" style="background-image: url(images/background/pattern-15.png)"></div>
					<div class="pattern-layer-three" style="background-image: url(images/main-slider/icon-2.png)"></div>
					<div class="row clearfix">

						<div class="content-column col-lg-6 col-md-12 col-sm-12">
							<div class="pattern-layer-one" style="background-image: url(images/main-slider/pattern-1.png)"></div>
							<div class="icon-layer-one" style="background-image: url(images/main-slider/icon-2.png)"></div>
							<div class="icon-layer-two" style="background-image: url(images/main-slider/pattern-2.png)"></div>
							<div class="icon-layer-three" style="background-image: url(images/main-slider/icon-1.png)"></div>
							<div class="icon-layer-four" style="background-image: url(images/icons/icon-3.png)"></div>
							<div class="icon-layer-five" style="background-image: url(images/icons/icon-4.png)"></div>
							<div class="inner-column">
								<div class="title">Learn latest skills</div>
								<h1>Build skills with <br /> courses flexible online <br /> courses</h1>
								<div class="btns-box">
									<a href="about.html" class="theme-btn btn-style-one"><span class="txt">Join For free</span></a>
								</div>
							</div>
						</div>

						<div class="image-column col-lg-6 col-md-12 col-sm-12">
							<div class="inner-column">
								<div class="image titlt" data-tilt data-tilt-max="4">
									<img src="images/main-slider/image-5.png" alt="" />
								</div>
							</div>
						</div>

					</div>
				</div>
			</section>
		)
	}

	return (
		<>
			<Preloader />
			<SiteHeader />
			<Hero />
			<Introduction />
		</>
	)
}
