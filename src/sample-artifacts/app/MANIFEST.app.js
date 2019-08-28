const assert = require('assert');

module.exports = (webpackageName) => {
  assert.ok(webpackageName, 'Expected "webpackageName" to be defined.');
  return {
    runnables: [
      {
        name: 'entry point',
        path: '/index.html'
      }
    ],
    resources: []
  };
};
