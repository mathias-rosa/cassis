// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "nuxt-mongoose",
    '@nuxtjs/google-fonts',
    'nuxt-feather-icons',
  ],
  css: ['~/assets/css/main.css'],
  mongoose: {
    uri: process.env.MONGODB_URI,
    options: {},
    modelsDir: 'models',
  },
  googleFonts:{
    families : {
      Unbounded:true,
      Inter : true
    }
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})