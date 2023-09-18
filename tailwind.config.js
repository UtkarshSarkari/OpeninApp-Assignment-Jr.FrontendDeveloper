/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ghostwhite: "#f8faff",
        white: "#fff",
        black: "#000",
        "secondary-text": "#858585",
        "lightgray": "#b0b0b0",
        link: "#346bd4",
        darkgray: "#999",
        bg1:"#f8faff",
        bg2: "#f5f5f5",
        bg3: "#eaeaea",
        bgSubmit: "#4285f4"
      },
      spacing: {},
      fontFamily: {
        poppins: "Poppins",
        lato: "Lato",
        montserrat: "Montserrat",
        "opensans": "Open Sans",
        figtree: "Figtree"
      },
      borderRadius: {
        xl: "20px",
      },
      screens: {
        'max-xs': '320px',
        'xs': '370px',
        'sm': '420px',
        'md': '765px',
        'lg': '1020px',
        'xl': '1440px',
        '2xl': '1790px',
        'max-xl': '2560px'
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
