const assert = require('assert');

module.exports = webpackageName => {
  assert.ok(webpackageName, 'Expected "webpackageName" to be defined.');
  return {
    resources: [],
    slots: [],
    members: [
      {
        memberId: 'member-a',
        artifactId: `${webpackageName}-connectionhook-elementary-a`
      },
      {
        memberId: 'member-b',
        artifactId: `${webpackageName}-connectionhook-elementary-b`
      }
    ],
    connections: [
      {
        connectionId: 'member-a:a-member-b:a',
        source: {
          memberIdRef: 'member-a',
          slot: 'a'
        },
        destination: {
          memberIdRef: 'member-b',
          slot: 'a'
        },
        hookFunction: 'cubx.hookFunctions.multiply10'
      },
      {
        connectionId: 'member-a:b-member-b:b',
        source: {
          memberIdRef: 'member-a',
          slot: 'b'
        },
        destination: {
          memberIdRef: 'member-b',
          slot: 'b'
        },
        hookFunction: 'cubx.hookFunctions.greeting'
      },
      {
        connectionId: 'member-a:c-member-b:c',
        source: {
          memberIdRef: 'member-a',
          slot: 'c'
        },
        destination: {
          memberIdRef: 'member-b',
          slot: 'c'
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
