import PostPreview from './post-preview'

export default function MoreStories({ posts }) {
	return (
		<section>
			<div className="container relative mx-auto mb-32 grid grid-cols-1 gap-y-20 divide-y divide-almond-white/20 before:absolute before:inset-x-0 before:inset-y-0 before:-z-10 before:h-full before:w-full before:rounded-md before:bg-slate-500/20 md:mt-32 md:max-w-5xl md:gap-8 md:px-20 md:py-10 lg:gap-x-32">
				{posts.map(({ node }) => (
					<PostPreview
						key={node.slug}
						title={node.title}
						coverImage={node.featuredImage?.node}
						date={node.date}
						author={node.author}
						slug={node.slug}
						excerpt={node.excerpt}
					/>
				))}
			</div>
		</section>
	)
}
