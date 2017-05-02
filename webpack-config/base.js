/*
 * @Author: techer
 * @Date:   2017-03-30 18:50:53
 * @Last Modified by:   techer
 * @Last Modified time: 2017-03-31 10:08:50
 */

'use strict';

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    context: path.resolve(__dirname, '../'),
    entry: './src/index.ts',

    resolve: {
        alias: {
            src: path.resolve( __dirname, '../src' )
        },
        extensions: ['.js', '.ts']
    },
    
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: [/node_modules/],
                use: 'babel-loader'
            },
            {
                test: /\.ts$/,
                exclude: [/node_modules/],
                use: 'ts-loader'
            },
            {
                test: /\.html$/,
                loader: 'html-loader',
                options: {
                    //minimize: true
                }
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    hash: 'sha512',
                    publicPath: '/',
                    name: 'assets/images/[name].[hash].[ext]'
                }
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html'
        })
    ]
};
