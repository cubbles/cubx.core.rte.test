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
        hookFunction: 'function(value,next) { value = Number(value)*10; next(value);}'
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
        hookFunction: "function(value, next) { value = 'Greeting: ' + value;  next(value);};"
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
        hookFunction: "function(value, next) { var newValue = {}; newValue.name = value.firstname ? value.firstname + ' ' : ''; newValue.name += value.name; next(newValue);};"
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
        webpackageId: 'bootstrap-3.3.5@2.0.1',
        artifactId: 'bootstrap'
      }
    ]
  };
};
