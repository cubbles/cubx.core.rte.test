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
      }
    ],
    dependencies: [
      {
        webpackageId: 'bootstrap-3.3.5@2.0.1',
        artifactId: 'bootstrap-bootstrap-css-only'
      },
      {
        webpackageId: 'jquery-2.1.4@2.0.0',
        artifactId: 'jquery'
      }
    ]
  };
};
