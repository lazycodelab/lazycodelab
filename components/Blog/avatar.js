import Image from 'next/image'

export default function Avatar({ author: { node } }) {
	const name = node
		? node.firstName && node.lastName
			? `${node.firstName} ${node.lastName}`
			: node.name
		: null

	return (
		<div className="flex items-center">
			<div className="relative mr-4 h-12 w-12">
				<Image
					src={node.avatar?.url}
					layout="fill"
					className="rounded-full"
					alt={name}
				/>
			</div>
			<div className="text-xl font-bold">{name}</div>
		</div>
	)
}
