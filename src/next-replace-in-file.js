(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');
  var fs = require('fs');
  var path = require('path');
  var glob = require('glob');
  var CHARSET = 'utf-8';
  var DEFAULT_OPTIONS = { dot: true, ignore: '.git/*' };

  // next packages:
  require('next-array-replace');

  nx.replaceInFile = function(inGlob, inArray, inOptions) {
    var options = nx.mix(DEFAULT_OPTIONS, inOptions);
    var files = glob.sync(inGlob, options);
    var replaceInFile = function(target) {
      var fsState = fs.statSync(target);
      if (fsState.isFile(target)) {
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
