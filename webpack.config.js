const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const autoprefixer = require('autoprefixer');
const webpack = require('webpack');

module.exports = {
	entry: [
		'./src/js/index.js',
		'./src/scss/style.scss'
	],
	output: {
		filename: './js/bundle.js'
	},
	devtool: "source-map",
	module: {
		rules: [
			{
				test: /\.m?js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']
					}
				}
			},
			{
				test: /\.(sass|scss)$/,
				include: path.resolve(__dirname, 'src/scss'),
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: "css-loader",
						options: {
							sourceMap: true,
							url: false
						}
					},
					{
						loader: 'postcss-loader',
						options: {
							plugins: [
								autoprefixer()
							],
							sourceMap: true
						}
					},
					{
						loader: "sass-loader",
						options: {
							sourceMap: true
						}
					},
				]
			},
			{
				test: /\.pug$/,
				use: {
					loader: 'pug-loader',
					options: {
						pretty: true
					}
				}
			},
		]
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: './css/[name].css',
		}),
		new HtmlWebpackPlugin({
			template: './src/html/index.pug',
			minify: {
				removeScriptTypeAttributes: true,
			},
		}),
		new HtmlWebpackPlugin({
			filename: 'place-card.html',
			template: './src/html/place-card.pug',
			minify: {
				removeScriptTypeAttributes: true,
			},
		}),
		new HtmlWebpackPlugin({
			filename: 'news-list.html',
			template: './src/html/news-list.pug',
			minify: {
				removeScriptTypeAttributes: true,
			},
		}),
		new HtmlWebpackPlugin({
			filename: 'news-card.html',
			template: './src/html/news-card.pug',
			minify: {
				removeScriptTypeAttributes: true,
			},
		}),
		new CopyWebpackPlugin([
			{
				from: './src/fonts',
				to: './fonts'
			},
			{
				from: './src/favicon',
				to: './favicon'
			},
			{
				from: './src/img',
				to: './img'
			},
			{
				from: './src/uploads',
				to: './uploads'
			}
		]),
		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery'
		}),
	],
};
