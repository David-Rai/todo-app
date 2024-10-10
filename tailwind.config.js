/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
colors:{
  navy:'#1C1C84',
  bgColor:"#D4C8B4",
  bgColor2:"#4C4B44"
},
fontFamily:{
  font1:"Roboto",
  font2: "Qwitcher Grypen",
  font3:"Updock",
  font4: "PT Sans Narrow"
}
      
    },
  },
  plugins: [],
}