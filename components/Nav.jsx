import Link from './helpers/Link'

export default function Nav() {
	return (
		<nav className="mx-auto flex max-w-7xl flex-1 justify-center space-x-10 text-xl text-almond-white">
			<Link href="/blogs">Blogs</Link>
			<Link href="/services">Services</Link>
			{/* Show mobile nav */}
		</nav>
	)
}
