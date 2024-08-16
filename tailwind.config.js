/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'background-gradient': 'linear-gradient(326deg, rgba(236, 236, 236,0.04) 0%, rgba(236, 236, 236,0.04) 6%,rgba(157, 157, 157,0.04) 6%, rgba(157, 157, 157,0.04) 29%,rgba(77, 77, 77,0.04) 29%, rgba(77, 77, 77,0.04) 100%),linear-gradient(164deg, rgba(236, 236, 236,0.04) 0%, rgba(236, 236, 236,0.04) 36%,rgba(157, 157, 157,0.04) 36%, rgba(157, 157, 157,0.04) 61%,rgba(77, 77, 77,0.04) 61%, rgba(77, 77, 77,0.04) 100%),linear-gradient(336deg, rgba(236, 236, 236,0.04) 0%, rgba(236, 236, 236,0.04) 64%,rgba(157, 157, 157,0.04) 64%, rgba(157, 157, 157,0.04) 69%,rgba(77, 77, 77,0.04) 69%, rgba(77, 77, 77,0.04) 100%),linear-gradient(90deg, rgb(0,0,0),rgb(0,0,0))',
      },
    },
  },
  plugins: [],
}