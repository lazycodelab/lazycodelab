export default function Tags({ tags }) {
	return (
		<div className="mx-auto max-w-2xl">
			<p className="mt-8 flex flex-wrap text-sm font-bold md:text-lg">
				Tagged
				{tags.edges.map((tag, index) => (
					<span key={index} className="ml-4 font-normal">
						{tag.node.name}
					</span>
				))}
			</p>
		</div>
	)
}
