const assert = require('assert');

module.exports = webpackageName => {
  assert.ok(webpackageName, 'Expected "webpackageName" to be defined.');
  return {
    resources: ['element.bundle.js'],
    members: [
      {
        memberId: 'inner',
        artifactId: `${webpackageName}-connection-hook-message-viewer`
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
    connections: [
      {
        connectionId: 'internal-ingoing',
        source: {
          slot: 'message'
        },
        destination: {
          memberIdRef: 'inner',
          slot: 'message'
        },
        hookFunction: "function(value,next){ var newValue = value + ' (4)'; next(newValue);}"
      },
      {
        connectionId: 'internal-outgoing',
        source: {
          memberIdRef: 'inner',
          slot: 'message'
        },
        destination: {
          slot: 'message'
        },
        hookFunction: "function(value,next){ var newValue = value + ' (5)'; next(newValue);}"
      }
    ],
    inits: [],
    dependencies: [
      {
        artifactId: `${webpackageName}-connection-hook-message-viewer`
      }
    ]
  };
};
