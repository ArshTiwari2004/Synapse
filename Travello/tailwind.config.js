/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: [
	  "./index.html",
	  "./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
	  extend: {
		fontFamily: {
		  qwitcher: ['"Qwitcher Grypen"', 'cursive'],
		  caveat: ['"Caveat"', 'cursive'],
		  roboto: ['Roboto', 'sans-serif'],
		  playfair: ['Playfair Display', 'serif'],
		},
		// borderRadius: {
		//   lg: '12px', // Replacing variable with a static value for lg
		//   md: '10px', // Replacing variable with a static value for md
		//   sm: '8px',  // Replacing variable with a static value for sm
		// },
		colors: {
		  background: 'hsl(var(--background))',
		  foreground: 'hsl(var(--foreground))',
		  card: {
			DEFAULT: 'hsl(var(--card))',
			foreground: 'hsl(var(--card-foreground))',
		  },
		  popover: {
			DEFAULT: 'hsl(var(--popover))',
			foreground: 'hsl(var(--popover-foreground))',
		  },
		  primary: {
			DEFAULT: 'hsl(var(--primary))',
			foreground: 'hsl(var(--primary-foreground))',
		  },
		  secondary: {
			DEFAULT: 'hsl(var(--secondary))',
			foreground: 'hsl(var(--secondary-foreground))',
		  },
		  muted: {
			DEFAULT: 'hsl(var(--muted))',
			foreground: 'hsl(var(--muted-foreground))',
		  },
		  accent: {
			DEFAULT: 'hsl(var(--accent))',
			foreground: 'hsl(var(--accent-foreground))',
		  },
		  destructive: {
			DEFAULT: 'hsl(var(--destructive))',
			foreground: 'hsl(var(--destructive-foreground))',
		  },
		  border: 'hsl(var(--border))',
		  input: 'hsl(var(--input))',
		  ring: 'hsl(var(--ring))',
		  chart: {
			1: 'hsl(var(--chart-1))',
			2: 'hsl(var(--chart-2))',
			3: 'hsl(var(--chart-3))',
			4: 'hsl(var(--chart-4))',
			5: 'hsl(var(--chart-5))',
		  },
		  // Custom colors
		  'sky-blue': '#49c6e5',
		  'light-blue': '#54defd',
		  'off-white': '#fffbfa',
		  'teal-green': '#00bd9d',
		  'mint': '#8bd7d2',
		},
	  },
	},
	plugins: [require("tailwindcss-animate")],
  };
  