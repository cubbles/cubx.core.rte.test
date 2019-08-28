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
      { from: '**/*.jpg', to: distFolder }
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
  'app-cif-test-a',
  'app-cif-test-b',
  'app-cif-test-c',
  'app-cif-test-compound',
  'app-cif-test-compound-2',
  'app-cif-test-compound-3',
  'app-cif-test-compound-4',
  'app-cif-test-compound-5',
  'app-cif-test-compound-6',
  'app-cif-test-compound-obj',
  'app-cif-test-compound-obj-2',
  'app-cif-test-compound-obj-3',
  'app-cif-test-compound-obj-4',
  'app-cif-test-compound-obj-5',
  'app-cif-test-compound-obj-6',
  'app-cif-test-compound-obj-outer',
  'app-cif-test-compound-obj-outer-2',
  'app-cif-test-compound-obj-outer-3',
  'app-cif-test-compound-obj-outer-4',
  'app-cif-test-compound-obj-outer-5',
  'app-cif-test-compound-obj-outer-6',
  'app-cif-test-compound-outer',
  'app-cif-test-compound-outer-2',
  'app-cif-test-compound-outer-3',
  'app-cif-test-compound-outer-4',
  'app-cif-test-compound-outer-5',
  'app-cif-test-compound-outer-6',
  'app-cif-test-obj-a',
  'app-cif-test-obj-b'
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

module.exports = config;
