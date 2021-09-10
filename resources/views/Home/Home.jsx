import NewsLetterSignUpForm from '../components/NewsletterSignUpForm'
import { generatePageTitle } from '../helpers/helpers.jsx'
import HeroSection from './sections/HeroSection'
import YouTubeSection from './sections/YouTubeSection'
import LatestProductsSection from './sections/LatestProductsSection'
import RecentBlogSection from './sections/RecentBlogsSection'
import SocialMediaSection from './sections/SocialMediaSection'
import UpcomingProjectsSection from './sections/UpcomingProjectsSection'

export default function Home() {
	generatePageTitle( 'Home' )

	return (
		<>
			<HeroSection />
			<YouTubeSection />
			<LatestProductsSection />
			<RecentBlogSection />
			<UpcomingProjectsSection />
			<SocialMediaSection />
			<NewsLetterSignUpForm />
		</>
	)
}
