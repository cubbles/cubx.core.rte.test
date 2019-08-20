const assert = require('assert');

module.exports = (webpackageName) => {
  assert.ok(webpackageName, 'Expected "webpackageName" to be defined.');
  return {
    runnables: [
      {
        name: 'cif-copy-value-demo',
        path: '/index.html',
        description: 'Demo application for the copy-value test arrangement'
      }
    ],
    resources: []
  };
};
