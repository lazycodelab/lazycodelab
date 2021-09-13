import SiteMenu from './SiteMenu'

export default function SiteHeader() {
	return (
		<header className="flex bg-gray-300 items-center">
			<a href="/" className="flex items-center ml-1 text-4xl font-phenomena bg-pink-200 w-52">
				<img src="images/lcl-logo.svg" alt="" title="LazyCodeLab Logo" />
			</a>

			<SiteMenu />
		</header>
	)
}
