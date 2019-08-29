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
        memberId: 'member-h',
        artifactId: `${webpackageName}-connectionhook-compound-h`
      }
    ],
    slots: [],
    connections: [
      {
        connectionId: 'member-g:aa-member-h:aa',
        source: {
          memberIdRef: 'member-g',
          slot: 'aa'
        },
        destination: {
          memberIdRef: 'member-h',
          slot: 'aa'
        },
        hookFunction: 'cubx.hookFunctions.multiply10'
      },
      {
        connectionId: 'member-g:bb-member-h:bb',
        source: {
          memberIdRef: 'member-g',
          slot: 'bb'
        },
        destination: {
          memberIdRef: 'member-h',
          slot: 'bb'
        },
        hookFunction: 'cubx.hookFunctions.greeting'
      },
      {
        connectionId: 'member-g:cc-member-h:cc',
        source: {
          memberIdRef: 'member-g',
          slot: 'cc'
        },
        destination: {
          memberIdRef: 'member-h',
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
        artifactId: `${webpackageName}-connectionhook-compound-g`
      },
      {
        artifactId: `${webpackageName}-connectionhook-compound-h`
      },
      {
        artifactId: `${webpackageName}-connectionhook-transform-functions`
      }
    ]
  };
};
