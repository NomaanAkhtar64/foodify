/** @type {import('tailwindcss').Config} */
import fluid, { extract } from "fluid-tailwind";
import flowbite from "flowbite-react/tailwind";
export default {
  content: {
    files: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
    extract,
  },
  theme: {
    extend: {
      colors: {
        primary: "#ab5d22",
        "primary-light": "#d9813f",
      },
    },
  },
  plugins: [fluid, flowbite.plugin()],
};
