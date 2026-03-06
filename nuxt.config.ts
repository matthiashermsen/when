export default defineNuxtConfig({
	compatibilityDate: "2025-07-15",
	devtools: { enabled: true },
	modules: [
		"@nuxt/ui",
		"@nuxtjs/i18n",
		"nuxt-auth-utils",
		"@nuxthub/core",
		"@nuxtjs/mdc",
	],
	css: ["~/assets/css/main.css"],
	i18n: {
		defaultLocale: "en",
		locales: [
			{ code: "en", name: "English" },
			{ code: "de", name: "Deutsch" },
			{ code: "tr", name: "Türkçe" },
		],
	},
	hub: {
		db: "postgresql",
	},
});
