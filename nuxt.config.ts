// https://nuxt.com/docs/api/configuration/nuxt-config
import { fileURLToPath } from "url";
import { defineNuxtModule } from "nuxt";

export default defineNuxtConfig({
  app: {
    head: {
      title: "Shoes Shop - Your Shoes - Your Style",
      meta: [
        // <meta name="viewport" content="width=device-width, initial-scale=1"},
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "description", content: "Shoes Shop Online" },
        { name: "keywords", content: "Shoes Shop Online" },
        { name: "author", content: "Shoes Shop Online" },
      ],
      script: [
        { src: "/js/jquery-3.3.1.min.js" },

        { src: "/js/jquery-ui.min.js" },
        { src: "/js/360view.js" },

        { src: "/js/menu.js" },
        { src: "/js/lazysizes.min.js" },
        { src: "/js/slick.js" },
        { src: "/js/price-range.js" },
        { src: "/js/sticky-cart-bottom.js" },
        { src: "/js/bootstrap.bundle.min.js" },

        { src: "/js/bootstrap-notify.min.js" },
        { src: "/js/jquery.elevatezoom.js" },

        { src: "/js/fly-cart.js" },
        { src: "/js/jquery.fancybox.pack.js" },

        { src: "/js/script.js" },
      ],
      link: [
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com" },

        {
          href: "https://fonts.googleapis.com/public2?family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Roboto+Slab:wght@100;200;300;400;500;600;700;800;900&display=swap",
          rel: "/public/csssheet",
        },
      ],
      // please note that this is an area that is likely to change
    },
    buildAssetsDir: "/public",
  },

  css: [
    "@/assets/css/vendors/font-awesome.css",
    "@/assets/css/vendors/slick.css",
    "@/assets/css/vendors/slick-theme.css",
    "@/assets/css/vendors/animate.css",
    "@/assets/css/vendors/price-range.css",
    "@/assets/css/vendors/themify-icons.css",
    "@/assets/css/vendors/bootstrap.css",
    "@/assets/css/style.css",
    "@/assets/css/jquery.fancybox.css",
  ],
  alias: {
    images: fileURLToPath(new URL("/public/images", import.meta.url)),
    style: fileURLToPath(new URL("/public/css", import.meta.url)),
    data: fileURLToPath(new URL("./assets/other/data", import.meta.url)),
    script: fileURLToPath(new URL("/public/js", import.meta.url)),
  },
  modules: ["nuxt-swiper", "@pinia/nuxt", "socket.io-client"],
  swiper: {
    // Swiper options
    //----------------------
    // prefix: 'Swiper',
    // public/cssLang: 'css',
    // modules: ['navigation', 'pagination'], // all modules are imported by default
  },
  build: {
    loaders: {
      sass: {
        implementation: require("sass"),
      },
      scss: {
        implementation: require("sass"),
      },
    },
  },
  runtimeConfig: {
    // The private keys which are only available server-side
    apiSecret: "",
    // Keys within public are also exposed client-side
    public: {
      apiBase: "https://shoes-shop-dw31.onrender.com/api/v1",
    },
  },
  optimizeDeps: {
    exclude: ["js-big-decimal"],
  },
});
