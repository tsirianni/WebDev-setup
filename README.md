# WebDev-setup

`npm init -y` and delete main in **package.jason**

`npm i -D webpack webpack-cli` install dependencies for webpack

`npm i -D html-webpack-plugin` install html plugin

`npm i -D style-loader css-loader` install css dependencies

`npm i -D webpack-dev-server` install webpack server

Create **src** with:
* app.js,
* temp.html (template for plugin)


Create **webpack.config.js** with:
```
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
        rules: [{test: /\.css$/, use: ['style-loader', 'css-loader']}]
    },

    // Plugins
    plugins: [new HtmlWebpackPlugin({
        title: 'Project Name',
        filename: 'index.html',
        template: path.resolve(__dirname, 'src/temp.html'),
    })],
}
```

