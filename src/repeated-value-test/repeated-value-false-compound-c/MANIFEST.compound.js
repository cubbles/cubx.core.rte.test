const assert = require('assert');

module.exports = webpackageName => {
  assert.ok(webpackageName, 'Expected "webpackageName" to be defined.');
  return {
    resources: ['element.bundle.js'],
    members: [
      {
        memberId: 'firstInnerElementary',
        artifactId: `${webpackageName}-repeated-value-elementary-a`
      },
      {
        memberId: 'secondInnerElementary',
        artifactId: `${webpackageName}-repeated-value-elementary-a`
      }
    ],
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
        type: 'string',
        direction: [
          'input',
          'output'
        ]
      },
      {
        slotId: 'cc',
        type: 'boolean',
        direction: [
          'input',
          'output'
        ]
      },
      {
        slotId: 'dd',
        type: 'object',
        direction: [
          'input',
          'output'
        ]
      }
    ],
    connections: [
      {
        connectionId: 'aa-firstInnerElementarya',
        source: {
          slot: 'aa'
        },
        destination: {
          memberIdRef: 'firstInnerElementary',
          slot: 'a'
        }
      },
      {
        connectionId: 'bb-firstInnerElementaryb',
        source: {
          slot: 'bb'
        },
        destination: {
          memberIdRef: 'firstInnerElementary',
          slot: 'b'
        }
      },
      {
        connectionId: 'cc-firstInnerElementaryc',
        source: {
          slot: 'cc'
        },
        destination: {
          memberIdRef: 'firstInnerElementary',
          slot: 'c'
        }
      },
      {
        connectionId: 'dd-firstInnerElementaryd',
        source: {
          slot: 'dd'
        },
        destination: {
          memberIdRef: 'firstInnerElementary',
          slot: 'd'
        }
      },
      {
        connectionId: 'firstInnerElementarya-secondInnerElementarya',
        source: {
          memberIdRef: 'firstInnerElementary',
          slot: 'a'
        },
        destination: {
          memberIdRef: 'secondInnerElementary',
          slot: 'a'
        }
      },
      {
        connectionId: 'firstInnerElementaryb-secondInnerElementaryb',
        source: {
          memberIdRef: 'firstInnerElementary',
          slot: 'b'
        },
        destination: {
          memberIdRef: 'secondInnerElementary',
          slot: 'b'
        }
      },
      {
        connectionId: 'firstInnerElementaryc-secondInnerElementaryc',
        source: {
          memberIdRef: 'firstInnerElementary',
          slot: 'c'
        },
        destination: {
          memberIdRef: 'secondInnerElementary',
          slot: 'c'
        }
      },
      {
        connectionId: 'firstInnerElementaryd-secondInnerElementaryd',
        source: {
          memberIdRef: 'firstInnerElementary',
          slot: 'd'
        },
        destination: {
          memberIdRef: 'secondInnerElementary',
          slot: 'd'
        }
      },
      {
        connectionId: 'secondInnerElementarya-firstInnerElementarya',
        source: {
          memberIdRef: 'secondInnerElementary',
          slot: 'a'
        },
        destination: {
          memberIdRef: 'firstInnerElementary',
          slot: 'a'
        }
      },
      {
        connectionId: 'secondInnerElementaryb-firstInnerElementaryb',
        source: {
          memberIdRef: 'secondInnerElementary',
          slot: 'b'
        },
        destination: {
          memberIdRef: 'firstInnerElementary',
          slot: 'b'
        }
      },
      {
        connectionId: 'secondInnerElementaryc-firstInnerElementaryc',
        source: {
          memberIdRef: 'secondInnerElementary',
          slot: 'c'
        },
        destination: {
          memberIdRef: 'firstInnerElementary',
          slot: 'c'
        }
      },
      {
        connectionId: 'secondInnerElementaryd-firstInnerElementaryd',
        source: {
          memberIdRef: 'secondInnerElementary',
          slot: 'd'
        },
        destination: {
          memberIdRef: 'firstInnerElementary',
          slot: 'd'
        }
      },
      {
        connectionId: 'secondInnerElementarya-aa',
        source: {
          memberIdRef: 'secondInnerElementary',
          slot: 'a'
        },
        destination: {
          slot: 'aa'
        }
      },
      {
        connectionId: 'secondInnerElementaryb-bb',
        source: {
          memberIdRef: 'secondInnerElementary',
          slot: 'b'
        },
        destination: {
          slot: 'bb'
        }
      },
      {
        connectionId: 'secondInnerElementaryc-cc',
        source: {
          memberIdRef: 'secondInnerElementary',
          slot: 'c'
        },
        destination: {
          slot: 'cc'
        }
      },
      {
        connectionId: 'secondInnerElementaryd-dd',
        source: {
          memberIdRef: 'secondInnerElementary',
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
