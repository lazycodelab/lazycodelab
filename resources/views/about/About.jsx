import { useEffect } from 'react'
import { generatePageTitle } from '../helpers/helpers.jsx'

export default function About() {
	generatePageTitle( 'About' )

	return <h1>About page</h1>
}