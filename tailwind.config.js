/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        teal: colors.teal,
        cyan: colors.cyan,
      },
      backgroundImage: {
        "red-img":
          'url("https://www.timeshighereducation.com/student/sites/default/files/moscow_state_university.jpg")',
        "yellow-img":
          'url("https://d36tnp772eyphs.cloudfront.net/blogs/1/2020/09/shutterstock_1494805574.jpg")',
        "green-img":
          'url("https://wander-lush.org/wp-content/uploads/2022/07/Most-beautiful-universities-in-Europe-DP-agneskantaruk-Krakow-Poland.jpg")',
        "blue-img":
          'url("https://www.goabroad.com/section_cloudinary/gaplabs/image/upload/images2/program_content/5-english-speaking-universities-in-europe-3-1487925987.jpg")',
      },
      transitionTimingFunction: {
        "in-out": "cubic-bezier(0.2, 1, 0.25, 1)",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("flowbite/plugin"),
  ],
};
