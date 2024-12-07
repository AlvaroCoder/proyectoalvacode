/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        azul_oscuro:"#212529",
        blanco_claro:"#F8F9FA",
        azul_oscuro_claro:"#343A40",
        gris_claro:"#E9ECEF",
        naranja:"#FB8500",
        amarillo:"#FCA311"
      },
    },
  },
  plugins: [
    function ({addUtilities}) {
      const extendUnderline={
        '.underline':{
          'textDecoration' : 'underline',
          'text-decoration-color' : '#FB8500'
        }
      }
      addUtilities(extendUnderline)
    }
  ],
};
