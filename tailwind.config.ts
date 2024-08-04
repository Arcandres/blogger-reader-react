import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'background-dark': '#0C0E14',
        'background-radial': '#82BAEE',
        main: '#4C5F83',
        post: '#4C5F83',
      },
    },
  },
  plugins: [],
};
export default config;
