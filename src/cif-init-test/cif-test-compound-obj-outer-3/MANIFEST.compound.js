const assert = require('assert');

module.exports = webpackageName => {
  assert.ok(webpackageName, 'Expected "webpackageName" to be defined.');
  return {
    resources: ['element.bundle.js'],
    members: [
      {
        memberId: 'member-a',
        artifactId: `${webpackageName}-cif-test-obj-a`
      },
      {
        memberId: 'member-compound',
        artifactId: `${webpackageName}-cif-test-compound-obj-3`
      },
      {
        memberId: 'member-b',
        artifactId: `${webpackageName}-cif-test-obj-b`
      }
    ],
    slots: [
      {
        slotId: 'outer',
        type: 'string',
        direction: [
          'input',
          'output'
        ]
      }
    ],
    connections: [
      {
        connectionId: 'con1',
        source: {
          memberIdRef: 'member-compound',
          slot: 'aa'
        },
        destination: {
          memberIdRef: 'member-b',
          slot: 'a'
        }
      },
      {
        connectionId: 'con2',
        source: {
          memberIdRef: 'member-compound',
          slot: 'bb'
        },
        destination: {
          memberIdRef: 'member-b',
          slot: 'b'
        }
      },
      {
        connectionId: 'con3',
        source: {
          memberIdRef: 'member-compound',
          slot: 'cc'
        },
        destination: {
          memberIdRef: 'member-b',
          slot: 'c'
        }
      },
      {
        connectionId: 'con4',
        source: {
          memberIdRef: 'member-compound',
          slot: 'dd'
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
          memberIdRef: 'member-compound',
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
          memberIdRef: 'member-compound',
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
          memberIdRef: 'member-compound',
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
          memberIdRef: 'member-compound',
          slot: 'dd'
        }
      }
    ],
    inits: [
      {
        slot: 'outer',
        value: {
          label: 'slot outer',
          value: 'bbb'
        }
      },
      {
        memberIdRef: 'member-a',
        slot: 'b',
        value: {
          label: 'slot b',
          value: 200
        }
      },
      {
        memberIdRef: 'member-a',
        slot: 'c',
        value: {
          label: 'slot c',
          value: '### c ####'
        }
      },
      {
        memberIdRef: 'member-a',
        slot: 'd',
        value: {
          label: 'slot d',
          value: '### d ###'
        }
      },
      {
        memberIdRef: 'member-compound',
        slot: 'bb',
        value: {
          label: 'slot bb',
          value: 888
        }
      },
      {
        memberIdRef: 'member-compound',
        slot: 'cc',
        value: {
          label: 'slot cc',
          value: ';)'
        }
      },
      {
        memberIdRef: 'member-compound',
        slot: 'dd',
        value: {
          label: 'slot dd',
          value: '=:)'
        }
      },
      {
        memberIdRef: 'member-b',
        slot: 'a',
        value: {
          label: 'slot a',
          value: 101
        }
      },
      {
        memberIdRef: 'member-b',
        slot: 'b',
        value: {
          label: 'slot b',
          value: 202
        }
      },
      {
        memberIdRef: 'member-b',
        slot: 'c',
        value: {
          label: 'slot c',
          value: 'xxx c xxx'
        }
      },
      {
        memberIdRef: 'member-b',
        slot: 'd',
        value: {
          label: 'slot d',
          value: 'xxx d xxx'
        }
      }
    ],
    dependencies: [
      {
        artifactId: `${webpackageName}-cif-test-obj-a`
      },
      {
        artifactId: `${webpackageName}-cif-test-obj-b`
      },
      {
        artifactId: `${webpackageName}-cif-test-compound-obj-3`
      }
    ]
  };
};
