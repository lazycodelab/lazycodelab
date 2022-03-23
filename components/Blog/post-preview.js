import Avatar from './avatar'
import Date from '../helpers/date'
import CoverImage from './cover-image'
import Link from 'next/link'

export default function PostPreview({
	title,
	coverImage,
	date,
	excerpt,
	author,
	slug,
}) {
	return (
		<div className="pt-8">
			<div className="mb-5">
				{coverImage && (
					<CoverImage
						title={title}
						coverImage={coverImage}
						slug={slug}
					/>
				)}
			</div>
			<h3 className="mb-3 font-heading text-5xl font-semibold">
				<Link href={`/blog/${slug}`}>
					<a
						className="hover:text-white"
						dangerouslySetInnerHTML={{ __html: title }}
					/>
				</Link>
			</h3>
			<div className="flex items-center space-x-1">
				<Avatar author={author} />
				<span className="text-violet-400">&bull;</span>
				<Date className="text-sm" dateString={date} />
			</div>
			<div
				className="my-6 text-lg"
				dangerouslySetInnerHTML={{ __html: excerpt }}
			/>
		</div>
	)
}
