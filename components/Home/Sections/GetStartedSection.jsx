export default function GetStartedSection() {
	return (
		<section
			className="my-16 w-full px-10 md:my-32 md:mx-auto md:max-w-5xl"
			id="get-started"
		>
			<h2 className="mb-10 text-center font-heading text-5xl font-bold md:text-7xl">
				Let&apos;s Get Started
			</h2>
			<form className="flex flex-col items-center">
				<fieldset className="flex w-full flex-wrap items-center justify-between gap-5">
					<input
						type="email"
						name="email"
						id="email"
						placeholder="Email address"
						className="w-full rounded-md p-3"
					/>
					<input
						type="text"
						name="name"
						id="name"
						placeholder="Full name"
						className="w-full rounded-md p-3"
					/>
				</fieldset>

				<button
					type="submit"
					className="mt-5 rounded-md bg-indigo-700 px-5 py-3 font-heading"
				>
					Let&apos;s Do It
				</button>
			</form>
		</section>
	)
}
