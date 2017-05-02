/*
* @Author: techer
* @Date:   2017-03-30 19:21:10
* @Last Modified by:   techer
* @Last Modified time: 2017-03-30 19:22:08
*/

'use strict';
module.exports = {
	plugins: [
		require('autoprefixer')({
			browsers: ['last 2 versions', 'ios 7', 'firefox > 20']
		})
	]
};