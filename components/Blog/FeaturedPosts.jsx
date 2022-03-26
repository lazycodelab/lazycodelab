import Avatar from './avatar'
import Date from '../helpers/date'
import Link from 'next/link'
import CoverImage from './cover-image'

export default function FeaturedPosts({ posts }) {
	const FeaturedPostElm = ({
		title,
		coverImage,
		date,
		excerpt,
		author,
		slug,
	}) => {
		return (
			<div className="rounded-lg bg-almond-white p-5 shadow-md hover:shadow-lg">
				{coverImage && (
					<CoverImage
						title={title}
						coverImage={coverImage}
						slug={slug}
					/>
				)}
				<div className="mt-2 flex items-center space-x-1 text-eerie-black">
					<Avatar author={author} />
					<span className="text-indigo-400">&bull;</span>
					<Date dateString={date} />
				</div>

				<h3 className="mt-6 mb-4 font-heading text-xl font-semibold text-dark-corn-blue md:text-4xl">
					<Link href={`/blog/${slug}`}>
						<a
							className="hover:underline"
							dangerouslySetInnerHTML={{ __html: title }}
						/>
					</Link>
				</h3>

				<div
					className="mb-4 text-base leading-relaxed text-eerie-black"
					dangerouslySetInnerHTML={{ __html: excerpt }}
				/>
			</div>
		)
	}

	return (
		<section className="md:max-w-8xl container mx-auto md:mt-28">
			<h3 className="font-playfair italic md:mb-16 md:text-6xl">
				Featured posts
			</h3>
			<div className="grid grid-cols-3 gap-x-10 px-10">
				{posts.map(({ node }) => (
					<FeaturedPostElm
						key={node.slug}
						title={node.title}
						coverImage={node.featuredImage?.node}
						date={node.date}
						excerpt={node.excerpt}
						author={node.author}
						slug={node.slug}
					/>
				))}
			</div>
		</section>
	)
}
