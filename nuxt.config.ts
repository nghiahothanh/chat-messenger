// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	
	devtools: { enabled: true },
	css: ["~/assets/variables.scss"],
	components: ["~/components"],
	modules: ["vuetify-nuxt-module",
	'nuxt-facebook-chat',],
	plugins: [
		{ src: '~/plugins/vue-fb-customer-chat.js', ssr: false }
	  ],
	vuetify: {
		moduleOptions: {
			/* module specific options */
		},
		vuetifyOptions: {
			icons: {
				defaultSet: "mdi",
			},
		},
	},
})