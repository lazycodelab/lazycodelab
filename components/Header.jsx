import Nav from './Nav'
import Logo from '../assets/images/Logo'
import ActiveLink from './helpers/ActiveLink'

export default function Header() {
	return (
		<header className="border-b border-b-almond-white/10 py-5 backdrop-blur-sm">
			<div className="mx-auto flex w-full items-center px-6 md:container">
				<div className="w-14 max-w-xs flex-shrink-0 md:w-20">
					<ActiveLink href="/">
						<a title="LazyCodeLab Home">
							<Logo className="fill-current text-almond-white transition-all hover:text-white" />
						</a>
					</ActiveLink>
				</div>
				<Nav />
			</div>
		</header>
	)
}
