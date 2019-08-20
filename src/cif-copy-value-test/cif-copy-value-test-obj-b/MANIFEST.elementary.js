const assert = require('assert');

module.exports = webpackageName => {
  assert.ok(webpackageName, 'Expected "webpackageName" to be defined.');
  return {
    resources: ['element.bundle.js'],
    slots: [
      {
        slotId: 'a',
        type: 'object',
        direction: [
          'input',
          'output'
        ],
        value: {
          label: 'slot a',
          value: 10
        }
      },
      {
        slotId: 'b',
        type: 'object',
        direction: [
          'input',
          'output'
        ],
        value: {
          label: 'slot b',
          value: 20
        }
      },
      {
        slotId: 'c',
        type: 'object',
        direction: [
          'input',
          'output'
        ],
        value: {
          label: 'slot c',
          value: 'c-value'
        }
      },
      {
        slotId: 'd',
        type: 'object',
        direction: [
          'input',
          'output'
        ],
        value: {
          label: 'slot d',
          value: 'd-value'
        }
      }
    ]
  };
};
