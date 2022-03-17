export default function Nav() {
	return (
		<nav className="mx-auto flex max-w-7xl flex-1 justify-center space-x-10 text-xl text-almond-white">
			<a
				href="/blogs"
				className="relative duration-300 before:absolute before:-bottom-1.5 before:h-0.5 before:w-0 before:rounded-lg before:bg-violet-400 before:transition-all before:duration-300 hover:origin-left hover:text-violet-400 hover:before:w-full"
			>
				Blog
			</a>
			<a
				href="#"
				className="relative duration-300 before:absolute before:-bottom-1.5 before:h-0.5 before:w-0 before:rounded-lg before:bg-violet-400 before:transition-all before:duration-300 hover:origin-left hover:text-violet-400 hover:before:w-full"
			>
				Services
			</a>
			<a
				href="#"
				className="relative duration-300 before:absolute before:-bottom-1.5 before:h-0.5 before:w-0 before:rounded-lg before:bg-violet-400 before:transition-all before:duration-300 hover:origin-left hover:text-violet-400 hover:before:w-full"
			>
				Portfolio
			</a>
			<a
				href="#"
				className="relative duration-300 before:absolute before:-bottom-1.5 before:h-0.5 before:w-0 before:rounded-lg before:bg-violet-400 before:transition-all before:duration-300 hover:origin-left hover:text-violet-400 hover:before:w-full"
			>
				About
			</a>
		</nav>
	)
}
