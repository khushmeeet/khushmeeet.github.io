/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['src/**/*.{njk,md,html}', 'src/**/*.svg'],
  darkMode: 'class',
  theme: {
    extend: {},
    fontFamily: {
      'berkeley': ['Berkeley Mono', 'monospace'],
      'ibm-plex': ['IBM Plex Mono', 'monospace']
    }
  },
  plugins: [],
}
