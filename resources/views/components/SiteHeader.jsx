import SiteMenu from './SiteMenu'

export default function SiteHeader() {
	return (
		<header className="main-header header-style-two">
			<div className="header-upper">
				<div className="outer-container clearfix">
					<div className="pull-left logo-box">
						<div className="logo"><a href="/"><img src="images/logo.svg" alt="" title="LazyCodeLab Logo" /></a></div>
					</div>

					<div className="nav-outer clearfix">
						<div className="mobile-nav-toggler"><span className="icon flaticon-menu"></span></div>
						<nav className="main-menu navbar-expand-md">
							<div className="navbar-header">
								<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
									<span className="icon-bar"></span>
									<span className="icon-bar"></span>
									<span className="icon-bar"></span>
								</button>
							</div>

							<div className="navbar-collapse collapse clearfix" id="navbarSupportedContent">
								<SiteMenu />
							</div>
						</nav>
					</div>

				</div>
			</div>

			<div className="sticky-header">
				<div className="auto-container clearfix">
					<div className="logo pull-left">
						<a href="index" title=""><img src="images/logo.svg" alt="" title="" /></a>
					</div>

					<div className="pull-right">
						<nav className="main-menu">
						</nav>

						<div className="outer-box clearfix">
						</div>

					</div>
				</div>
			</div>

			<div className="mobile-menu">
				<div className="menu-backdrop"></div>
				<div className="close-btn"><span className="icon flaticon-multiply"></span></div>

				<nav className="menu-box">
					<div className="nav-logo"><a href="index"><img src="images/logo.svg" alt="" title="" /></a></div>
					<div className="menu-outer"></div>
				</nav>
			</div>
		</header>
	)
}
