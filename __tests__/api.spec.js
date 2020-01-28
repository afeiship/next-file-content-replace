const nx = require('@feizheng/next-js-core2');
require('../src/next-replace-in-FILE');

describe('api.basic test', () => {
  test('nx.replaceInFile', function() {
    nx.replaceInFile(
      '__tests__/**',
      [
        [/_VERSION_/gi, '__VERSION__'],
        [/FILE/g, 'FILE'],
        [/DESC/g, 'DESC']
      ],
      {
        ignore: ['*/test.js']
      }
    );
  });
});
