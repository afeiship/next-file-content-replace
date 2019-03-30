(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');
  var fs = require('fs');
  var glob = require('glob');
  var CHARSET = 'utf-8';
  var DEFAULT_OPTIONS = { dot: true, ignore: '.git/*' };

  // next packages:
  require('next-array-replace');

  nx.replaceInFile = function(inFiles, inArray, inOptions) {
    var options = nx.mix(DEFAULT_OPTIONS, inOptions);
    var files = typeof inFiles === 'string' ? glob.sync(inFiles, options) : inFiles;
    var replaceInFile = function(filename) {
      var fsState = fs.statSync(filename);
      if (fsState.isFile(filename)) {
        var content = fs.readFileSync(filename, CHARSET);
        var result = nx.arrayReplace(content, inArray);
        fs.writeFileSync(filename, result);
      }
    };

    // replace files:
    files.forEach(function(filename) {
      replaceInFile(filename);
    });
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.fileContentReplace;
  }
})();
