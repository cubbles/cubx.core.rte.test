const assert = require('assert');

module.exports = (webpackageName) => {
  assert.ok(webpackageName, 'Expected "webpackageName" to be defined.');
  return {
    resources: [
      'rte-test-util1.bundle.js'
    ]
  };
};
