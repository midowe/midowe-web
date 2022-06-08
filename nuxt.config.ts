import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	typescript: {
		shim: false,
		//strict: true
	},
	css: ["@/assets/scss/custom.scss", "@splidejs/vue-splide/css"],
});
//'@/assets/scss/custom.scss'
