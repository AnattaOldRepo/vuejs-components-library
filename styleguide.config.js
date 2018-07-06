const { resolve } = require('path');
const path = require('path')
const rules = require('vue-webpack-loaders');

module.exports = {
	components: 'src/components/**/[A-Z]*.vue',
	sections: [
		{
			name: 'Base Styling',
			components: './src/components/baseStyling/[A-Z]*.vue'
		},
		{
			name: 'Components',
			components: './src/components/[A-Z]*.vue'
		},		
		{
			name: 'Modules',
			components: './src/components/modules/[A-Z]*.vue'
		},		
	],
	require: [ 
		path.join(__dirname, 'src/css/main.css')
	],
	webpackConfig: {
		resolve: {
			extensions: ['.js', '.json', '.vue', '.ts'],
			alias: {
				'~': resolve(__dirname, 'src'),
				'@': resolve(__dirname, 'src'),
			},
		},
		module: {
			// rules,
			rules: [
				{
					test: /\.vue$/,
					exclude: /node_modules/,
					loader: 'vue-loader',
					options: {
						// ...
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
						]
					}					
				},
				{
					test: /\.js?$/,
					exclude: /node_modules/,
					loader: 'babel-loader'
				},
				{
					test: /\.scss$/,
					loaders: [
						'style-loader',
						'css-loader',
						'sass-loader?precision=10'
					],
				},
				{
					test: /\.css$/,
					use: [
						'vue-style-loader',
						{
						loader: 'css-loader',
						options: { importLoaders: 1 }
						},
						'postcss-loader'
					]
				},
				{
					test: /\.(ttf|eot|woff|woff2)$/,
					use: {
					  	loader: "file-loader",
					  	options: {
							name: "fonts/[name].[ext]",
					  	},
					},
				},				
			]
		},
	},
	showUsage: true,
	vuex: './src/store/index',
};
