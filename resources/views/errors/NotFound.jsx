import { generatePageTitle } from '../helpers/helpers.jsx'

export default function NotFound() {
	generatePageTitle( '404 Not Found' )

	return (
		<h1>404 my dude</h1>
	)
}