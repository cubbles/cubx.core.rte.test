const assert = require('assert');

module.exports = webpackageName => {
  assert.ok(webpackageName, 'Expected "webpackageName" to be defined.');
  return {
    resources: ['element.bundle.js'],
    description: 'This is an elementary-component based on Polymer.',
    runnables: [
      {
        name: 'SHOWROOM',
        path: '/SHOWROOM.html',
        description: 'Demo app...'
      }
    ],
    slots: [
      {
        slotId: 'text',
        type: 'string',
        direction: [
          'input'
        ]
      }
    ]
  };
};
