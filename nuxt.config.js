export default {
  // Target: https://go.nuxtjs.dev/config-target
  ssr: true,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Search song",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Search song from itunes"
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  publicRuntimeConfig: {
    axios: {
      baseURL: "https://itunes.apple.com/search?term="
    }
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~assets/styles/tailwind.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    "@nuxt/typescript-build",
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss"
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    // https://go.nuxtjs.dev/pwa
    "@nuxtjs/pwa"
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      name: "Search song on itunes",
      lang: "en",
      mobileApp: true
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
};
