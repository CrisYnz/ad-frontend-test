import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'background-main': '#FFFFFF',      
        'background-header': '#EEEEEE',    
        'background-footer': '#404040',    
        
        'text-primary': '#3B3B3B',         
        'text-secondary': '#737373',       
        'text-accent': '#585660',          

        'card-border': '#8F8F8F',          
        'button-border': '#3B3B3B',
        'new-tag': '#F5F5F4',        
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], 
      },
      borderWidth: {
        '0.5': '0.5px',
      }
    },
  },
  plugins: [],
};
export default config;
