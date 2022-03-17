import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react'
import Header from '../components/Header'
import Main from '../components/Main'

export default function Home() {
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
	return (
		<>
			<Header />
			<Main />
		</>
	)
}
