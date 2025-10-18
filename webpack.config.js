const path = require('path');
const webpack = require("webpack");

const { getenv, getenvvar } = require("./environment");

const DEVELOPMENT = getenv("ENVIRONMENT", getenv("NODE_ENV", { prefix: null }, "development")) === "development";

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
			{
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'images/',
              publicPath: 'images/',
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
		modules: [path.resolve(__dirname, '/node_modules'), 'node_modules'],
  },
	plugins: [
		new webpack.EnvironmentPlugin({
      [getenvvar("ENVIRONMENT")]: getenv("ENVIRONMENT", "development"),
      [getenvvar("URL_K12")]: getenv("URL_K12"),
			[getenvvar("URL_K12LEARN")]: getenv("URL_K12LEARN"),
			[getenvvar("URL_K12TEACH")]: getenv("URL_K12TEACH")
		})
	]
};