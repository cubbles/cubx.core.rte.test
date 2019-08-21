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
    filename: 'bundle.js'
  },
  module: { },
  plugins: [
    new CopyWebpackPlugin([
      { from: '**/*.css', to: distFolder },
      { from: '**/*.jpg', to: distFolder },
      { from: '**/*.js', to: distFolder, ignore: ['./MANIFEST.utility.js', './webpack.subconfig.js'] }
    ], {}),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      reportFilename: 'bundleReport.html',
      openAnalyzer: false
    })
  ]
};

const appFolders = [
  './',
  'app-repeated-value-elementary-a',
  'app-repeated-value-elementary-e',
  'app-repeated-value-elementary-f',
  'app-repeated-value-false-compound-b',
  'app-repeated-value-false-compound-c',
  'app-repeated-value-false-compound-d',
  'app-repeated-value-true-compound-g'
];

appFolders.forEach((appFolder) => {
  config.plugins.push(new HtmlWebpackPlugin({
    template: path.join(appFolder, 'index.html'),
    filename: path.join(appFolder, 'index.html'),
    // manage placeholders
    templateParameters: {
      webpackageName: `${webpackageName}`,
      elementName: `${elementName}`
    }
  }));
});

console.log(config.plugins);

module.exports = config;
