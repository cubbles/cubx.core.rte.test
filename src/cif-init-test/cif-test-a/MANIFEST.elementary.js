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
        type: 'number',
        direction: [
          'input',
          'output'
        ],
        value: '20'
      },
      {
        slotId: 'c',
        type: 'string',
        direction: [
          'input',
          'output'
        ],
        value: 'c-value'
      },
      {
        slotId: 'd',
        type: 'string',
        direction: [
          'input',
          'output'
        ],
        value: 'd-value'
      }
    ]
  };
};
