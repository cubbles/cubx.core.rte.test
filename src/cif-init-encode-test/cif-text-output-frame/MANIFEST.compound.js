const assert = require('assert');

module.exports = webpackageName => {
  assert.ok(webpackageName, 'Expected "webpackageName" to be defined.');
  return {
    resources: ['element.bundle.js'],
    description: 'This is a cubbles-compound-component.',
    runnables: [
      {
        name: 'SHOWROOM',
        path: '/SHOWROOM.html',
        description: 'Demo app...'
      }
    ],
    slots: [
      {
        slotId: 'text',
        type: 'string',
        direction: [
          'input'
        ]
      }
    ],
    members: [
      {
        memberId: 'textOutput',
        artifactId: `${webpackageName}-cif-text-output`
      }
    ],
    connections: [
      {
        connectionId: 'me-to-text-output',
        source: {
          slot: 'text'
        },
        destination: {
          memberIdRef: 'textOutput',
          slot: 'text'
        }
      }
    ],
    inits: [
      {
        memberIdRef: 'textOutput',
        slot: 'text',
        value: '<a href="http://cubbles.github.io/" target="_blank"> cubbles.github.io </a>'
      }
    ],
    dependencies: [
      {
        artifactId: `${webpackageName}-cif-text-output`
      }
    ]
  };
};
