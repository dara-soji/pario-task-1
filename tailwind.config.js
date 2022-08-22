/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'gradient': 'linear-gradient(180deg, rgba(242, 201, 76, 0.2) 0%, rgba(242, 153, 74, 0.2) 100%)',
      },
      colors: {
        'primary': '#F2994A',
        'sec': '#4E598C',
        'gray2': '#4F4F4F',
        'gray4': '#BDBDBD',
        'gray-b': '#4E598C',
      },
      padding: {
        'head': '7.5rem',
      },
      fontSize: {
        16: '16px',
        36: '36px',
        20: '20px',
        24: '24px',
      },
      borderWidth: {
        1: '1px',
      },
      lineHeight: {
        '12': '3rem',
      }
    },
  },
  plugins: [],
}