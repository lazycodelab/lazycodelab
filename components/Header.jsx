import Nav from './Nav'
import Logo from '../assets/images/Logo'
import ActiveLink from './helpers/ActiveLink'

export default function Header() {
	return (
		<header className="border-b border-b-almond-white/10 py-3 backdrop-blur-sm md:py-5">
			<div className="mx-auto flex w-full items-center px-10 md:container">
				<div className="w-20 max-w-xs flex-shrink-0">
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
