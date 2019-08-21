const assert = require('assert');

module.exports = webpackageName => {
  assert.ok(webpackageName, 'Expected "webpackageName" to be defined.');
  return {
    resources: ['element.bundle.js'],
    slots: [
      {
        slotId: 'aa',
        type: 'number',
        direction: [
          'input',
          'output'
        ],
        value: 19
      },
      {
        slotId: 'bb',
        type: 'string',
        direction: [
          'input',
          'output'
        ],
        value: 'bb string'
      },
      {
        slotId: 'cc',
        type: 'boolean',
        direction: [
          'input',
          'output'
        ],
        value: true
      },
      {
        slotId: 'dd',
        type: 'boolean',
        direction: [
          'input',
          'output'
        ],
        value: {
          label: 'dd value',
          value: 'object value'
        }
      }
    ],
    members: [
      {
        memberId: 'innerElementary',
        artifactId: `${webpackageName}-repeated-value-elementary-a`
      }
    ],
    connections: [
      {
        connectionId: 'aa-a',
        source: {
          slot: 'aa'
        },
        destination: {
          memberIdRef: 'innerElementary',
          slot: 'a'
        }
      },
      {
        connectionId: 'bb-b',
        source: {
          slot: 'bb'
        },
        destination: {
          memberIdRef: 'innerElementary',
          slot: 'b'
        }
      },
      {
        connectionId: 'cc-c',
        source: {
          slot: 'cc'
        },
        destination: {
          memberIdRef: 'innerElementary',
          slot: 'c'
        }
      },
      {
        connectionId: 'dd-d',
        source: {
          slot: 'dd'
        },
        destination: {
          memberIdRef: 'innerElementary',
          slot: 'd'
        }
      },
      {
        connectionId: 'a-aa',
        source: {
          memberIdRef: 'innerElementary',
          slot: 'a'
        },
        destination: {
          slot: 'aa'
        }
      },
      {
        connectionId: 'b-bb',
        source: {
          memberIdRef: 'innerElementary',
          slot: 'b'
        },
        destination: {
          slot: 'bb'
        }
      },
      {
        connectionId: 'c-cc',
        source: {
          memberIdRef: 'innerElementary',
          slot: 'c'
        },
        destination: {
          slot: 'cc'
        }
      },
      {
        connectionId: 'd-dd',
        source: {
          memberIdRef: 'innerElementary',
          slot: 'd'
        },
        destination: {
          slot: 'dd'
        }
      }
    ],
    inits: [],
    dependencies: [
      {
        artifactId: `${webpackageName}-repeated-value-elementary-a`
      }
    ]
  };
};
