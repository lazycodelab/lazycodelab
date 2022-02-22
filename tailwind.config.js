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
			colors: {
				primary: '#51538C'
			},
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
				},
				floatX: {
					'0%, 100%': {
						transform: 'translateX(-100px)'
					},
					'50%': {
						transform: 'translateX(100px)'
					}
				},
			},
			animation: {
				spinSlow: 'spin 15s linear infinite',
				floatY: 'floatY 5s linear infinite',
				floatX: 'floatX 5s linear infinite',
				floatXSlow: 'floatX 15s linear infinite',
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
