import { Link } from 'react-router-dom'
import { generatePageTitle } from '../helpers/helpers.jsx'

export default function NotFound() {
	generatePageTitle( '404 Not Found' )

	return (
		<>
			<section className="contact-banner-section">
				<div className="pattern-layer-one" style={ { backgroundImage: 'url(images/icons/icon-5.png)' } }></div>
				<div className="pattern-layer-two" style={ { backgroundImage: 'url(images/icons/icon-6.png)' } }></div>
				<div className="pattern-layer-three" style={ { backgroundImage: 'url(images/icons/icon-4.png)' } }></div>
				<div className="auto-container">
					<ul className="page-breadcrumb">
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>404</li>
					</ul>
					<div className="content-box">
						<h2>Not Found</h2>
					</div>
				</div>
			</section>

			<section className="error-section">
				<div className="pattern-layer-three" style={ { backgroundImage: 'url(images/icons/icon-8.png)' } }></div>
				<div className="auto-container">
					<div className="content">
						<div className="pattern-layer-one" style={ { backgroundImage: 'url(images/icons/icon-9.png)' } }></div>
						<div className="color-layer"></div>
						<div className="image">
							<img src="images/resource/error-image.png" alt="" />
						</div>
						<h1>404</h1>
						<h3>Page Not Found</h3>
						<div className="text">Something must've broken. We're looking into it.</div>
					</div>
				</div>
			</section>
		</>
	)
}