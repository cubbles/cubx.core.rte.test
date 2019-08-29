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
        value: 'Hallo World!'
      },
      {
        slotId: 'c',
        type: 'object',
        direction: [
          'input',
          'output'
        ],
        value: {
          name: 'Doe',
          firstname: 'John'
        }
      }
    ],
    dependencies: [
      {
        webpackageId: 'bootstrap-3.3.5@2.0.1',
        artifactId: 'bootstrap'
      }
    ]
  };
};
