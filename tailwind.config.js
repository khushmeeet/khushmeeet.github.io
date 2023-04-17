/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["src/**/*.{njk,md,html}", "src/**/*.svg"],
  theme: {
    extend: {},
    fontFamily: {
      'mono': ["Berkeley Mono", "monospace"],
    }
  },
  plugins: [],
}

