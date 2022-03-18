import Footer from './Footer'
import Header from './Header'
import Meta from './meta'

export default function Layout({ children }) {
	return (
		<>
			<Meta />
			<Header />
			<main className="flex min-h-screen w-full flex-col">
				{children}
			</main>
			<Footer />
		</>
	)
}
