const path = require('path');
const CleanPlugin = require('clean-webpack-plugin');

// eslint-disable-next-line no-undef
module.exports = {
    mode: 'development',
    entry: './src/app.js',
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'assets', 'scripts'),
        publicPath: 'assets/scripts/'
    },
    devtool: 'cheap-module-eval-source-map',
    // devServer:{
    //     contentBase: './'
    // }
    plugins: [
        new CleanPlugin.CleanWebpackPlugin()
    ]
};

