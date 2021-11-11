const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    devtool: "eval-cheap-source-map",
    mode: 'development',
    optimization: {
        runtimeChunk: 'single',
        splitChunks: {
            filename: '[name].bundle.js',
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    filename: 'vendor.bundle.js',
                    chunks: 'all',
                    reuseExistingChunk: true,
                    enforce: true
                }
            }
        }
    },
    entry: {
        main: [
            './src/main.ts'
        ],
        polyfills: [
            "./src/polyfills.ts"
        ]
    },
    module: {
        rules: [
            {
                test: /\.ts$/i,
                use: ["ts-loader"],
            },
            {
                test: /\.css$/,
                use: [
                    'to-string-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            },
            {
                test: /\.tsx?$/,
                loader: "ts-loader"
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js'],
        "modules": [
            "./node_modules"
        ],
        "symlinks": true
    },
    output: {
        path: __dirname + "/public",
        filename: "[name].bundle.js",
        chunkFilename: '[name].js'

    },
    plugins: [
        new HtmlWebpackPlugin()
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port: 4200,
    }
}