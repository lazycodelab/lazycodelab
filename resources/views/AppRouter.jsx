import React from 'react'
import {
	BrowserRouter as Router,
	Route
} from 'react-router-dom'
import SiteHeader from './components/SiteHeader'
import Preloader from './components/Preloader'
import Home from './Home/Home'
import About from './About'

export default function AppRouter() {
	return (
		<Router>
			<Preloader />
			<SiteHeader />

			<Route exact path="/" component={ Home } />
			<Route exact path="/about" component={ About } />
		</Router>
	)
}

