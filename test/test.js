var nx = require('next-js-core2');
var VERSION = '1.0.0';
require('../src/next-replace-in-file');

test('nx.replaceInFile', function() {
  nx.replaceInFile(
    'test/**',
    [
      [/VERSION/gi, '_VERSION_'],
      [/file/g, 'FILE'],
      [/description/g,'DESC'],
    ],
    {
      ignore: ['*/test.js']
    }
  );
});
