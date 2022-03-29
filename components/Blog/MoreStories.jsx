import PostPreview from './post-preview'

export default function MoreStories({ posts }) {
	return (
		<section className="container relative mx-auto mb-32 mt-8 grid grid-cols-1 gap-y-5 divide-y divide-almond-white/20 px-6 before:absolute before:inset-x-0 before:inset-y-0 before:-z-10 before:h-full before:w-full before:rounded-md before:bg-slate-500/20 sm:mt-16 sm:gap-y-10 md:mt-32 md:max-w-7xl md:gap-8 md:gap-y-20 md:px-20 md:py-10 lg:gap-x-32">
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
		</section>
	)
}
