module.exports = {
    entry: "./js/entry.js",
    output: {
        path: __dirname,
        filename: "js/bundle.js"
    },
    module: {
        loaders: [{
            test: /\.less$/,
            loader: "style!css!less"
        }, {
            test: /\.html$/,
            loader: "raw-loader"
        }]
    }
};
