const assert = require('assert');

module.exports = webpackageName => {
  assert.ok(webpackageName, 'Expected "webpackageName" to be defined.');
  return {
    resources: ['element.html'],
    members: [
      {
        memberId: 'first',
        artifactId: `${webpackageName}-compound-with-template`
      },
      {
        memberId: 'second',
        artifactId: `${webpackageName}-compound-with-template`
      }
    ],
    slots: [
      {
        slotId: 'a',
        type: 'number',
        direction: [
          'input',
          'output'
        ]
      }
    ],
    connections: [
      {
        connectionId: 'inner',
        source: {
          memberIdRef: 'first',
          slot: 'a'
        },
        destination: {
          memberIdRef: 'second',
          slot: 'a'
        }
      },
      {
        connectionId: 'to-in',
        source: {
          slot: 'a'
        },
        destination: {
          memberIdRef: 'first',
          slot: 'a'
        }
      },
      {
        connectionId: 'to-out',
        source: {
          memberIdRef: 'second',
          slot: 'a'
        },
        destination: {
          slot: 'a'
        }
      }
    ],
    inits: [
      {
        slot: 'a',
        value: 0
      }
    ],
    dependencies: [
      {
        artifactId: `${webpackageName}-compound-with-template`
      },
      {
        artifactId: `${webpackageName}-canvas`
      }
    ]
  };
};
