import { parseISO, format } from 'date-fns'

export default function Date({ className, dateString }) {
	const date = parseISO(dateString)
	return (
		<time className={`text-sm ${className}`} dateTime={dateString}>
			{format(date, 'LLLL	d, yyyy')}
		</time>
	)
}
