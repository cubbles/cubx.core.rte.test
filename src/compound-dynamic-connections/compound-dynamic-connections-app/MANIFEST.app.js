const assert = require('assert');

module.exports = (webpackageName) => {
  assert.ok(webpackageName, 'Expected "webpackageName" to be defined.');
  return {
    runnables: [
      {
        name: 'compound-dynamic-connections-app',
        path: '/index.html'
      },
      {
        name: 'example configs',
        path: '/example-dynamicConnections.txt',
        description: 'example dynamic connection configs...'
      }
    ],
    dependencies: [
      {
        artifactId: `${webpackageName}-compound-dyn-con-outer-compound`
      }
    ],
    resources: []
  };
};
