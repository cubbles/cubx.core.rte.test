const assert = require('assert');

module.exports = webpackageName => {
  assert.ok(webpackageName, 'Expected "webpackageName" to be defined.');
  return {
    resources: ['element.bundle.js'],
    members: [
      {
        memberId: 'inner1',
        artifactId: `${webpackageName}-compound-dyn-con-inner-compound`
      },
      {
        memberId: 'inner2',
        artifactId: `${webpackageName}-compound-dyn-con-inner-compound`
      }
    ],
    slots: [],
    connections: [],
    inits: [],
    dependencies: [
      {
        artifactId: `${webpackageName}-compound-dyn-con-inner-compound`
      }
    ]
  };
};
