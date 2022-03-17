module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		fontFamily: {
			heading: ['"Josefin Sans", sans-serif'],
			text: ['"Source Sans Pro", sans-serif'],
			playfair: ['"Playfair Display", serif'],
		},
		extend: {
			colors: {
				'corn-blue': '#769EEB',
				'dark-corn-blue': '#274574',
				'eerie-black': '#1A1A1A',
				'almond-white': '#EAE0D5',
			},
			backgroundImage: {
				body: 'url(../public/images/bg-hexagons.svg)',
			},
		},
	},
	variants: {
		extend: {
			fill: ['hover', 'focus'],
		},
	},
	plugins: [],
}
