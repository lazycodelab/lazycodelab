import HireIcon from '../../../assets/images/HireIcon'
import NeuralBrainIcon from '../../../assets/images/NeuralBrainIcon'

export default function HeroSection() {
	return (
		<section className="my-20 flex flex-col items-center justify-center px-6 md:my-32">
			<h1 className="mb-5 flex flex-col text-center font-heading font-bold leading-tight tracking-tight text-almond-white md:text-8xl md:font-semibold lg:text-9xl">
				<span className="text-7xl">Web Dev.</span>
				<span className="text-6xl">Simplified.</span>
			</h1>
			<p className="text-center text-lg md:px-16 md:text-xl">
				Programming doesn&apos;t have to be complicated. We make it
				easier for everyone.
			</p>

			<div className="mt-14 flex gap-5 md:mt-20">
				<a
					href="#"
					className="flex items-center justify-between rounded-xl bg-almond-white p-4 font-heading text-base font-semibold text-eerie-black shadow-md transition-all hover:text-black hover:shadow-xl md:text-lg"
				>
					<span>Learn More</span>
					<NeuralBrainIcon className="ml-2 h-6 w-6 fill-current" />
				</a>
				<a
					href="#"
					className="flex items-center justify-between rounded-xl bg-eerie-black p-4 font-heading text-base font-semibold text-almond-white shadow-md transition-all hover:text-white hover:shadow-xl md:text-lg"
				>
					<HireIcon className="mr-2 h-6 w-6 fill-current" />
					<span>Get Started</span>
				</a>
			</div>
		</section>
	)
}
