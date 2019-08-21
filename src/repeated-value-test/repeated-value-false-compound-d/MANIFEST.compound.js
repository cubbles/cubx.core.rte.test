const assert = require('assert');

module.exports = webpackageName => {
  assert.ok(webpackageName, 'Expected "webpackageName" to be defined.');
  return {
    resources: ['element.bundle.js'],
    members: [
      {
        memberId: 'member1',
        artifactId: `${webpackageName}-repeated-value-false-compound-b`
      },
      {
        memberId: 'member2',
        artifactId: `${webpackageName}-repeated-value-false-compound-c`
      },
      {
        memberId: 'member3',
        artifactId: `${webpackageName}-repeated-value-false-compound-b`
      }
    ],
    slots: [],
    connections: [
      {
        connectionId: 'member1aa-member2aa',
        source: {
          memberIdRef: 'member1',
          slot: 'aa'
        },
        destination: {
          memberIdRef: 'member2',
          slot: 'aa'
        }
      },
      {
        connectionId: 'member1bb-member2bb',
        source: {
          memberIdRef: 'member1',
          slot: 'bb'
        },
        destination: {
          memberIdRef: 'member2',
          slot: 'bb'
        }
      },
      {
        connectionId: 'member1cc-member2cc',
        source: {
          memberIdRef: 'member1',
          slot: 'cc'
        },
        destination: {
          memberIdRef: 'member2',
          slot: 'cc'
        }
      },
      {
        connectionId: 'member1dd-member2dd',
        source: {
          memberIdRef: 'member1',
          slot: 'dd'
        },
        destination: {
          memberIdRef: 'member2',
          slot: 'dd'
        }
      },
      {
        connectionId: 'member2aa-member1aa',
        source: {
          memberIdRef: 'member2',
          slot: 'aa'
        },
        destination: {
          memberIdRef: 'member1',
          slot: 'aa'
        }
      },
      {
        connectionId: 'member2bb-member1bb',
        source: {
          memberIdRef: 'member2',
          slot: 'bb'
        },
        destination: {
          memberIdRef: 'member1',
          slot: 'bb'
        }
      },
      {
        connectionId: 'member2cc-member1cc',
        source: {
          memberIdRef: 'member2',
          slot: 'cc'
        },
        destination: {
          memberIdRef: 'member1',
          slot: 'cc'
        }
      },
      {
        connectionId: 'member2dd-member1dd',
        source: {
          memberIdRef: 'member2',
          slot: 'dd'
        },
        destination: {
          memberIdRef: 'member1',
          slot: 'dd'
        }
      },
      {
        connectionId: 'member2aa-member3aa',
        source: {
          memberIdRef: 'member2',
          slot: 'aa'
        },
        destination: {
          memberIdRef: 'member3',
          slot: 'aa'
        }
      },
      {
        connectionId: 'member2bb-member3bb',
        source: {
          memberIdRef: 'member2',
          slot: 'bb'
        },
        destination: {
          memberIdRef: 'member3',
          slot: 'bb'
        }
      },
      {
        connectionId: 'member2cc-member3cc',
        source: {
          memberIdRef: 'member2',
          slot: 'cc'
        },
        destination: {
          memberIdRef: 'member3',
          slot: 'cc'
        }
      },
      {
        connectionId: 'member2dd-member3dd',
        source: {
          memberIdRef: 'member2',
          slot: 'dd'
        },
        destination: {
          memberIdRef: 'member3',
          slot: 'dd'
        }
      },
      {
        connectionId: 'member1aa-member3aa',
        source: {
          memberIdRef: 'member1',
          slot: 'aa'
        },
        destination: {
          memberIdRef: 'member3',
          slot: 'aa'
        }
      },
      {
        connectionId: 'member1bb-member3bb',
        source: {
          memberIdRef: 'member1',
          slot: 'bb'
        },
        destination: {
          memberIdRef: 'member3',
          slot: 'bb'
        }
      },
      {
        connectionId: 'member1cc-member3cc',
        source: {
          memberIdRef: 'member1',
          slot: 'cc'
        },
        destination: {
          memberIdRef: 'member3',
          slot: 'cc'
        }
      },
      {
        connectionId: 'member1dd-member3dd',
        source: {
          memberIdRef: 'member1',
          slot: 'dd'
        },
        destination: {
          memberIdRef: 'member3',
          slot: 'dd'
        }
      },
      {
        connectionId: 'member3aa-member1aa',
        source: {
          memberIdRef: 'member3',
          slot: 'aa'
        },
        destination: {
          memberIdRef: 'member1',
          slot: 'aa'
        }
      },
      {
        connectionId: 'member3bb-member1bb',
        source: {
          memberIdRef: 'member3',
          slot: 'bb'
        },
        destination: {
          memberIdRef: 'member1',
          slot: 'bb'
        }
      },
      {
        connectionId: 'member3cc-member1cc',
        source: {
          memberIdRef: 'member3',
          slot: 'cc'
        },
        destination: {
          memberIdRef: 'member1',
          slot: 'cc'
        }
      },
      {
        connectionId: 'member3dd-member1dd',
        source: {
          memberIdRef: 'member3',
          slot: 'dd'
        },
        destination: {
          memberIdRef: 'member1',
          slot: 'dd'
        }
      },
      {
        connectionId: 'member3aa-member2aa',
        source: {
          memberIdRef: 'member3',
          slot: 'aa'
        },
        destination: {
          memberIdRef: 'member2',
          slot: 'aa'
        }
      },
      {
        connectionId: 'member3bb-member2bb',
        source: {
          memberIdRef: 'member3',
          slot: 'bb'
        },
        destination: {
          memberIdRef: 'member2',
          slot: 'bb'
        }
      },
      {
        connectionId: 'member3cc-member2cc',
        source: {
          memberIdRef: 'member3',
          slot: 'cc'
        },
        destination: {
          memberIdRef: 'member2',
          slot: 'cc'
        }
      },
      {
        connectionId: 'member3dd-member2dd',
        source: {
          memberIdRef: 'member3',
          slot: 'dd'
        },
        destination: {
          memberIdRef: 'member2',
          slot: 'dd'
        }
      }
    ],
    inits: [],
    dependencies: [
      {
        artifactId: `${webpackageName}-repeated-value-false-compound-b`
      },
      {
        artifactId: `${webpackageName}-repeated-value-false-compound-c`
      }
    ]
  };
};
