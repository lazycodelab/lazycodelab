import HireIcon from '../../../assets/images/HireIcon'
import NeuralBrainIcon from '../../../assets/images/NeuralBrainIcon'

export default () => {
	return (
		<section className="flex flex-col items-center justify-center py-32">
			<h1 className="mb-5 text-center font-heading text-9xl font-semibold leading-tight tracking-tight text-almond-white md:text-8xl">
				Programming. Simplified.
			</h1>
			<p className="text-xl">
				Programming doesn't have to be complicated. We make it easier
				for everyone.
			</p>

			<div className="mt-20 flex space-x-5">
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
					<HireIcon />
					<span>Get Started</span>
				</a>
			</div>
		</section>
	)
}
