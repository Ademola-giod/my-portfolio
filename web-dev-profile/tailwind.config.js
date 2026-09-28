/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx,html}",
    "./public/**/*.{html,js}"
  ],
  theme: {
    extend: {
      colors: {
        'bgColour' : '#11071F',
        'textColour' : '#F6EEDA',
        "coal" : "#394142",
        "midnight" : "#535D5E",
        "jet" : "#151A1F",
        "ebony" : "#272C2E",
        "black" : "#000000",
        
      }
    },
  },
  plugins: [],
}
