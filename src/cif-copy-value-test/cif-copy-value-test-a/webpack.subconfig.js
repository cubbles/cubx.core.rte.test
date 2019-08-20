const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
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
          { loader: `preprocess-loader?elementName=${elementName}&webpackageName=${webpackageName}` },
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
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      reportFilename: 'bundleReport.html',
      openAnalyzer: false
    })
  ]
};
module.exports = config;
