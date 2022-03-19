const qualities = [
	{
		title: 'Quality Product',
		content:
			'Quality is always a priority for us. Our team is dedicated and passionate enough to always deliver quality product.',
	},
	{
		title: 'Timely Delivery',
		content:
			"It's crucial for us to deliver your product in timely manner and our team takes a great care of that. Always.",
	},
	{
		title: 'Quick Turnaround',
		content:
			'We ensure to finish and deliver your project as fast as possible without compromising the quality.',
	},
]

export default function WhyUsSection() {
	const Quality = ({ title, content }) => (
		<div className="w-full max-w-md">
			<div className="flex h-72 flex-grow flex-col items-center justify-center rounded-md bg-almond-white px-6 text-center shadow-lg md:px-10">
				<h3 className="mb-5 font-heading text-4xl font-bold md:mb-10">
					{title}
				</h3>
				<p>{content}</p>
			</div>
		</div>
	)
	return (
		<section className="container mx-auto flex flex-wrap justify-center gap-x-10 gap-y-10 px-6 text-eerie-black md:mt-32">
			{qualities.map((quality, idx) => (
				<Quality key={idx} {...quality} />
			))}
		</section>
	)
}
