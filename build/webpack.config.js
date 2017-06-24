var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var projectRoot = path.resolve(__dirname, '../')

module.exports = {
    entry: {
        app: [
          path.resolve(projectRoot, './src/main.js')
        ]
    },
    output: {
        path: path.resolve(projectRoot, './dist'),
        filename: '[name].bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.vue'],
        alias: {
            'vue': 'vue/dist/vue.js'
        }
    },
    module: {
        loaders: [
            {
                test: /\.html$/,
                loader: 'html-loader'    // 可以用来加载模板
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: path.resolve(projectRoot, './dist/index.html'),
            template: path.resolve(projectRoot, './index.html'),
            inject: false,
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true
            }
        }),
    ]
};