export default function HeroSection() {
	return (
		<section className="relative pt-28 pb-48">
			{/* use space utility maybe istead of gap */}
			<div className="absolute w-[410px] h-[436px] right-0 animate-floatY" style={ { backgroundImage: 'url(images/background/pattern-15.png)' } }></div>
			<div className="absolute w-5 h-5 right-36 top-56" style={ { backgroundImage: 'url(images/main-slider/icon-2.png)' } }></div>
			<div className="absolute w-[467px] h-[327px]" style={ { backgroundImage: 'url(images/main-slider/pattern-1.png)' } }></div>
			<div className="absolute w-5 h-5 top-56" style={ { backgroundImage: 'url(images/main-slider/icon-2.png)' } }></div>
			<div className="absolute w-24 h-20" style={ { backgroundImage: 'url(images/main-slider/pattern-2.png)' } }></div>
			<div className="absolute w-[195px] h-[109px]" style={ { backgroundImage: 'url(images/main-slider/icon-1.png)', zIndex: -1 } }></div>
			<div className="absolute w-[91px] h-[93px]" style={ { backgroundImage: 'url(images/icons/icon-3.png)', zIndex: -1 } }></div>

			<div className="relative container mx-auto flex gap-x-5">
				<div className="absolute w-[105px] h-[105px] left-[256px] bottom-[-60px]" style={ { backgroundImage: 'url(images/icons/icon-4.png)' } }></div>
				<div className="flex flex-col items-start justify-center gap-y-8">
					<h1 className="font-butler-bolder text-8xl text-purple-500 font-extrabold xl:w-2/3">Programming made easy.</h1>
					<p className="">Become a better developer no matter what programming language you use. Learn all the best resources, tips & tricks at LazyCodeLab.</p>
					<a href="#" className="block bg-green-500 text-base text-white py-4 px-14"><span className="">Learn More</span></a>
				</div>

				<div className="w-1/2" data-tilt data-tilt-max="4">
					<img src="images/developer-working.svg" alt="Developer Working" />
				</div>
			</div>
		</section>
	)
}