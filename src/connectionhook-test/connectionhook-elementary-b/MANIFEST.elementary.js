const assert = require('assert');

module.exports = webpackageName => {
  assert.ok(webpackageName, 'Expected "webpackageName" to be defined.');
  return {
    resources: ['element.bundle.js'],
    runnables: [
      {
        name: 'SHOWROOM',
        path: '/SHOWROOM.html'
      },
      {
        name: 'test',
        path: '/test/index.html'
      }
    ],
    slots: [
      {
        slotId: 'a',
        type: 'number',
        direction: [
          'input'
        ],
        value: 15
      },
      {
        slotId: 'b',
        type: 'string',
        direction: [
          'input',
          'output'
        ],
        value: 'nothing'
      },
      {
        slotId: 'c',
        type: 'object',
        direction: [
          'input',
          'output'
        ],
        value: {
          name: 'xxx',
          firstname: 'yyy'
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
