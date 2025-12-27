/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',   // shades nhẹ
          100: '#e0f2fe',
          500: '#0ea5e9',  // màu chính (main)
          900: '#0c4a6e',  // shades tối
          DEFAULT: '#F7EBEE', // dùng bg-primary, text-primary...
        },
        // Có thể thêm secondary, accent...
      },
      backgroundImage: {
        'bg-mina-gradient': 'linear-gradient(to bottom right, #C9A39A, #dfc0b5ff, #E7D3CC)',
      },
    },
  },
  // ...
};