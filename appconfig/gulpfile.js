/**
 * Created by Shashank on 1/26/2017.
 */
var gulp = require('gulp'),
    sBasePath = '..',
    gulpWebpack = require('gulp-webpack'),
    webpack = require('webpack'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    sourceFile = sBasePath + '/app/html/start.jsx',
    destFolder = sBasePath + '/appbuild',
    _ = require('lodash');


//Order of path is important
var aPathsToInclude = [];
aPathsToInclude.push(sourceFile);
//Libraries css files
aPathsToInclude.push(sBasePath + '/node_modules/bootstrap/dist/css/bootstrap.css');
// aPathsToInclude.push(sBasePath + '/node_modules/react-image-gallery/styles/scss/image-gallery.scss');
// aPathsToInclude.push(sBasePath + '/node_modules/react-image-gallery/styles/css/image-gallery.css');
//Custom css files
aPathsToInclude.push(sBasePath + '/app/**/*.scss');
aPathsToInclude.push(sBasePath + '/app/**/*.css');

var oProjects = {
    home: {
        destJSFile: './portfolio.js',
        destCSSFile: './portfolio.css',
        filesToCompile: aPathsToInclude,
        destination: destFolder
    }
};

//To minify remove comment of uglify() and commnet [devtool & debug mode]
function doWebpack(oProject, bProduction){
    var sDestinationJSFile = oProject.destJSFile;
    var sDestinationCssFile = oProject.destCSSFile;
    var aFilesToCompile = oProject.filesToCompile;
    var sDestination = oProject.destination;

    return gulp.src(aFilesToCompile)
        .pipe(gulpWebpack(
            {
                devtool: "#sourcemap",
                debug: true,
                output: {
                    filename: sDestinationJSFile
                },
                module: {
                    loaders: [
                        {
                            test: /\.scss$|\.css$/,
                            loader: ExtractTextPlugin.extract(
                                // activate source maps via loader query
                                'css?sourceMap!' +
                                'sass?sourceMap'
                            )},
                        { test: /\.woff($|\?)/,   loader: 'url-loader' },
                        { test: /\.woff2($|\?)/,   loader: 'url-loader' },
                        { test: /\.ttf($|\?)/,   loader: 'url-loader' },
                        { test: /\.otf($|\?)/,   loader: 'url-loader' },
                        { test: /\.eot($|\?)/,   loader: 'url-loader' },
                        { test: /\.svg($|\?)/,    loader: 'url-loader' },
                        { test: /\.png$/, loader: "url-loader?limit=100000" },
                        { test: /\.jpg$/, loader: "file-loader" },
                        { test: /\.gif$/, loader: "file-loader" },
                        {
                            test: /\.jsx?$/,
                            exclude: /(node_modules|bower_components)/,
                            loader: 'babel', // 'babel-loader' is also a legal name to reference
                            query: {
                                presets: ['react'],
                                compact: false
                            }
                        },
                        { test: /\.json$/, loader: 'json-loader'}
                    ]
                },
                plugins: bProduction ? [
                        // extract inline css into separate 'styles.css'
                        new ExtractTextPlugin(sDestinationCssFile),

                        /**Uncomment this for production release**/
                        new webpack.optimize.UglifyJsPlugin(),
                        new webpack.DefinePlugin({
                            'process.env': {
                                'NODE_ENV': JSON.stringify("production")
                            }
                        })
                    ] : [
                        new ExtractTextPlugin(sDestinationCssFile),
                        new webpack.DefinePlugin({
                            'process.env': {
                                'NODE_ENV': JSON.stringify("development")
                            }
                        })
                    ],
                resolve: {
                    // you can now require('file') instead of require('file.js')
                    extensions: ['', '.js', '.json', '.jsx', '.css', '.scss']
                }
            }))
        // .pipe(uglify())
        .pipe(gulp.dest(sDestination));
}

gulp.task('webpack', function () {

    return _.map(oProjects, function(oProject){
        return doWebpack(oProject, false);
    });
});