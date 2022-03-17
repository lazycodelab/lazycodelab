import HeartIcon from '../assets/images/HeartIcon'
import GetStartedSection from './Home/Sections/GetStartedSection'
import HeroSection from './Home/Sections/HeroSection'
import ServicesSection from './Home/Sections/ServicesSection'
import WhyUsSection from './Home/Sections/WhyUsSection'

export default function Main() {
	return (
		<main className="flex min-h-screen w-full flex-col">
			<HeroSection />
			<WhyUsSection />
			<div className="absolute -right-[300px] bottom-52 -z-10 h-[700px] w-[700px] rounded-full bg-purple-700 blur-3xl"></div>
			<ServicesSection />
			<GetStartedSection />
		</main>
	)
}
