const path = require('path');
const CleanWebPackPlugin = require('clean-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: '../mern-auth/client/src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '/build'),
        publicPath: '/'
    },
    module: {
        loaders: [{

            test: /\.js?$/,
      
            loaders: ['babel'],
      
            exclude: /node_modules/
      
          }],
        rules: [
            {
                enforce: 'pre',
                test: /\.js$/,
                loader: 'eslint-loader',
                options: {
                    failOnWarning: true,
                    failOnerror: true
                },
                exclude: /node_modules/
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.s?css$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.svg$/,
                loader: 'url-loader',
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new CleanWebPackPlugin(['public'], { root: path.resolve(__dirname) }),
        new HtmlWebPackPlugin({
            template: './Client/index.html',
            favicon: './Client/favicon.ico',
            inject: false
        })
    ],
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        inline: false,
        contentBase: path.resolve(__dirname, '/build'),
        compress: true,
        port: 9000,
        historyApiFallback: true,
    }
};
