import React from 'react'
import {
	BrowserRouter as Router,
	Switch,
	Route
} from 'react-router-dom'
import SiteHeader from './components/SiteHeader'
import Preloader from './components/Preloader'
import Home from './home/Home'
import About from './about/About'
import Contact from './contact/Contact'
import NotFound from './errors/NotFound'
import SiteFooter from './components/SiteFooter'

export default function AppRouter() {
	return (
		<Router>
			<Preloader />
			<SiteHeader />

			<Switch>
				<Route exact path="/" component={ Home } />
				<Route path="/about" component={ About } />
				<Route path="/contact" component={ Contact } />
				<Route path="*" component={ NotFound } />
			</Switch>

			<SiteFooter />
		</Router>
	)
}

