export default function YouTubeSection() {
	// maybe use Youtube api to fetch latest videos.
	return (
		<section className="relative">
			<div className="absolute w-full h-full" style={ { backgroundImage: 'url(images/background/1.png)' } }></div>
			{/*<div className="absolute w-full h-full" style={ { backgroundImage: 'url(images/background/pattern-1.png)' } }></div>
			<div className="absolute w-full h-full" style={ { backgroundImage: 'url(images/background/pattern-2.png)' } }></div>*/}

			<div className="relative container mx-auto flex space-x-20">
				<div className="flex space-x-5">
					<div className="rotate-2 bg-gray-100 rounded-md p-4 hover:rotate-0 transition-all duration-150" data-wow-delay="0ms" data-wow-duration="1500ms">
						<iframe className="rounded-md shadow-md -rotate-2 hover:rotate-0 duration-500" width="560" height="315" src="https://www.youtube.com/embed/Cj6HuupVgZU?controls=0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
					</div>

					<div className="rotate-2 bg-gray-100 rounded-md p-4 hover:rotate-0 transition-all duration-150" data-wow-delay="150ms" data-wow-duration="1500ms">
						<iframe className="rounded-md shadow-md -rotate-2 hover:rotate-0 duration-500" width="560" height="315" src="https://www.youtube.com/embed/rOFmgbcMCDw?controls=0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
					</div>
				</div>

				<div className="bg-white p-5 border-2 border-dashed wow fadeInRight" data-wow-delay="0ms" data-wow-duration="1500ms">
					<h4>Get a dose of YouTube</h4>
					<p>Top quality videos available for free on YouTube for you to get started with your programming journey.</p>
					<a className="rounded-sm bg-red-300 text-base text-white py-2 px-8" target="_blank" href="https://www.youtube.com/channel/UCY94jgysTEMCSnNhoYSJy8Q?sub_confirmation=1">I want more</a>
					<div className="image titlt" data-tilt data-tilt-max="4">
						<img src="images/resource/instructor.png" alt="" />
					</div>
				</div>
			</div>
		</section>
	)
}