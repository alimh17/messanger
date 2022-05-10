module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {

      keyframes: {
        wiggle: {
          '0%': { transform: 'translateY(100%)' },
          '50%': { transform: 'translateY(-10%)' },
          '100%': { transform: 'translateY(0)' },
        }
      },

      animation: {
        wiggle: 'wiggle .8s ease-in-out ',
      }

    },
  },
  plugins: [],
  darkMode: 'class'
};
