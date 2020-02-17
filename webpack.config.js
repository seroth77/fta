const { CleanWebpackPlugin }  = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const cleanWebpackPlugin = new CleanWebpackPlugin();

const htmlPlugin = new HtmlWebpackPlugin({
   template: "./src/index.html" ,
   filename: "./index.html"
});

module.export = {
    entry: "./src/index.html",
    resolve: {
        extensions: [".js"]
    },
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "[name].[hash].js",
        chunkFilename: "[name].[chunkhash].bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "postcss-loader"
                ]
            }
        ]
    },
    resolve: {
        extensions: [".css"]
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /node_modules/,
                    chunks: "initial",
                    name: "vendor",
                    priority: 10,
                    enforce: true
                },
            }
        }
    },
    plugins: [
        cleanWebpackPlugin,
        htmlPlugin
    ]
}