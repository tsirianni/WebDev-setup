# WebDev-setup

`npm init -y` and delete main in **package.jason**

`npm i -D webpack webpack-cli` install dependencies for webpack

Create src/index.js

Create **webpack.config.js** with:
```
const path = require('path');

module.exports = {
    mode: 'development', // or Production

    entry: {
        main: path.resolve(__dirname, 'src/app.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js',
        clean: true,
    }
```

