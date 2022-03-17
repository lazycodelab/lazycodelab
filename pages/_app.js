import { useEffect } from 'react'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
	useEffect(() => {
		document
			.querySelector('body')
			.classList.add(
				'antialiased',
				'overflow-x-hidden',
				'bg-dark-corn-blue',
				'bg-body',
				'text-almond-white',
				'font-text',
				'selection:bg-indigo-400',
				'selection:text-purple-900'
			)
	})
	return <Component {...pageProps} />
}

export default MyApp
