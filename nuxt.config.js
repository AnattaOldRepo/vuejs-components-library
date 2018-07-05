module.exports = {
	srcDir: 'src/',
	/*
  ** Headers of the page
  */
	head: {
		title: 'styleguide',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: 'Nuxt.js project' },
		],
		link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
	},
	css: [ '~/css/main.css' ],
	/*
  ** Customize the progress bar color
  */
	loading: { color: '#3B8070' },

	build: {
		postcss: [
			require("postcss-import")(),
			require("postcss-url")(),
			require("postcss-cssnext")(),
			require("precss")(),
			require("postcss-fontpath")(),
			require("postcss-at2x")(),
			require("postcss-flexbox")(),
			require("postcss-custom-media")(),
			require("postcss-custom-properties")(),
			require("postcss-utilities")(),
			require("postcss-short")(),
			require("postcss-automath")(),
			// require("postcss-zindex")(),
		]		
	}
};