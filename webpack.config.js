const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: "./src/index.tsx",

    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist")
    },

    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                use: [
                    {
                        loader: "ts-loader"
                    }
                ]
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: "file-loader"
                    }
                ]
            },
            {
                test: /\.svg$/,
                use: ['@svgr/webpack'],
            },
            {
                test: /module\.[s]?css$/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders: 1,
                            modules: {
                                mode: "local",
                                localIdentName: "[name]_[local]_[hash:base64:5]_"
                            }
                        }
                    },
                    "sass-loader"
                ]
            },
            {
                test: /\.[s]?css$/,
                use: ["style-loader", "css-loader", "sass-loader"],
                exclude: /\.module.[s]?css$/
            }
        ]
    },

    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },
    devtool: "source-map",

    devServer: {
        port: 3000,
        open: true
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html"
        })
    ]
};
