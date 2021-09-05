module.exports = {
	purge: [
		'./resources/**/*.blade.php',
		'./resources/**/*.js',
		'./resources/**/*.jsx',
	],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {},
		fontFamily: {
			primary: [ '"Playfair Display"', 'serif' ]
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
