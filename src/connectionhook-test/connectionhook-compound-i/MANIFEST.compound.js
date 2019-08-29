const assert = require('assert');

module.exports = webpackageName => {
  assert.ok(webpackageName, 'Expected "webpackageName" to be defined.');
  return {
    resources: [],
    members: [
      {
        memberId: 'member-e',
        artifactId: `${webpackageName}-connectionhook-compound-e`
      },
      {
        memberId: 'member-h',
        artifactId: `${webpackageName}-connectionhook-compound-h`
      }
    ],
    slots: [],
    connections: [
      {
        connectionId: 'member-e:aa-member-h:aa',
        source: {
          memberIdRef: 'member-e',
          slot: 'aa'
        },
        destination: {
          memberIdRef: 'member-h',
          slot: 'aa'
        }
      },
      {
        connectionId: 'member-e:bb-member-h:bb',
        source: {
          memberIdRef: 'member-e',
          slot: 'bb'
        },
        destination: {
          memberIdRef: 'member-h',
          slot: 'bb'
        }
      },
      {
        connectionId: 'member-e:cc-member-h:cc',
        source: {
          memberIdRef: 'member-e',
          slot: 'cc'
        },
        destination: {
          memberIdRef: 'member-h',
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
        artifactId: `${webpackageName}-connectionhook-compound-e`
      },
      {
        artifactId: `${webpackageName}-connectionhook-compound-h`
      }
    ]
  };
};
