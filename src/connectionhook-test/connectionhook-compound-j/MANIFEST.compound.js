const assert = require('assert');

module.exports = webpackageName => {
  assert.ok(webpackageName, 'Expected "webpackageName" to be defined.');
  return {
    resources: [],
    members: [
      {
        memberId: 'member-g',
        artifactId: `${webpackageName}-connectionhook-compound-g`
      },
      {
        memberId: 'member-f',
        artifactId: `${webpackageName}-connectionhook-compound-f`
      }
    ],
    slots: [],
    connections: [
      {
        connectionId: 'member-g:aa-member-f:aa',
        source: {
          memberIdRef: 'member-g',
          slot: 'aa'
        },
        destination: {
          memberIdRef: 'member-f',
          slot: 'aa'
        }
      },
      {
        connectionId: 'member-g:bb-member-f:bb',
        source: {
          memberIdRef: 'member-g',
          slot: 'bb'
        },
        destination: {
          memberIdRef: 'member-f',
          slot: 'bb'
        }
      },
      {
        connectionId: 'member-g:cc-member-f:cc',
        source: {
          memberIdRef: 'member-g',
          slot: 'cc'
        },
        destination: {
          memberIdRef: 'member-f',
          slot: 'cc'
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
        artifactId: `${webpackageName}-connectionhook-compound-g`
      },
      {
        artifactId: `${webpackageName}-connectionhook-compound-f`
      }
    ]
  };
};
