import Head from 'next/head'
import MoreStories from '../components/Blog/more-stories'
import HeroPost from '../components/Blog/hero-post'
import Layout from '../components/Layout'
import { getAllPostsForHome } from '../lib/api'
import { SITE_NAME } from '../lib/constants'

export default function Index({ allPosts: { edges }, preview }) {
	const heroPost = edges[0]?.node
	const morePosts = edges.slice(1)

	return (
		<>
			<Layout>
				<Head>
					<title>{SITE_NAME} Blog</title>
				</Head>
				{heroPost && (
					<HeroPost
						title={heroPost.title}
						coverImage={heroPost.featuredImage?.node}
						date={heroPost.date}
						author={heroPost.author}
						slug={heroPost.slug}
						excerpt={heroPost.excerpt}
					/>
				)}
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
