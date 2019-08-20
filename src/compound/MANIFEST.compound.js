const assert = require('assert');

module.exports = webpackageName => {
  assert.ok(webpackageName, 'Expected "webpackageName" to be defined.');
  return {
    description: 'A simple compound component.',
    // resources: ['element.html'],
    resources: [],
    runnables: [
      {
        name: 'SHOWROOM',
        path: '/SHOWROOM.html'
      }
    ],
    dependencies: [{ artifactId: `${webpackageName}-elementary-example` }],
    slots: [
      { slotId: 'outerMessage', type: 'string', direction: ['input', 'output'] }
    ],
    // member declarations
    members: [
      { artifactId: `${webpackageName}-elementary-example`, memberId: 'first' },
      { artifactId: `${webpackageName}-elementary-example`, memberId: 'second' }
    ],
    // connection declarations
    connections: [
      {
        connectionId: 'compound-message-to-first-message',
        source: { slot: 'a' },
        destination: { memberIdRef: 'first', slot: 'a' }
      },
      {
        connectionId: 'first-message-to-second-message',
        source: { memberIdRef: 'first', slot: 'a' },
        destination: { memberIdRef: 'second', slot: 'a' }
      },
      {
        connectionId: 'second-message-to-compound-message',
        source: { memberIdRef: 'second', slot: 'a' },
        destination: { slot: 'a' }
      }
    ]
  };
};
