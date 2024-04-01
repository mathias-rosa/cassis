/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./components/**/*.{js,vue,ts}",
      "./layouts/**/*.vue",
      "./pages/**/*.vue",
      "./plugins/**/*.{js,ts}",
      "./app.vue",
      "./error.vue",
    ],
    theme: {
      extend: {
        colors: {
          primary : '#7458B8',
          secondary : '#AB94E2',
          accent : '#7C51E6',
          background : '#F6F5F9',
          foreground : '#0B0A0C',
          card : 'white',
        },
      },
    },
    plugins: [],
  }