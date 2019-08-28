const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const wpkgUtils = require('@cubbles/wpkg-utils');
const webpackageName = wpkgUtils.getWebpackageName;
const elementName = webpackageName + '-' + __dirname.split(path.sep).pop();
const distFolder = path.resolve(__dirname, global.cubx.distFolderWebpackage, elementName);

const config = {
  // make this configuration independent from the current working directory
  context: path.resolve(__dirname),
  // define the entry module for the bundle to be created
  entry: './main.js',
  output: {
    path: distFolder,
    filename: 'main.js'
  },
  module: { },
  plugins: [
    new CopyWebpackPlugin([
      { from: '**/*.css', to: distFolder },
      { from: '**/*.jpg', to: distFolder },
      { from: '**/*.txt', to: distFolder },
      { from: './js/*.js', to: distFolder }
    ], {}),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      reportFilename: 'bundleReport.html',
      openAnalyzer: false
    })
  ]
};

const appFolders = [
  './index.html'
];

appFolders.forEach((appFolder) => {
  config.plugins.push(new HtmlWebpackPlugin({
    template: appFolder,
    filename: appFolder,
    // manage placeholders
    templateParameters: {
      webpackageName: `${webpackageName}`,
      elementName: `${elementName}`
    }
  }));
});

module.exports = config;
