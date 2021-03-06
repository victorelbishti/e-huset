var path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');

var DIST_DIR = path.resolve(__dirname, "dist");
var SRC_DIR = path.resolve(__dirname, "src");

var config =  {
    entry: SRC_DIR + "/app/index.js",
    output: {
        path: DIST_DIR,
        filename: "bundle.js"
    },
    devServer: {
        contentBase: path.join(__dirname, "/dist/"),
        port: 9000
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: SRC_DIR + '/index.html',
            filename: 'index.html',
            inject: 'body'
        })
    ],
    module: {
        rules: [
            {
                test: /\.js?/,
                exclude: "/node_modules/",
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            },
            {
                test: /\.(png|jpg|jpeg|gif|mp4|svg|woff|woff2|eot|ttf|otf)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8900
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: ['style-loader','css-loader']
            }
        ]
    }
};

module.exports = config;
