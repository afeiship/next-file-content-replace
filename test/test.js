var nx = require('next-js-core2');
require('../src/next-replace-in-file');

test('nx.replaceInFile', function() {
  nx.replaceInFile('test/**', [[/VERSION/gi, 'VERSION' + Math.random()]]);
});
