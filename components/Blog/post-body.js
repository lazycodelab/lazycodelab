export default function PostBody({ content }) {
	return (
		<div className="mx-auto max-w-2xl">
			<div dangerouslySetInnerHTML={{ __html: content }} />
		</div>
	)
}
