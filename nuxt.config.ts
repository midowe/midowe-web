// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	typescript: {
		shim: false,
		//strict: true
	},
	css: ["@/assets/scss/custom.scss", "@splidejs/vue-splide/css"],
	runtimeConfig: {
		public: {
			endpointCms: process.env.ENDPOINT_CMS,
			endpointAccouting: process.env.ENDPOINT_ACCOUTING,
		},
	},
});
