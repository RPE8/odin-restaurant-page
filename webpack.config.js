const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: './src/index.ts',
	module: {
		rules: [
		  {
			test: /\.ts?$/,
			use: 'ts-loader',
			exclude: /node_modules/,
		  },
		  {
			test: /\.css$/i,
			use: ['style-loader', 'css-loader'],
		  },
		  {
			test: /\.ttf$/i,
			type: 'asset/resource',
		  },
		],
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist'),
	},
	devtool: 'inline-source-map',
	devServer: {
		static: './dist',
	}
};