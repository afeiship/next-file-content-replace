/*!
 * name: @jswork/next-replace-in-file
 * description: File content replace for next.
 * homepage: https://github.com/afeiship/next-replace-in-file
 * version: 1.0.0
 * date: 2020-11-17T09:55:27.713Z
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var fs = require('fs');
  var globby = require('globby');
  var CHARSET = 'utf-8';
  var DEFAULT_OPTIONS = { dot: true, debug: false, ignore: ['.git'] };

  // next packages:
  require('@jswork/next-array-replace');

  nx.replaceInFile = function (inFiles, inArray, inOptions) {
    var options = nx.mix(DEFAULT_OPTIONS, inOptions);
    var files = globby.sync(inFiles, options);
    var replaceInFile = function (filename) {
      var content = fs.readFileSync(filename, CHARSET);
      var result = nx.arrayReplace(content, inArray);
      fs.writeFileSync(filename, result);
    };

    // add debug params:
    options.debug && console.log('[debug]:', files);

    // replace files:
    files.forEach(function (filename) {
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
