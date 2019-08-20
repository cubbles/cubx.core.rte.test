const assert = require('assert');

module.exports = webpackageName => {
  assert.ok(webpackageName, 'Expected "webpackageName" to be defined.');
  return {
    resources: ['element.bundle.js'],
    description: 'Elementary component with 1 outputslot',
    slots: [
      {
        slotId: 'out',
        type: 'string',
        direction: [
          'output'
        ],
        value: ''
      }
    ]
  };
};
