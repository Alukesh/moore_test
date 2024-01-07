/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '440px',      
      'sm': '500px',
      'md': '700px',
      'lg': '900px',
      'xl': '1100px',
    },
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      boxShadow: {
        xl: '',
        softXl: " 0px 10px 30px 0px rgba(0, 0, 0, 0.07)",
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        grey: 'var(--grey)',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
      }
    },
  },
  plugins: [],
}