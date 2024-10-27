module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF5722', // Vibrant color for buttons or highlights
        secondary: '#FFC107', // Accent color
        background: '#FAFAFA', // Light background color
        darkText: '#212121', // For darker text sections
        lightText: '#757575', // Muted text for subtle sections
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // For a clean, modern look
        display: ['Playfair Display', 'serif'], // For headings, recipe titles, etc.
      },
      spacing: {
        18: '4.5rem', // Custom spacing for padding or margins
        22: '5.5rem',
      },
    },
  },
  plugins: [],
}