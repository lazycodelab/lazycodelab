import HireIcon from '../../../assets/images/HireIcon'
import NeuralBrainIcon from '../../../assets/images/NeuralBrainIcon'

export default function HeroSection() {
	return (
		<section className="my-20 flex flex-col items-center justify-center md:my-32">
			<h1 className="mb-5 text-center font-heading text-7xl font-semibold leading-tight tracking-tight text-almond-white md:text-8xl lg:text-9xl">
				Programming. Simplified.
			</h1>
			<p className="px-16 text-center text-lg md:text-xl">
				Programming doesn&apos;t have to be complicated. We make it
				easier for everyone.
			</p>

			<div className="mt-14 flex space-x-5 md:mt-20">
				<a
					href="#"
					className="flex items-center justify-between rounded-xl bg-almond-white py-2 px-4 font-heading text-lg font-semibold text-eerie-black shadow-md transition-all hover:text-black hover:shadow-xl"
				>
					<span>Learn More</span>
					<NeuralBrainIcon className="ml-2 h-6 w-6 fill-current" />
				</a>
				<a
					href="#"
					className="flex items-center justify-between rounded-xl bg-eerie-black py-3 px-5 font-heading text-lg font-semibold text-almond-white shadow-md transition-all hover:text-white hover:shadow-xl"
				>
					<HireIcon className="mr-2 h-6 w-6 fill-current" />
					<span>Get Started</span>
				</a>
			</div>
		</section>
	)
}
