import Head from 'next/head'
import { useEffect } from 'react'
import GetStartedSection from '../components/Home/Sections/GetStartedSection'
import HeroSection from '../components/Home/Sections/HeroSection'
import ServicesSection from '../components/Home/Sections/ServicesSection'
import WhyUsSection from '../components/Home/Sections/WhyUsSection'
import Layout from '../components/Layout'
import { SITE_NAME } from '../lib/constants'

export default function Index() {
	return (
		<>
			<Head>
				<title>{SITE_NAME} &mdash; Simplifying solutions</title>
			</Head>
			<Layout>
				<HeroSection />
				<WhyUsSection />
				<div className="absolute -z-10 h-72 w-72 rounded-full bg-purple-700 blur-3xl md:-right-[300px] md:bottom-52 md:h-[700px] md:w-[700px]"></div>
				<ServicesSection />
				<GetStartedSection />
			</Layout>
		</>
	)
}
