const assert = require('assert');

module.exports = webpackageName => {
  assert.ok(webpackageName, 'Expected "webpackageName" to be defined.');
  return {
    resources: ['element.bundle.js'],
    slots: [
      {
        slotId: 'clicked',
        type: 'boolean',
        direction: [
          'output'
        ]
      }
    ]
  };
};
