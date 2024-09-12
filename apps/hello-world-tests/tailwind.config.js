/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['JetBrains Mono', 'monospace']
      },
      colors: {
        primary: '#0c262f'
      },
      keyframes: {
        typing: {
          '0%': { width: '0ch' },      // Start typing from 0 characters
          '100%': { width: '12ch' },   // End at 11 characters ("Hello World.")
        },
        blink: {
          '0%, 100%': { borderColor: 'transparent' },   // Blink cursor effect
          '50%': { borderColor: '#1A1A1A' },            // Adjust this color as per your preference
        },
      },
      animation: {
        typing: 'typing 5s steps(12) forwards',   // Set duration to 2s, adjust steps as per character count
        blink: 'blink 1.2s step-end infinite',      // Infinite blinking cursor
      },
    },
  },
  plugins: [],
}

