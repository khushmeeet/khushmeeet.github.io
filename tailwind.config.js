/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: ['src/**/*.{njk,md,html}', 'src/**/*.svg'],
  darkMode: 'class',
  theme: {
    extend: {},
    fontFamily: {
      'berkeley': ['Berkeley Mono', 'monospace'],
      'ibm-plex': ['IBM Plex Mono', 'monospace']
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('autoprefixer')
  ],
}
