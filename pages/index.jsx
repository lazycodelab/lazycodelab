import Head from 'next/head'
import GetStartedSection from '../components/Home/Sections/GetStartedSection'
import HeroSection from '../components/Home/Sections/HeroSection'
import ServicesSection from '../components/Home/Sections/ServicesSection'
import WhyUsSection from '../components/Home/Sections/WhyUsSection'
import Layout from '../components/layout'

export default () => {
	return (
		<>
			<Layout>
				<Head>
					<title>Layouts Example ss</title>
				</Head>
				<HeroSection />
				<WhyUsSection />
				<div className="absolute -right-[300px] bottom-52 -z-10 h-[700px] w-[700px] rounded-full bg-purple-700 blur-3xl"></div>
				<ServicesSection />
				<GetStartedSection />
			</Layout>
		</>
	)
}
