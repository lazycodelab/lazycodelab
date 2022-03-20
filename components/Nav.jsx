import Logo from '../assets/images/Logo'
import ActiveLink from './helpers/ActiveLink'
import Link from './helpers/Link'

export default function Nav() {
	return (
		<>
			<nav className="mx-auto hidden max-w-7xl flex-1 items-center justify-center space-x-10 text-center text-xl text-almond-white md:flex">
				<Link href="/blog">Blog PC</Link>
				<div className="w-14 max-w-xs flex-shrink-0 md:w-16">
					<ActiveLink href="/">
						<a title="LazyCodeLab Home">
							<Logo className="fill-current text-almond-white transition-all hover:text-white" />
						</a>
					</ActiveLink>
				</div>
				<Link href="/services">Get Started</Link>
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
