const assert = require('assert');

module.exports = webpackageName => {
  assert.ok(webpackageName, 'Expected "webpackageName" to be defined.');
  return {
    resources: ['element.html', 'element.bundle.js'],
    members: [
      {
        memberId: 'input',
        artifactId: `${webpackageName}-connectionhook-elementary-a`
      },
      {
        memberId: 'output1',
        artifactId: `${webpackageName}-connectionhook-elementary-b`
      },
      {
        memberId: 'output2',
        artifactId: `${webpackageName}-connectionhook-elementary-b`
      }
    ],
    connections: [
      {
        connectionId: 'a-to-output1:a',
        source: {
          memberIdRef: 'input',
          slot: 'a'
        },
        destination: {
          memberIdRef: 'output1',
          slot: 'a'
        },
        hookFunction: 'examples.test-connection-hook'
      },
      {
        connectionId: 'a-to-output2:a',
        source: {
          memberIdRef: 'input',
          slot: 'a'
        },
        destination: {
          memberIdRef: 'output2',
          slot: 'a'
        },
        hookFunction: "function (value, next) { var newValue = 'value: ' + JSON.stringify(value) + ', source slots: ' + JSON.stringify(this.source.slots()) + ' , destination slots: ' + JSON.stringify(this.destination.slots()); next(newValue);}"
      },
      {
        connectionId: 'b-to-output1:b',
        source: {
          memberIdRef: 'input',
          slot: 'b'
        },
        destination: {
          memberIdRef: 'output1',
          slot: 'b'
        },
        hookFunction: 'examples.test-connection-hook'
      },
      {
        connectionId: 'b-to-output2:b',
        source: {
          memberIdRef: 'input',
          slot: 'b'
        },
        destination: {
          memberIdRef: 'output2',
          slot: 'b'
        },
        hookFunction: "function (value, next) { var newValue = 'value: ' + JSON.stringify(value) + ', source slots: ' + JSON.stringify(this.source.slots()) + ' , destination slots: ' + JSON.stringify(this.destination.slots()); next(newValue);}"
      },
      {
        connectionId: 'c-to-output1:c',
        source: {
          memberIdRef: 'input',
          slot: 'c'
        },
        destination: {
          memberIdRef: 'output1',
          slot: 'c'
        },
        hookFunction: 'examples.test-connection-hook-object'
      },
      {
        connectionId: 'c-to-output2:c',
        source: {
          memberIdRef: 'input',
          slot: 'c'
        },
        destination: {
          memberIdRef: 'output2',
          slot: 'c'
        },
        hookFunction: 'function (value, next) { value.sourceSlots = this.source.slots(); value.destinationSlots = this.destination.slots(); next(value);}'
      }
    ],
    inits: [],
    slots: [],
    runnables: [
      {
        name: 'SHOWROOM',
        path: '/SHOWROOM.html'
      }
    ],
    dependencies: [
      {
        webpackageId: 'bootstrap-3.3.5@2.0.1',
        artifactId: 'bootstrap-bootstrap-css-only'
      },
      {
        artifactId: `${webpackageName}-connectionhook-elementary-a`
      },
      {
        artifactId: `${webpackageName}-connectionhook-elementary-b`
      },
      {
        artifactId: `${webpackageName}-connectionhook-util`
      }
    ]
  };
};
