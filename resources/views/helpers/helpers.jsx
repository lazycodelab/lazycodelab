import { useEffect } from 'react'

export const generatePageTitle = ( page ) => {
	useEffect( () => {
		document.title = 'LazyCodeLab - ' + page
	}, [] )
}