/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			azul_oscuro: '#212529',
  			blanco_claro: '#F8F9FA',
  			azul_oscuro_claro: '#343A40',
  			gris_claro: '#E9ECEF',
  			naranja: '#FB8500',
  			amarillo: '#FCA311',
			rojo : "#E63946",
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
		keyframes : {
			typing: {
				"0%": {
				  width: "0%",
				  visibility: "hidden"
				},
				"100%": {
				  width: "100%"
				}  
			  },
			  blink: {
				"50%": {
				  borderColor: "transparent"
				},
				"100%": {
				  borderColor: "white"
				}  
			  }
		},
		animation : {
			typing: "typing 2s steps(20) infinite alternate, blink .7s infinite"
		}
  	}
  },
  plugins: [
    function ({addUtilities}) {
      const extendUnderline={
        '.underline':{
          'textDecoration' : 'underline',
          'text-decoration-color' : '#FB8500'
        }
      }
      addUtilities(extendUnderline)
    },
      require("tailwindcss-animate")
],
};
