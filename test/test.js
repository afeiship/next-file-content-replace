var nx = require('next-js-core2');
require('../src/next-file-content-replace');

test('nx.fileContentReplace', function() {
  // nx.fileContentReplace(result, obj1, obj2);
  // expect(result.name, obj1.name).toBe(null);

  nx.fileContentReplace('./test/project.config.json', /"appid": "(.*)"/, '__AKJLF__');
});
