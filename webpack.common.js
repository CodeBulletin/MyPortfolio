const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode:"development",
    entry: {
        main: './src/js/index.js',
        vendor: './src/js/vendor.js'
    },
    module: {
        rules: [
            {
                test: /\.html$/i,
                use: ["html-loader"]
            }, {
                test: /\.(gif)$/,
                type: 'asset/resource',
                generator: {
                    filename: "assets/gif/[name].[hash].[ext]"
                }
            }, {
                test: /\.(svg)$/,
                type: 'asset/resource',
                generator: {
                    filename: "assets/svg/[name].[hash].[ext]"
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: ".\\src\\index.html"
        }),
    ],
};