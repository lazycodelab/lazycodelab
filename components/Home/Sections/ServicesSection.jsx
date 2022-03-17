export default () => {
	return (
		<section className="relative mx-auto mt-32 grid w-full p-10 before:absolute before:inset-x-0 before:inset-y-0 before:-z-10 before:h-full before:w-full before:bg-slate-500/20">
			<h2 className="relative mx-auto mb-32 mt-10 inline-flex justify-center font-heading text-7xl font-bold before:absolute before:-bottom-1 before:h-1 before:w-1/2 before:rounded-lg before:bg-almond-white">
				Our Services
			</h2>
			<div className="mx-auto space-y-10">
				<div className="grid max-w-5xl grid-cols-2 gap-y-28 gap-x-5 rounded-xl bg-violet-300/20 p-10 transition-all hover:bg-violet-300/30">
					<div className="self-center">
						<h3 className="text-indigo-40s0 mb-10 font-playfair text-6xl font-medium italic">
							Web Design
						</h3>
						<p className="font-heading text-xl font-light tracking-wider">
							Lorem ipsum dolor sit, amet consectetur adipisicing
							elit. Sunt vitae eum debitis molestiae fugiat
							assumenda laboriosam laudantium alias? Dolore, sit!
						</p>
						<a
							href="#"
							className="mt-10 inline-flex rounded-md bg-violet-600 py-3 px-8 font-heading shadow-md transition-all hover:text-white"
						>
							Learn More
						</a>
					</div>
					<div className="">
						<img src="/images/services.svg" />
					</div>
				</div>
				<div className="grid max-w-5xl grid-cols-2 gap-y-28 gap-x-5 rounded-xl bg-violet-300/20 p-10 transition-all hover:bg-violet-300/30">
					<div className="">
						<img src="/images/services.svg" alt="Our services" />
					</div>
					<div className="self-center text-right">
						<h3 className="text-indigo-40s0 mb-10 font-playfair text-6xl font-medium italic">
							Web Design
						</h3>
						<p className="font-heading text-xl font-light tracking-wider">
							Lorem ipsum dolor sit, amet consectetur adipisicing
							elit. Sunt vitae eum debitis molestiae fugiat
							assumenda laboriosam laudantium alias? Dolore, sit!
						</p>

						<a
							href="#"
							className="mt-10 inline-flex rounded-md bg-violet-600 py-3 px-8 font-heading shadow-md transition-all hover:text-white"
						>
							Learn More
						</a>
					</div>
				</div>
				<div className="grid max-w-5xl grid-cols-2 gap-y-28 gap-x-5 rounded-xl bg-violet-300/20 p-10 transition-all hover:bg-violet-300/30">
					<div className="self-center">
						<h3 className="text-indigo-40s0 mb-10 font-playfair text-6xl font-medium italic">
							Web Design
						</h3>
						<p className="font-heading text-xl font-light tracking-wider">
							Lorem ipsum dolor sit, amet consectetur adipisicing
							elit. Sunt vitae eum debitis molestiae fugiat
							assumenda laboriosam laudantium alias? Dolore, sit!
						</p>
						<a
							href="#"
							className="mt-10 inline-flex rounded-md bg-violet-600 py-3 px-8 font-heading shadow-md transition-all hover:text-white"
						>
							Learn More
						</a>
					</div>
					<div className="">
						<img src="/images/services.svg" alt="Our services" />
					</div>
				</div>
			</div>

			<div className="absolute -left-[300px] bottom-52 -z-10 h-[700px] w-[700px] rounded-full bg-purple-700 blur-3xl"></div>
		</section>
	)
}
