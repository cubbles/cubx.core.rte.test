const assert = require('assert');

module.exports = webpackageName => {
  assert.ok(webpackageName, 'Expected "webpackageName" to be defined.');
  return {
    slots: [
      {
        slotId: 'a',
        type: 'number',
        direction: [
          'input',
          'output'
        ],
        value: 10
      }
    ],
    resources: ['element.bundle.js'],
    runnables: [
      {
        name: 'SHOWROOM',
        path: '/SHOWROOM.html'
      }
    ]
  };
};
