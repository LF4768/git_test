const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",        // production mode or none are the other options
    entry: "./src/index.js",    // entry point
    output: {
        filename: "main.js",    // can be any name 
        path: path.resolve(__dirname, "dist"),  // make new directory of dist(if not there already) and put output in it
        clean: true,    // cleans the dist directory before bundling the files into it  
    },
    devtool: "eval-source-map",
    devServer: {
        watchFiles: ["./src/template.html"],    // so that it reads changes in the html file as well
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/template.html",
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,      // Checks for files ending with .css
                use: ["style-loader", "css-loader"],    // css-loader MUST be at the end of array, as webpack runs loaders starting from the end
            },
            {
                test: /\.html$/i,
                loader: "html-loader"  // used for html images
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
            },
        ],
    },
};
