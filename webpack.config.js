var path = require('path');

var DIST_DIR = path.resolve(__dirname, 'dist');
var SRC_DIR = path.resolve(__dirname, 'src');

var config = {
	entry: SRC_DIR + '/game/game.js',
	output: {
		path: DIST_DIR + '/game',
		filename: 'game.bundle.js',
		publicPath: '/game/'
	},
	module: {
		loaders: [
			{
				test: /\.js?/,
				include: SRC_DIR,
				loader: 'babel-loader',
				query: {
					presets: ['es2015', 'stage-2']
				}
			}
		]
	}
};

module.exports = config;