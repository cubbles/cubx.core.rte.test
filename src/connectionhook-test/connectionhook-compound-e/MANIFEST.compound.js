const assert = require('assert');

module.exports = webpackageName => {
  assert.ok(webpackageName, 'Expected "webpackageName" to be defined.');
  return {
    resources: [],
    members: [
      {
        memberId: 'member-a',
        artifactId: `${webpackageName}-connectionhook-elementary-a`
      }
    ],
    slots: [
      {
        slotId: 'aa',
        type: 'number',
        direction: [
          'output'
        ]
      },
      {
        slotId: 'bb',
        type: 'string',
        direction: [
          'output'
        ]
      },
      {
        slotId: 'cc',
        type: 'object',
        direction: [
          'output'
        ]
      }
    ],
    connections: [
      {
        connectionId: 'member-a:a-aa',
        source: {
          memberIdRef: 'member-a',
          slot: 'a'
        },
        destination: {
          slot: 'aa'
        },
        hookFunction: 'cubx.hookFunctions.multiply10'
      },
      {
        connectionId: 'member-a:b-bb',
        source: {
          memberIdRef: 'member-a',
          slot: 'b'
        },
        destination: {
          slot: 'bb'
        },
        hookFunction: 'cubx.hookFunctions.greeting'
      },
      {
        connectionId: 'member-a:c-cc',
        source: {
          memberIdRef: 'member-a',
          slot: 'c'
        },
        destination: {
          slot: 'cc'
        },
        hookFunction: 'cubx.hookFunctions.fullName'
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
        artifactId: `${webpackageName}-connectionhook-elementary-a`
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
