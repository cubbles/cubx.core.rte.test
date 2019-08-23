const assert = require('assert');

module.exports = webpackageName => {
  assert.ok(webpackageName, 'Expected "webpackageName" to be defined.');
  return {
    resources: ['element.bundle.js'],
    members: [
      {
        memberId: 'member1',
        artifactId: `${webpackageName}-compound-dyn-con-elementary`
      },
      {
        memberId: 'member2',
        artifactId: `${webpackageName}-compound-dyn-con-elementary`
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
    connections: [],
    inits: [],
    dependencies: [
      {
        artifactId: `${webpackageName}-compound-dyn-con-elementary`
      },
      {
        webpackageId: 'bootstrap-3.3.5@2.0.1',
        artifactId: 'bootstrap-bootstrap-css-only'
      }
    ]
  };
};
