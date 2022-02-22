import SiteMenu from './SiteMenu'

export default function SiteHeader() {
	return (
		<header className="bg-gray-50 drop-shadow-sm py-5 px-28">
			<div className="mx-auto flex justify-between items-center">
				<a href="/" className="flex items-center ml-1 text-4xl font-phenomena w-52">
					<img src="images/lcl-logo.svg" alt="" title="LazyCodeLab Logo" />
				</a>

				<SiteMenu />
			</div>
		</header>
	)
}
