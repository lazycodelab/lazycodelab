export default function PostBody({ content }) {
	return (
		<div
			className="text-base leading-loose tracking-wide md:text-lg"
			dangerouslySetInnerHTML={{ __html: content }}
		/>
	)
}
