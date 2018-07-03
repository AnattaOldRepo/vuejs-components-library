const { resolve } = require('path');
const rules = require('vue-webpack-loaders');
const vueLoader = require('vue-loader');

module.exports = {
	components: 'src/components/**/[A-Z]*.vue',
	webpackConfig: {
		resolve: {
			extensions: ['.js', '.json', '.vue', '.ts'],
			alias: {
				'~': resolve(__dirname, 'src'),
				'@': resolve(__dirname, 'src'),
			},
		},		
		module: {
			rules: [
				{
					test: /\.vue$/,
					loader: 'vue-loader',
				},
				{
					test: /\.js?$/,
					exclude: /node_modules/,
					loader: 'babel-loader',
				},
				{
					test: /\.css$/,
					use: ['style-loader', 'css-loader', 'sass-loader'],
				},
				{
					test: /\.scss$/,
					use: ['style-loader', 'css-loader', 'sass-loader'],
				},
			],
		},
		plugins: [
			new vueLoader.VueLoaderPlugin()
		],
	},	
	// webpackConfig: {
	// 	resolve: {
	// 		extensions: ['.js', '.json', '.vue', '.ts'],
	// 		alias: {
	// 			'~': resolve(__dirname, 'src'),
	// 			'@': resolve(__dirname, 'src'),
	// 		},
	// 	},
	// 	module: {
	// 		rules,
	// 	},
	// },
	showUsage: true,
	vuex: './src/store/index',
};
