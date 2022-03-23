export default function PostBody({ content }) {
	return (
		<div
			className="leading-loose tracking-wide"
			dangerouslySetInnerHTML={{ __html: content }}
		/>
	)
}
