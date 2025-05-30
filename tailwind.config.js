/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}", // If you ever use the pages directory
    "./components/**/*.{js,ts,jsx,tsx,mdx}", // If you create a top-level components folder
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          sage: "#A3B18A", // Muted Sage Green
          DEFAULT: "#A3B18A",
        },
        secondary: {
          beige: "#DAD7CD", // Soft Beige
          DEFAULT: "#DAD7CD",
        },
        accent: {
          coral: "#E63946", // Deep Coral Red
          DEFAULT: "#E63946",
        },
        neutral: {
          cream: "#FEFAE0",
          forest: "#3A5A40", // for dark text or elements
          grey: "#CED4DA",   // for borders/dividers
          background: "var(--bg-primary)", // using CSS var from globals.css
          text: "var(--text-primary)",      // using CSS var from globals.css
        },
        // Specific states
        'success-state': '#84A98C',
        'warning-state': '#FBC02D',
        'error-state': '#E57373',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        poppins: ['var(--font-poppins)', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        soft: '8px',
        medium: '12px',
      },
      // Add custom animation/keyframes for scroll-triggered effects if needed
      // keyframes: {
      //   fadeInUp: {
      //     '0%': { opacity: 0, transform: 'translateY(20px)' },
      //     '100%': { opacity: 1, transform: 'translateY(0)' },
      //   },
      // },
      // animation: {
      //   fadeInUp: 'fadeInUp 0.5s ease-out forwards',
      // },
    },
  },
  plugins: [
    // require('@tailwindcss/typography'), // If you need prose styling
    // require('@tailwindcss/forms'), // If you need form styling reset
  ],
};
