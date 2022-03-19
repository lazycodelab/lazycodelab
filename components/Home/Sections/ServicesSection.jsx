import Programming from '../../../assets/images/Programming'
import ProudCode from '../../../assets/images/ProudCode'
import Services from '../../../assets/images/Services'
import WPService from '../../../assets/images/WPService'

const services = [
	{
		title: 'Web Design',
		content:
			'We are a team of professional web designers and developers who offer website designing services for small to medium-sized businesses as well as for individuals like you.',
		image: <Services className="w-full" />,
	},
	{
		title: 'WordPress Dev',
		content:
			"We're here to help you with all your WordPress needs, whether you need a custom plugin, custom theme or some assistance with your existing website.",
		image: <Programming className="w-full" />,
	},
	{
		title: 'Custom Solution',
		content:
			'We can provide custom-made, tailored solution for you or your business. We ensure that the website is built upto your expectations  all the latest trends in web development.',
		image: <ProudCode />,
	},
]

export default function ServicesSection() {
	const Service = ({ index, title, content, ...props }) => {
		const isEven = index % 2 == 0

		return (
			<div className="grid max-w-5xl gap-x-5 rounded-xl bg-violet-300/20 p-10 transition-all hover:bg-violet-300/30 md:min-h-[450px] md:grid-cols-2 md:gap-y-28">
				{!isEven && (
					<div className="hidden md:block">{props.image}</div>
				)}
				<div className="self-center">
					<h3 className="mb-10 font-playfair text-6xl font-medium italic">
						{title}
					</h3>
					<p className="font-heading text-xl font-light tracking-wider">
						{content}
					</p>
					{props.hasCTA && (
						<a
							href="#"
							className="mt-10 inline-flex rounded-md bg-violet-600 py-3 px-8 font-heading shadow-md transition-all hover:text-white"
						>
							Learn More
						</a>
					)}
				</div>
				{isEven && <div className="hidden md:block">{props.image}</div>}
			</div>
		)
	}

	return (
		<section className="relative mx-auto mt-32 grid w-full p-10 before:absolute before:inset-x-0 before:inset-y-0 before:-z-10 before:h-full before:w-full before:bg-slate-500/20">
			<h2 className="relative mx-auto mb-32 mt-10 inline-flex justify-center font-heading text-7xl font-bold before:absolute before:-bottom-1 before:h-1 before:w-1/2 before:rounded-lg before:bg-almond-white">
				Our Services
			</h2>
			<div className="mx-auto space-y-10">
				{services.map((service, idx) => (
					<Service key={idx} index={idx} {...service} />
				))}
			</div>

			<div className="absolute -left-[300px] bottom-52 -z-10 h-[700px] w-[700px] rounded-full bg-purple-700 blur-3xl"></div>
		</section>
	)
}
