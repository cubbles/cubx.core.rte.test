const assert = require('assert');

module.exports = webpackageName => {
  assert.ok(webpackageName, 'Expected "webpackageName" to be defined.');
  return {
    resources: ['element.bundle.js'],
    members: [
      {
        memberId: 'clicksender',
        artifactId: `${webpackageName}-repeated-value-elementary-e`
      },
      {
        memberId: 'clickreciver',
        artifactId: `${webpackageName}-repeated-value-elementary-f`
      }
    ],
    slots: [],
    connections: [
      {
        connectionId: 'click',
        source: {
          memberIdRef: 'clicksender',
          slot: 'clicked'
        },
        destination: {
          memberIdRef: 'clickreciver',
          slot: 'clicked'
        },
        repeatedValues: true
      }
    ],
    inits: [],
    dependencies: [
      {
        artifactId: `${webpackageName}-repeated-value-elementary-e`
      },
      {
        artifactId: `${webpackageName}-repeated-value-elementary-f`
      }
    ]
  };
};
