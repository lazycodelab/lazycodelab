import Logo from '../assets/images/Logo'
import ActiveLink from './helpers/ActiveLink'
import Link from './helpers/Link'

export default function Nav() {
	// @todo: streamline this.
	const scroll = (section) => {
		const anchor = document.querySelector('#' + section)
		anchor.scrollIntoView({
			behavior: 'smooth',
		})
	}

	return (
		<>
			<nav className="mx-auto hidden max-w-7xl flex-1 items-center justify-center space-x-10 text-center text-xl text-almond-white md:flex">
				<Link href="/blog">Blog</Link>
				<div className="w-14 max-w-xs flex-shrink-0 md:w-16">
					<ActiveLink href="/">
						<a title="LazyCodeLab Home">
							<Logo className="fill-current text-almond-white transition-all hover:text-white" />
						</a>
					</ActiveLink>
				</div>
				{/* @todo: fix this styling logic */}
				<button
					onClick={() => scroll('get-started')}
					className="relative duration-300 before:absolute before:-bottom-1.5 before:h-0.5 before:w-0 before:rounded-lg before:bg-violet-400 before:transition-all before:duration-300 hover:origin-left hover:text-violet-400 hover:before:w-full"
				>
					Get Started
				</button>
			</nav>
			<nav className="mx-auto flex max-w-7xl flex-1 items-center justify-center space-x-10 text-center text-xl text-almond-white md:hidden">
				{/*<Link href="/blog">Blog</Link>*/}
				<div className="w-14 max-w-xs flex-shrink-0 md:w-16">
					<ActiveLink href="/">
						<a title="LazyCodeLab Home">
							<Logo className="fill-current text-almond-white transition-all hover:text-white" />
						</a>
					</ActiveLink>
				</div>
				{/*<Link href="/services">Get Started</Link>*/}
				{/* Show mobile nav */}
			</nav>
		</>
	)
}
