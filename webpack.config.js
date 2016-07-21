var NODE_ENV = process.env.NODE_ENV || 'development'; //development or production
var webpack = require('webpack');
const path = require('path');
var extractTextPlagin = require('extract-text-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: { //--inline --hot
        main: "./src/index.js"
        //styles:'./src/test'
    },
    output: {
        path: __dirname + '/public/',
        publicPath: '/public/',  //dynamic load scripts
        filename: '[name].js'
        //library:'home'  for global var
    },
    resolve: {
        extensions: ['', '.jsx', '.js', '.json', '.less', 'css'],
        modulesDirectories: ['node_modules', path.join(__dirname, '../src')]
    },

    watch: NODE_ENV == 'development',  //watch the dif

    devtool: NODE_ENV == 'development' ? 'eval' : null,  //source maps

    plugins: [
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({   // var in work js
            NODE_ENV: JSON.stringify(NODE_ENV)
        }),
        new extractTextPlagin('style/[name].css'),
        new webpack.ProvidePlugin({
            Immutable:'immutable'
        })
    ],

    module: {
        loaders: [    //loaders
            {
                test: /\.js?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.(png|jpg|svg)$/,
                loader: 'file?name=image/[name].[ext]?[hash]'
            },
            {
                test: /\.(ttf|eot|woff|woff2)$/,
                loader: 'file?name=fonts/[name].[ext]?[hash]'
            }
        ]
    },

    //devServer: {
    //    host: 'localhost',
    //    port: 3001,
    //    hot: true,
    //    proxy: {
    //        '/api/**/': {
    //            target: 'http://192.168.14.164:8082/',
    //            secure: false,
    //            //bypass: function (req, res, proxyOptions) {
    //            //    if (req.headers.accept.indexOf('html') !== -1) {
    //            //        return '/index.html';
    //            //    }
    //            //}
    //        }
    //    }
    //}
};


//-----------------------------------------------------------dev----------------------
if (NODE_ENV == 'development') {
    //loaders--------------------------------------
    module.exports.module.loaders.push({
        test: /\.less$/,
        loader: extractTextPlagin.extract('style', 'css!less')
    })
}

//-----------------------------------------------------------prod---------------------

if (NODE_ENV == 'production') {

    //loaders ------------------
    module.exports.module.loaders.push({
        test: /\.less$/,
        loader: extractTextPlagin.extract('style', 'css?minimize!less')
    });

    //plugins----------------------

    module.exports.plugins.push(
        new CleanWebpackPlugin(['build'], {
            verbose: true,
            dry: false
        })
    );

    module.exports.plugins.push(            //minimization
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                drop_console: true,
                unsafe: true
            }
        })
    );
    module.exports.plugins.push(
        new webpack.optimize.DedupePlugin()
    );
    module.exports.plugins.push(
        new webpack.optimize.OccurenceOrderPlugin()
    );

}