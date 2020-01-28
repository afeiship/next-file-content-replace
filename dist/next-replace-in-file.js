/*!
 * name: @feizheng/next-replace-in-file
 * description: File content replace for next.
 * url: https://github.com/afeiship/next-replace-in-file
 * version: 1.0.0
 * date: 2020-01-28 23:12:08
 * license: MIT
 */

(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');
  var fs = require('fs');
  var globby = require('globby');
  var CHARSET = 'utf-8';
  var DEFAULT_OPTIONS = { dot: true, ignore: ['.git'] };

  // next packages:
  require('@feizheng/next-array-replace');

  nx.replaceInFile = function(inFiles, inArray, inOptions) {
    var options = nx.mix(DEFAULT_OPTIONS, inOptions);
    var files = globby.sync(inFiles, options);
    var replaceInFile = function(filename) {
      var content = fs.readFileSync(filename, CHARSET);
      var result = nx.arrayReplace(content, inArray);
      fs.writeFileSync(filename, result);
    };

    // replace files:
    files.forEach(function(filename) {
      var fsState = fs.statSync(filename);
      if (fsState.isFile(filename)) {
        replaceInFile(filename);
      }
    });
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.replaceInFile;
  }
})();

//# sourceMappingURL=next-replace-in-file.js.map
