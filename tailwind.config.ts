import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        myfont: ["MyFont", "sans-serif"], // 👈 ta police
      },
    },
  },
  plugins: [],
};

export default config;




// // tailwind.config.js
// module.exports = {
//   content: [
//     "./app/**/*.{js,ts,jsx,tsx}",
//     "./components/**/*.{js,ts,jsx,tsx}",
//     // ajoutez d'autres chemins si besoin
//   ],
//   theme: {
//     extend: {
//       fontFamily: {
//         "myfont": ["Pixel", "sans-serif"], // 👈 ta police
//       },
//     //   colors: {
//     //     'eni': {
//     //       50:  'var(--color-eni-50)',
//     //       100: 'var(--color-eni-100)',
//     //       200: 'var(--color-eni-200)',
//     //       300: 'var(--color-eni-300)',
//     //       400: 'var(--color-eni-400)',
//     //       500: 'var(--color-eni-500)',
//     //       600: 'var(--color-eni-600)',
//     //       700: 'var(--color-eni-700)',
//     //       800: 'var(--color-eni-800)',
//     //       900: 'var(--color-eni-900)',
//     //       950: 'var(--color-eni-950)',
//     //     }
//     //   }
//     }
//   }
// }