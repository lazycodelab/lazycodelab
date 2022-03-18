import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
	render() {
		return (
			<Html lang="en">
				<Head />
				<body
					className="
					overflow-x-hidden
					bg-dark-corn-blue
					bg-body
					font-text
					text-almond-white
					antialiased
					selection:bg-indigo-400
					selection:text-purple-900"
				>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}
