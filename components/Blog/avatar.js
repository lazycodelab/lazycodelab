import Image from 'next/image'

export default function Avatar({ author: { node } }) {
	const name = node
		? node.firstName && node.lastName
			? `${node.firstName} ${node.lastName}`
			: node.name
		: null

	return (
		<div className="flex items-center">
			<div className="relative mr-2 h-7 w-7">
				<Image
					src={node.avatar?.url}
					layout="fill"
					className="rounded-full"
					alt={name}
				/>
			</div>
			<div className="text-sm">{name}</div>
		</div>
	)
}
