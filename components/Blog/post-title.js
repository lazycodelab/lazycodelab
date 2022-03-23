export default function PostTitle({ children }) {
	return (
		<h1
			className="mb-4 text-center font-heading text-5xl font-semibold md:text-left md:text-6xl lg:text-7xl"
			dangerouslySetInnerHTML={{ __html: children }}
		/>
	)
}
