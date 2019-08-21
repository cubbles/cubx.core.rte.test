const assert = require('assert');

module.exports = webpackageName => {
  assert.ok(webpackageName, 'Expected "webpackageName" to be defined.');
  return {
    resources: ['element.bundle.js'],
    members: [
      {
        memberId: 'member-a',
        artifactId: `${webpackageName}-cif-test-a`
      },
      {
        memberId: 'member-compound',
        artifactId: `${webpackageName}-cif-test-compound-5`
      },
      {
        memberId: 'member-b',
        artifactId: `${webpackageName}-cif-test-b`
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
          memberIdRef: 'member-a',
          slot: 'b'
        },
        destination: {
          memberIdRef: 'member-compound',
          slot: 'bb'
        }
      },
      {
        connectionId: 'con4',
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
        connectionId: 'con5',
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
        memberIdRef: 'member-a',
        slot: 'a',
        value: 100
      },
      {
        memberIdRef: 'member-a',
        slot: 'b',
        value: 200
      },
      {
        memberIdRef: 'member-a',
        slot: 'c',
        value: '### c ####'
      },
      {
        memberIdRef: 'member-a',
        slot: 'd',
        value: '### d ###'
      },
      {
        memberIdRef: 'member-compound',
        slot: 'aa',
        value: 999
      },
      {
        memberIdRef: 'member-compound',
        slot: 'bb',
        value: 888
      },
      {
        memberIdRef: 'member-compound',
        slot: 'cc',
        value: ';)'
      },
      {
        memberIdRef: 'member-compound',
        slot: 'dd',
        value: '=:)'
      },
      {
        memberIdRef: 'member-b',
        slot: 'a',
        value: 101
      },
      {
        memberIdRef: 'member-b',
        slot: 'b',
        value: 202
      },
      {
        memberIdRef: 'member-b',
        slot: 'c',
        value: 'xxx c xxx'
      },
      {
        memberIdRef: 'member-b',
        slot: 'd',
        value: 'xxx d xxx'
      }
    ],
    dependencies: [
      {
        artifactId: `${webpackageName}-cif-test-a`
      },
      {
        artifactId: `${webpackageName}-cif-test-b`
      },
      {
        artifactId: `${webpackageName}-cif-test-compound-5`
      }
    ]
  };
};
