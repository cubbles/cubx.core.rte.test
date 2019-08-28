const assert = require('assert');

module.exports = webpackageName => {
  assert.ok(webpackageName, 'Expected "webpackageName" to be defined.');
  return {
    resources: ['element.bundle.js'],
    members: [
      {
        memberId: 'first',
        artifactId: `${webpackageName}-connection-hook-message-viewer`
      },
      {
        memberId: 'second',
        artifactId: `${webpackageName}-connection-hook-message-viewer-compound`
      },
      {
        memberId: 'third',
        artifactId: `${webpackageName}-connection-hook-message-viewer-compound`
      },
      {
        memberId: 'fourth',
        artifactId: `${webpackageName}-connection-hook-message-viewer`
      }
    ],
    connections: [
      {
        connectionId: 'firstToSecond',
        source: {
          memberIdRef: 'first',
          slot: 'message'
        },
        destination: {
          memberIdRef: 'second',
          slot: 'message'
        },
        hookFunction: "function(value,next){ var newValue = value + ' (1)'; next(newValue);}"
      },
      {
        connectionId: 'secondToThird',
        source: {
          memberIdRef: 'second',
          slot: 'message'
        },
        destination: {
          memberIdRef: 'third',
          slot: 'message'
        },
        hookFunction: "function(value,next){ var newValue = value + ' (2)'; next(newValue);}"
      },
      {
        connectionId: 'thirdToForth',
        source: {
          memberIdRef: 'third',
          slot: 'message'
        },
        destination: {
          memberIdRef: 'fourth',
          slot: 'message'
        },
        hookFunction: "function(value,next){ var newValue = value + ' (3)'; next(newValue);}"
      }
    ],
    inits: [],
    runnables: [
      {
        name: 'SHOWROOM',
        path: '/SHOWROOM/index.html'
      },
      {
        name: 'test',
        path: '/test/index.html'
      }
    ],
    dependencies: [
      {
        artifactId: `${webpackageName}-connection-hook-message-viewer`
      },
      {
        artifactId: `${webpackageName}-connection-hook-message-viewer-compound`
      }
    ]
  };
};
