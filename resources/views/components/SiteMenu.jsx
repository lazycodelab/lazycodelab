import { Link } from 'react-router-dom'

export default function SiteMenu() {
	return (
		<nav className="mx-auto space-x-4 text-xl">
			<Link to="/">Home</Link>
			<Link to="/about">About</Link>
			<Link to="/blog">Blog</Link>
			<Link to="/contact">Contact</Link>
		</nav>
	)
}