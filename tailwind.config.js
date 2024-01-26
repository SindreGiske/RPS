/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      keyframes: {
        "Lshoot":{
          "0%": {
            translate: "-200px 500px", rotate: "45deg" },
          "100%": {
            translate: "0px 0px", rotate: "0deg" },
        },
        "Rshoot":{
          "0%": {
            translate: "200px 500px", rotate: "-45deg" },
          "100%": {
            translate: "0px 0px", rotate: "0deg" },
      },
    },

    animation: {
      'LShoot': 'Lshoot ease 1s forwards',
      'RShoot': 'Rshoot ease 1s forwards',
    },
    
  },
  plugins: [],
},
}