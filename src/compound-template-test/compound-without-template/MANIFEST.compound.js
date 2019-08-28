const assert = require('assert');

module.exports = webpackageName => {
  assert.ok(webpackageName, 'Expected "webpackageName" to be defined.');
  return {
    resources: ['element.bundle.js'],
    members: [
      {
        memberId: 'source',
        artifactId: `${webpackageName}-compound-template-elementary-1`
      },
      {
        memberId: 'target',
        artifactId: `${webpackageName}-compound-template-elementary-2`
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
        connectionId: 'transfer',
        source: {
          memberIdRef: 'source',
          slot: 'a'
        },
        destination: {
          memberIdRef: 'target',
          slot: 'a'
        }
      },
      {
        connectionId: 'to-in',
        source: {
          slot: 'a'
        },
        destination: {
          memberIdRef: 'source',
          slot: 'a'
        }
      },
      {
        connectionId: 'to-out',
        source: {
          memberIdRef: 'target',
          slot: 'a'
        },
        destination: {
          slot: 'a'
        }
      }
    ],
    inits: [
      {
        memberIdRef: 'source',
        slot: 'a',
        value: 15
      },
      {
        slot: 'a',
        value: 20
      }
    ],
    dependencies: [
      {
        artifactId: `${webpackageName}-compound-template-elementary-1`
      },
      {
        artifactId: `${webpackageName}-compound-template-elementary-2`
      },
      {
        artifactId: `${webpackageName}-canvas`
      }
    ]
  };
};
