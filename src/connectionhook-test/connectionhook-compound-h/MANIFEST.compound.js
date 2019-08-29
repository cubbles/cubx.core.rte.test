const assert = require('assert');

module.exports = webpackageName => {
  assert.ok(webpackageName, 'Expected "webpackageName" to be defined.');
  return {
    resources: [],
    members: [
      {
        memberId: 'member-b',
        artifactId: `${webpackageName}-connectionhook-elementary-b`
      }
    ],
    slots: [
      {
        slotId: 'aa',
        type: 'number',
        direction: [
          'input'
        ]
      },
      {
        slotId: 'bb',
        type: 'string',
        direction: [
          'input'
        ]
      },
      {
        slotId: 'cc',
        type: 'object',
        direction: [
          'input'
        ]
      }
    ],
    connections: [
      {
        connectionId: 'aa-member-b:a',
        source: {
          slot: 'aa'
        },
        destination: {
          memberIdRef: 'member-b',
          slot: 'a'
        }
      },
      {
        connectionId: 'bb-member-b:b',
        source: {
          slot: 'bb'
        },
        destination: {
          memberIdRef: 'member-b',
          slot: 'b'
        }
      },
      {
        connectionId: 'cc-member-b:c',
        source: {
          slot: 'cc'
        },
        destination: {
          memberIdRef: 'member-b',
          slot: 'c'
        }
      }
    ],
    inits: [],
    runnables: [
      {
        name: 'SHOWROOM',
        path: '/SHOWROOM.html'
      }
    ],
    dependencies: [
      {
        artifactId: `${webpackageName}-connectionhook-elementary-b`
      },
      {
        artifactId: `${webpackageName}-connectionhook-transform-functions`
      },
      {
        webpackageId: 'bootstrap-3.3.5@2.0.1',
        artifactId: 'bootstrap'
      }
    ]
  };
};
