/*
* @Author: techer
* @Date:   2017-03-30 18:52:43
* @Last Modified by:   techer
* @Last Modified time: 2017-03-30 18:55:11
*/

'use strict';

const devModule = require( './webpack-config/dev' );
const prodModule = require( './webpack-config/prod' );

let finalModule = {};

let ENV = process.env.NODE_ENV;

switch ( ENV ) {
	case 'dev':
		finalModule = devModule;
		break;
	case 'prod':
		finalModule = prodModule;
		break;
	default:
		break;
}

module.exports = finalModule;