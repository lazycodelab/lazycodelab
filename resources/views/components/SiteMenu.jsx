import { Link } from 'react-router-dom'

export default function SiteMenu() {
	return (
		<ul className="navigation clearfix">
			<li><Link to="/">Home</Link></li>
			<li><Link to="/about">About</Link></li>
			<li><Link to="/blog">Blog</Link></li>
			<li><Link to="/contact">Contact</Link></li>
		</ul>
	)
}