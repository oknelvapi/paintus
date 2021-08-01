const webpack = require('webpack');
const path = require('path');

const WebpackCleanupPlugin = require('webpack-cleanup-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

/*
 * SplitChunksPlugin is enabled by default and replaced
 * deprecated CommonsChunkPlugin. It automatically identifies modules which
 * should be splitted of chunk by heuristics using module duplication count and
 * module category (i. e. node_modules). And splits the chunks…
 *
 * It is safe to remove "splitChunks" from the generated configuration
 * and was added as an educational example.
 *
 * https://webpack.js.org/plugins/split-chunks-plugin/
 *
 */

module.exports = {
  plugins: [
    new WebpackCleanupPlugin({
      exclude: ['.git/**/*', 'web.config', 'README.md', 'favicon.ico']
    }),
    new webpack.HashedModuleIdsPlugin(),
    new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /uk|ru|en-gb/),
    new HtmlWebpackPlugin({
      title: 'Paintus',
      brand: 'Paintus',
      // color: process.env.BRAND_COLOR,
      template: path.resolve(__dirname, './src/index.html')
    }),
    new CopyPlugin({
      patterns: [
        {
          from: './src/assets/favicons',
          to: 'assets/favicons'
        },
        {
          from: path.resolve(__dirname, './src/site.webmanifest'),
          to: path.resolve(__dirname, 'build'),
        },
        {
          from: path.resolve(__dirname, './src/browserconfig.xml'),
          to: path.resolve(__dirname, 'build'),
        }
      ]
    })
  ],
  resolve: {
    alias: {
      Root: path.resolve('./'),
      Source: path.resolve('./src/'),
      Assets: path.resolve('./src/assets'),
      StylesRoot: path.resolve('./src/assets/styles'),
      Components: path.resolve('./src/components'),
      Containers: path.resolve('./src/containers'),
      Configs: path.resolve('./src/configs'),
      Utils: path.resolve('./src/utils'),
      Colors: path.resolve('./src/configs/colors'),
      Constants: path.resolve('./src/configs/constants'),
      Translations: path.resolve('./src/translations')
    }
  },
  entry: [
    './src/index.js'
  ],
  module: {
    rules: [
      {
        include: [path.resolve(__dirname, 'src')],
        loader: 'babel-loader',
        resolve: { extensions: [".js", ".jsx"] },
        options: {
          plugins: ['syntax-dynamic-import'],
          presets: [
            [
              '@babel/preset-env',
              {
                modules: false
              },
            ]
          ]
        },
       
        test: /\.(js)x?$/,
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(jpg|png|svg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'assets/img/[name].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'assets/fonts/[name].[ext]'
            }
          }
        ]
      },
    ]
  },
};
