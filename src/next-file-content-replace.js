(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');
  var fs = require('fs');
  var path = require('path');
  var CHARSET = 'utf-8';

  nx.fileContentReplace = function(inFile, inRegRe, inString) {
    var str = fs.readFileSync(inFile, CHARSET);
    str = str.replace(inRegRe, function(fullStr, match) {
      return fullStr.replace(match, inString);
    });
    fs.writeFileSync(inFile, str);
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.fileContentReplace;
  }
})();
