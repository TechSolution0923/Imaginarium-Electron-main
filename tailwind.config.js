module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        "1/10": "10%",
        "1/15": "15%",
      },
      height: {
        18: "4.5rem",
      },
      colors: {
        "neutral-830": "#161616",
        "neutral-840": "#111111",
        "neutral-850": "#0E0E0E",
        "thead-row": "#5F5F5F",
        "black-rgba": "rgba(55 , 65 , 81, 1)",
        "blue-rgba-24": "rgba(29, 174, 255, 0.24)",
        "blue-rgba-30": "rgba(29, 174, 255, 0.3)",
        "blue-rgba-65": "rgba(29, 174, 255, 0.65)",
        "progress-bar": "rgba(29, 174, 255, 0.15)",
      },
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
      '4xl': '2304px',
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [
    require("daisyui"),
    require("tailwind-scrollbar-hide"),
    require("@tailwindcss/forms"),
  ],
};
