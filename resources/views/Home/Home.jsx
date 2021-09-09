import NewsLetterSignUpForm from '../components/NewsletterSignUpForm'
import HeroSection from './local/HeroSection'
import { generatePageTitle } from '../helpers/helpers.jsx'

export default function Home() {
	generatePageTitle( 'Home' )

	return (
		<>
			<HeroSection />
			<NewsLetterSignUpForm />
		</>
	)
}
