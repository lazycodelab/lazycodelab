module.exports = {
	mode: 'jit',
	purge: [
		'./resources/**/*.blade.php',
		'./resources/**/*.js',
		'./resources/**/*.jsx',
	],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			fontFamily: {
				'phenomena': [ 'Phenomena, serif' ],
				'lora': [ 'Lora, serif' ],
				'butler': [ 'Butler, serif' ],
				'butler-bolder': [ 'Butler Bolder, serif' ],
			},
			keyframes: {
				floatY: {
					'0%, 100%': {
						transform: 'translateY(0px)'
					},
					'50%': {
						transform: 'translateY(30px)'
					}
				}
			},
			animation: {
				floatY: 'floatY 5s linear infinite'
			}
		},
		fontFamily: {
			primary: [ '"Playfair Display"', 'serif' ]
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
