import ActiveLink from './ActiveLink'

export default ({ children, href }) => {
	return (
		<ActiveLink href={href}>
			<a className="relative duration-300 before:absolute before:-bottom-1.5 before:h-0.5 before:w-0 before:rounded-lg before:bg-violet-400 before:transition-all before:duration-300 hover:origin-left hover:text-violet-400 hover:before:w-full">
				{children}
			</a>
		</ActiveLink>
	)
}
