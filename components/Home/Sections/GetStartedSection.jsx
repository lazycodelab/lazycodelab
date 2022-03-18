export default function GetStartedSection() {
	return (
		<section className="container m-32 mx-auto lg:max-w-5xl">
			<h2 className="mb-10 text-center font-heading text-7xl font-bold lg:text-6xl">
				Let&apos;s Get Started
			</h2>
			<form className="flex flex-col items-center">
				<fieldset className="flex w-full items-center justify-between space-x-5">
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
