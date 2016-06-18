import webpack from 'webpack';
import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

const GLOBALS = {
  'process.env.NODE_ENV': JSON.stringify('production')
};

export default {
	debug: true,
	devtool: 'source-map', // this source map is recommended for production
	noInfo: false,
	entry: './src/index',
	target: 'web', //when set to node, webpack bundles for node apps
	output: {
		path: __dirname + '/dist', //physical files are only output by the production build
		publicPath: '/',
		filename: 'bundle.js'
	},
	devServer: {
		contentBase: './dist'
	},
	plugins: [
    new webpack.optimize.OccurenceOrderPlugin(), //for optimal minification
    new webpack.DefinePlugin(GLOBALS), //set build to production mode (reduce bundle size, drop prop type validations, etc...)
    new ExtractTextPlugin('style.css'), //creates separate css file
    new webpack.optimize.DedupePlugin(), //eliminates duplicated in bundle
    new webpack.optimize.UglifyJsPlugin() //minifies javascript
	],
	module: {
	loaders: [
			{test: /\.js$/, include: path.join(__dirname, 'src'), loaders: ['babel']},
			{test: /(\.css)$/, loader: ExtractTextPlugin.extract("css?sourceMap")}, //bundle css and generate sourcemap
			{test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
			{test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000'},
			{test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
			{test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'}
		]
	}
};
