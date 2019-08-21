const assert = require('assert');

module.exports = webpackageName => {
  assert.ok(webpackageName, 'Expected "webpackageName" to be defined.');
  return {
    resources: ['element.bundle.js'],
    runnables: [
      {
        name: 'SHOWROOM',
        path: '/SHOWROOM.html'
      }
    ],
    slots: [
      {
        slotId: 'message',
        type: 'string',
        direction: [
          'input',
          'output'
        ]
      },
      {
        slotId: 'attached',
        type: 'object',
        direction: [
          'input'
        ],
        value: false
      }
    ]
  };
};
