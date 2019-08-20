const assert = require('assert');

module.exports = webpackageName => {
  assert.ok(webpackageName, 'Expected "webpackageName" to be defined.');
  return {
    resources: ['element.bundle.js'],
    description: 'cif-test-a connected with cif-test-b',
    slots: [
      {
        slotId: 'aa',
        type: 'number',
        direction: [
          'input',
          'output'
        ]
      },
      {
        slotId: 'bb',
        type: 'number',
        direction: [
          'input',
          'output'
        ]
      },
      {
        slotId: 'cc',
        type: 'string',
        direction: [
          'input',
          'output'
        ]
      },
      {
        slotId: 'dd',
        type: 'string',
        direction: [
          'input',
          'output'
        ]
      }
    ],
    members: [
      {
        memberId: 'member-a',
        artifactId: `${webpackageName}-cif-test-a`
      },
      {
        memberId: 'member-b',
        artifactId: `${webpackageName}-cif-test-b`
      }
    ],
    connections: [
      {
        connectionId: 'con1',
        source: {
          memberIdRef: 'member-a',
          slot: 'a'
        },
        destination: {
          memberIdRef: 'member-b',
          slot: 'a'
        }
      },
      {
        connectionId: 'con2',
        source: {
          memberIdRef: 'member-a',
          slot: 'b'
        },
        destination: {
          memberIdRef: 'member-b',
          slot: 'b'
        }
      },
      {
        connectionId: 'con3',
        source: {
          memberIdRef: 'member-a',
          slot: 'c'
        },
        destination: {
          memberIdRef: 'member-b',
          slot: 'c'
        }
      },
      {
        connectionId: 'con4',
        source: {
          memberIdRef: 'member-a',
          slot: 'd'
        },
        destination: {
          memberIdRef: 'member-b',
          slot: 'd'
        }
      },
      {
        connectionId: 'con5',
        source: {
          memberIdRef: 'member-a',
          slot: 'a'
        },
        destination: {
          slot: 'aa'
        }
      },
      {
        connectionId: 'con6',
        source: {
          memberIdRef: 'member-a',
          slot: 'b'
        },
        destination: {
          slot: 'bb'
        }
      },
      {
        connectionId: 'con7',
        source: {
          memberIdRef: 'member-a',
          slot: 'c'
        },
        destination: {
          slot: 'cc'
        }
      },
      {
        connectionId: 'con8',
        source: {
          memberIdRef: 'member-a',
          slot: 'd'
        },
        destination: {
          slot: 'dd'
        }
      },
      {
        connectionId: 'con9',
        source: {
          slot: 'aa'
        },
        destination: {
          memberIdRef: 'member-a',
          slot: 'a'
        }
      },
      {
        connectionId: 'con10',
        source: {
          slot: 'bb'
        },
        destination: {
          memberIdRef: 'member-a',
          slot: 'b'
        }
      },
      {
        connectionId: 'con11',
        source: {
          slot: 'cc'
        },
        destination: {
          memberIdRef: 'member-a',
          slot: 'c'
        }
      },
      {
        connectionId: 'con12',
        source: {
          slot: 'dd'
        },
        destination: {
          memberIdRef: 'member-a',
          slot: 'd'
        }
      }
    ],
    inits: [
      {
        slot: 'aa',
        value: 111
      },
      {
        slot: 'bb',
        value: 222
      },
      {
        slot: 'cc',
        value: '--- c ---'
      },
      {
        slot: 'dd',
        value: '--- d ---'
      },
      {
        memberIdRef: 'member-a',
        slot: 'a',
        value: 9
      },
      {
        memberIdRef: 'member-a',
        slot: 'b',
        value: 8
      },
      {
        memberIdRef: 'member-a',
        slot: 'c',
        value: 'a-c'
      },
      {
        memberIdRef: 'member-a',
        slot: 'd',
        value: 'a-d'
      },
      {
        memberIdRef: 'member-b',
        slot: 'a',
        value: 5
      },
      {
        memberIdRef: 'member-b',
        slot: 'b',
        value: 6
      },
      {
        memberIdRef: 'member-b',
        slot: 'c',
        value: 'b-c'
      },
      {
        memberIdRef: 'member-b',
        slot: 'd',
        value: 'b-d'
      }
    ],
    dependencies: [
      {
        artifactId: `${webpackageName}-cif-test-a`
      },
      {
        artifactId: `${webpackageName}-cif-test-b`
      }
    ]
  };
};
