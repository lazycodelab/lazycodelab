import Head from 'next/head'
import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import PostBody from '../../components/Blog/post-body'
import MoreStories from '../../components/Blog/MoreStories'
import PostHeader from '../../components/Blog/post-header'
import SectionSeparator from '../../components/Blog/section-separator'
import PostTitle from '../../components/Blog/post-title'
import Tags from '../../components/Blog/tags'
import Layout from '../../components/Layout'
import { getAllPostsWithSlug, getPostAndMorePosts } from '../../lib/api'
import { SITE_NAME } from '../../lib/constants'

export default function Post({ post, posts, preview }) {
	const router = useRouter()
	const morePosts = posts?.edges

	if (!router.isFallback && !post?.slug) {
		return <ErrorPage statusCode={404} />
	}

	return (
		<Layout>
			{router.isFallback ? (
				<PostTitle>Loading…</PostTitle>
			) : (
				<>
					<Head>
						<title>
							{post.title} &mdash; {SITE_NAME}
						</title>
						<meta
							property="og:image"
							content={post.featuredImage?.node.sourceUrl}
						/>
					</Head>
					<section className="mx-auto mt-16 max-w-7xl px-6 text-eerie-black md:mt-32">
						<article className="rounded-md bg-almond-white p-5 md:p-10">
							<PostHeader
								title={post.title}
								coverImage={post.featuredImage?.node}
								date={post.date}
								author={post.author}
								categories={post.categories}
							/>
							<PostBody content={post.content} />
							<footer>
								{post.tags.edges.length > 0 && (
									<Tags tags={post.tags} />
								)}
							</footer>
						</article>
					</section>
					<SectionSeparator />
					{morePosts.length > 0 && <MoreStories posts={morePosts} />}
				</>
			)}
		</Layout>
	)
}

export async function getStaticProps({ params, preview = false, previewData }) {
	const data = await getPostAndMorePosts(params.slug, preview, previewData)

	return {
		props: {
			preview,
			post: data.post,
			posts: data.posts,
		},
	}
}

export async function getStaticPaths() {
	const allPosts = await getAllPostsWithSlug()

	return {
		paths: allPosts.edges.map(({ node }) => `/blog/${node.slug}`) || [],
		fallback: true,
	}
}
