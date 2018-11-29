const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const postcssPresetEnv = require("postcss-preset-env");

const devMode = process.env.NODE_ENV !== "production";

module.exports = {
    mode: devMode ? "development" : "production",
    entry: ["./src/index.js"],
    output: {
        path: path.resolve(__dirname, "public/assets"),
        publicPath: "css",
        filename: "js/sass.js"
    },
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/,
                use: [{
                    // Extracts the CSS into a separate file and uses the
                    // defined configurations in the 'plugins' section                 
                    loader: MiniCssExtractPlugin.loader
                },{
                    loader: "css-loader",
                    options: {
                        importLoaders: 2
                    }
                },{
                    // Use PostCSS to minify and autoprefix with vendor rules
                    loader: "postcss-loader",
                    options: {
                        ident: "postcss",
                        // CSS when in production mode, otherwise don't do anything.
                        plugins: devMode ? () => [] : () => [
                            postcssPresetEnv({
                                browsers: [">1%"]
                            }),
                            require("cssnano")()
                        ]
                    }
                }, {
                    // Adds support for Sass files, if using Less, then
                    // use the less-loader
                    loader: "sass-loader"
                }]
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/,
                use: [{
                    loader: "file-loader",
                    options: {
                        // The image will be named with the original name and extension
                        name: "[name].[ext]",
                        publicPath: "images",
                        outputPath: "css/images",
                        // When this option is 'true', the loader will emit the image to output.path
                        emitFile: true
                    }
                }]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: devMode ? "css/main.css" : "css/main.min.css"
        })
    ]
}