import Avatar from './avatar'
import Date from '../helpers/date'
import PostTitle from './post-title'
import Categories from './categories'
import CoverImage from './cover-image'

export default function PostHeader({
	title,
	coverImage,
	date,
	author,
	categories,
}) {
	return (
		<>
			<PostTitle>{title}</PostTitle>
			<div className="text-sm md:mb-12">
				Posted on <Date dateString={date} />{' '}
				<Categories categories={categories} />
			</div>
			<div className="mb-3 space-y-5 sm:mx-0 md:mb-8">
				<CoverImage title={title} coverImage={coverImage} />
				<Avatar author={author} />
			</div>
		</>
	)
}
