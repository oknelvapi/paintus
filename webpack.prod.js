const { merge } = require('webpack-merge');

const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ZipPlugin = require('zip-webpack-plugin');

const path = require('path');
// eslint-disable-next-line import/extensions
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new ZipPlugin({
      // OPTIONAL: defaults to the Webpack output path (above)
      // can be relative (to Webpack output path) or absolute
      path: 'zip',

      // OPTIONAL: defaults to the Webpack output filename (above) or,
      // if not present, the basename of the path
      filename: 'my_app.zip',

      // OPTIONAL: defaults to 'zip'
      // the file extension to use instead of 'zip'
      extension: 'ext',

      // OPTIONAL: defaults to the empty string
      // the prefix for the files included in the zip file
      pathPrefix: 'relative/path',

      // OPTIONAL: defaults to the identity function
      // a function mapping asset paths to new paths
      pathMapper: (assetPath) => {
        // put all pngs in an `images` subdir
        if (assetPath.endsWith('.png')) return path.join(path.dirname(assetPath), 'images', path.basename(assetPath));
        return assetPath;
      },

      // OPTIONAL: defaults to including everything
      // can be a string, a RegExp, or an array of strings and RegExps
      include: [/\.js$/, /\.jsx$/],

      // OPTIONAL: defaults to excluding nothing
      // can be a string, a RegExp, or an array of strings and RegExps
      // if a file matches both include and exclude, exclude takes precedence
      exclude: [/\.png$/, /\.html$/],

      // yazl Options

      // OPTIONAL: see https://github.com/thejoshwolfe/yazl#addfilerealpath-metadatapath-options
      fileOptions: {
        mtime: new Date(),
        mode: 0o100664,
        compress: true,
        forceZip64Format: false,
      },

      // OPTIONAL: see https://github.com/thejoshwolfe/yazl#endoptions-finalsizecallback
      zipOptions: {
        forceZip64Format: false,
      },
    }),
  ],
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
    filename: '[hash].bundle.min.js'
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      minSize: 0,
      cacheGroups: {
        vendor: {
          priority: -10,
          test: /[\\/]node_modules[\\/]/,
          name(module) {
            // gets a name, i.e. node_modules/packageName/not/this/part.js or node_modules/packageName
            const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
            // avoids potential troubles concerned with servers:
            return `npm.${packageName.replace('@', '')}`;
          },
        },

      },
    },
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        uglifyOptions: {
          compress: true,
          ecma: 6,
          mangle: true
        },
        sourceMap: false,
      })
    ],
  }
});
