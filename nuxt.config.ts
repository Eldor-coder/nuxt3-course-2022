// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    css: [
        '@/assets/css/main.css',
    ],
    meta : {
        title : 'Nuxt 3 course'
    },
    build: {
        postcss: {
            postcssOptions : {
                plugins: {
                    tailwindcss: {},
                    autoprefixer: {},
                },
            }
        },
    }
})
