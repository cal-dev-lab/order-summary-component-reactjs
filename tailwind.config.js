module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'white': 'hsl(0, 0%, 100%)',
      'pale-blue': 'hsl(225, 100%, 94%)',
      'bright-blue': 'hsl(245, 75%, 52%)',
      'very-pale-blue': 'hsl(225, 100%, 98%)',
      'desat-blue': 'hsl(224, 23%, 55%)',
      'dark-blue': 'hsl(223, 47%, 23%)',
    },
    extend: {
      fontFamily: {
        'rhd': ['"Red Hat Display"', 'sans'],
      },
    },
  },
  plugins: [],
}
