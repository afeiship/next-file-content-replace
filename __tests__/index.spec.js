(function () {
  require('../src');

  describe('api.basic test', () => {
    test('nx.replaceInFile', function () {
      nx.replaceInFile(
        '__tests__/**',
        [
          [/_____VERSION_____/gi, '______VERSION______'],
          [/FILE/g, 'FILE'],
          [/DESC/g, 'DESC']
        ],
        {
          ignore: ['*/*.spec.js']
        }
      );
    });
  });
})();
