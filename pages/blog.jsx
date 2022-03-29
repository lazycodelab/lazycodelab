import Head from 'next/head'
import MoreStories from '../components/Blog/MoreStories'
import Layout from '../components/Layout'
import { getAllPostsForHome } from '../lib/api'
import { SITE_NAME } from '../lib/constants'
import FeaturedPost from '../components/Blog/FeaturedPosts'

export default function Index({ allPosts: { edges }, preview }) {
	const featuredPosts = edges.slice(0, 3)
	const morePosts = edges.slice(3)

	return (
		<>
			<Layout>
				<Head>
					<title>{SITE_NAME} Blog</title>
				</Head>
				{featuredPosts && <FeaturedPost posts={featuredPosts} />}
				{morePosts.length > 0 && <MoreStories posts={morePosts} />}
			</Layout>
		</>
	)
}

export async function getStaticProps({ preview = false }) {
	const allPosts = await getAllPostsForHome(preview)

	return {
		props: { allPosts, preview },
	}
}
