const assert = require('assert');

module.exports = webpackageName => {
  assert.ok(webpackageName, 'Expected "webpackageName" to be defined.');
  return {
    resources: ['element.bundle.js'],
    slots: [
      {
        slotId: 'a',
        type: 'number',
        direction: [
          'input',
          'output'
        ],
        value: 10
      },
      {
        slotId: 'b',
        type: 'string',
        direction: [
          'input',
          'output'
        ],
        value: 'a string'
      },
      {
        slotId: 'c',
        type: 'boolean',
        direction: [
          'input',
          'output'
        ],
        value: true
      },
      {
        slotId: 'd',
        type: 'object',
        direction: [
          'input',
          'output'
        ],
        value: {
          label: 'd value',
          value: 'object value d'
        }
      }
    ]
  };
};
