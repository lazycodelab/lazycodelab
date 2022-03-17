import Nav from './Nav'
import Logo from '../assets/images/Logo'

export default function Header() {
	return (
		<header className="border-b border-b-almond-white/10 py-5 backdrop-blur-sm">
			<div className="container mx-auto flex items-center ">
				<div className="w-20 max-w-xs flex-shrink-0">
					<a href="/" title="LazyCodeLab Home">
						<Logo className="fill-current text-almond-white transition-all hover:text-white" />
					</a>
				</div>
				<Nav />
			</div>
		</header>
	)
}
