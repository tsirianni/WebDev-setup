const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development', // or Production

    entry: {
        main: path.resolve(__dirname, 'src/app.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js',
        assetModuleFilename: '[name][ext]',
        clean: true,
    },

    devtool: 'inline-source-map',
    devServer: {
        static: path.resolve(__dirname, 'dist'),
        open: true,
        hot: true,
        watchFiles: {
            paths: ['src', 'SASS/main.css']},
    },

    // Loaders
    module: {
        rules: [
            // CSS
            {test: /\.s[ac]ss$/i, use: ['style-loader', 'css-loader', 'sass-loader']},
            // Images
            {test: /\.(svg|ico|png|webp|jpg|jpeg|gif)$/, type: 'asset/resource'},
            // Js Transpiler (Babel)
            {test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {presets: ['@babel/preset-env']}
            },},
        ]
    },

    // Plugins
    plugins: [new HtmlWebpackPlugin({
        title: 'Project Name',
        filename: 'index.html',
        template: path.resolve(__dirname, 'src/temp.html'),
    })],
}