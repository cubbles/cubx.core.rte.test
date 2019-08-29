const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');
const wpkgUtils = require('@cubbles/wpkg-utils');
const webpackageName = wpkgUtils.getWebpackageName;
const elementName = webpackageName + '-' + __dirname.split(path.sep).pop();
const distFolder = path.resolve(__dirname, global.cubx.distFolderWebpackage, elementName);

const config = {
  // make this configuration independent from the current working directory
  context: path.resolve(__dirname),
  // define the entry module for the bundle to be created
  entry: './element.js',
  output: {
    path: distFolder,
    filename: 'element.bundle.js'
  },
  module: {
    rules: [
      {
        // manage placeholdes in js files
        test: /\.js$/,
        use: [{ loader: `preprocess-loader?elementName=${elementName}` }]
      },
      {
        test: /element\.html$/,
        use: [
          { loader: `preprocess-loader?elementName=${elementName}` },
          { loader: 'html-loader' }
        ]
      },
      {
        test: /\.sss$/,
        use: [
          {
            loader: 'style-loader',
            options: {
              hmr: false
            }
          },
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: `${elementName}_[local]`
              },
              importLoaders: 1
            }
          },
          {
            loader: 'postcss-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'SHOWROOM.html',
      filename: 'SHOWROOM.html',
      inject: false,
      // manage placeholders
      templateParameters: {
        webpackageName: `${webpackageName}`,
        elementName: `${elementName}`
      }
    }),
    new HtmlWebpackPlugin({
      template: 'test/index.html',
      filename: 'test/index.html',
      inject: false,
      // manage placeholders
      templateParameters: {
        webpackageName: `${webpackageName}`,
        elementName: `${elementName}`
      }
    }),
    new HtmlWebpackPlugin({
      template: 'test/connectionhook-elementary-b-test.html',
      filename: 'test/connectionhook-elementary-b-test.html',
      inject: false,
      // manage placeholders
      templateParameters: {
        webpackageName: `${webpackageName}`,
        elementName: `${elementName}`
      }
    }),
    new CopyWebpackPlugin([
      { from: '**/*.js', to: distFolder, ignore: ['./element.js', './MANIFEST.compound.js', './webpack.subconfig.js'] }
    ], {}),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      reportFilename: 'bundleReport.html',
      openAnalyzer: false
    })
  ]
};
module.exports = config;
