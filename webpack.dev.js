const { merge } = require('webpack-merge');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const path = require('path');
// eslint-disable-next-line import/extensions
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  // plugins: [
  //   new BundleAnalyzerPlugin({
  //     analyzerHost: '0.0.0.0',
  //     analyzerPort: '8059',
  //   }),
  // ],
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
    filename: '[hash].bundle.js'
  },
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    overlay: {
      warnings: true,
      errors: true
    },
    historyApiFallback: true,
    clientLogLevel: 'info',
    hot: true,
    watchContentBase: true,
    port: '8058',
    inline: true,
    host: '0.0.0.0',
    stats: {
      assets: false,
      children: false,
      chunks: false,
      entrypoints: false,
      env: true,
      hash: false,
      modules: false,
      timings: true,
      version: true,
      warnings: true,
      colors: {
        green: '\u001b[32m'
      }
    }
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      minSize: 0,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name(module) {
            // gets a name, i.e. node_modules/packageName/not/this/part.js or node_modules/packageName
            const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
            // avoids potential troubles concerned with servers:
            return `npm.${packageName}`;
          },
        },

      },
    },
  },
});
