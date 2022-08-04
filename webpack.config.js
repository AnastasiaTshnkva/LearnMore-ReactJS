const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ReactRefreshWebpackPlagin } = require('@pmmmwh/react-refresh-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: "development",
    entry: './src/index.js',
    output: {
        path: path.resolve('__dirname'),
        filename: "[name].[contenthash].js",
        clean: true,
        publicPath: "/",
    },
    devtool: "source-map",
    devServer: {
        hot: true,
        port: 3000,
        historyApiFallback: {index: '/'},
        open: true,
        proxy: {
            '/api': 'http://localhost:3000/',
        }
    },

     plugins:[
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './pablic/index.html',
            filename: './index.html',
        }),
         //new ReactRefreshWebpackPlagin(),
     ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                options: { presets: ['@babel/env','@babel/preset-react'] },
            },
            {
                test: /\.s[ac]ss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
        ]
    },
    resolve: {
        modules: [
            path.resolve((__dirname, 'src')),
            path.resolve((__dirname, 'node_modules')),
        ],
        extensions: ['.json', '.js', '.jsx'],
    },
};