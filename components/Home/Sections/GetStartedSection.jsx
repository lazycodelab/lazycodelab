import { useState } from 'react'

export default function GetStartedSection() {
	const [message, setMessage] = useState()
	const [hasError, setHasError] = useState(false)
	const handleGetStartedForm = (ev) => {
		ev.preventDefault()
		const email = ev.target.email.value
		const name = ev.target.name.value

		fetch('/api/mail', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email,
				name,
			}),
		})
			.then((response) => response.json())
			.then((result) => {
				if (!result.success) {
					setHasError(true)
				} else {
					setHasError(false)
				}
				setMessage(result.msg)
			})
	}

	return (
		<section className="my-16 w-full px-10 md:my-32" id="get-started">
			<h2 className="mb-10 text-center font-heading text-5xl font-bold md:text-7xl">
				Let&apos;s Get Started
			</h2>
			<form
				className="flex flex-col items-center md:mx-auto md:max-w-xl"
				onSubmit={handleGetStartedForm}
			>
				<fieldset className="flex w-full flex-wrap items-center justify-between gap-5">
					<input
						type="email"
						name="email"
						id="email"
						placeholder="Email address"
						className="w-full rounded-md p-3 font-heading text-dark-corn-blue transition-all focus:outline-none focus:ring-2 focus:ring-almond-white focus:ring-offset-2 focus:ring-offset-dark-corn-blue"
						required
					/>
					<input
						type="text"
						name="name"
						id="name"
						placeholder="Full name"
						className="w-full rounded-md p-3 font-heading text-dark-corn-blue transition-all focus:outline-none focus:ring-2 focus:ring-almond-white focus:ring-offset-2 focus:ring-offset-dark-corn-blue"
					/>
				</fieldset>

				<button
					type="submit"
					className="mt-5 flex items-center rounded-md bg-violet-600 py-4 px-10 font-heading text-base leading-none shadow-md transition-all hover:text-white"
				>
					Submit
				</button>
				{message && (
					<span
						className={`mt-5 text-sm italic ${
							hasError ? 'text-red-300' : 'text-green-300'
						}`}
					>
						{message}
					</span>
				)}
			</form>
		</section>
	)
}
