exports.default = function(string) {
  var indentation = '', length = 0, ret = [];
  data.split(/[\n\r]/g).forEach(function(line,index,array) {
    if(index == 0) {
      ret.push(line.replace(/[^\S]+/,function(match) {
        indentation = match;
        return '';
      }));
    } else if(line.startsWith(indentation)) {
      ret.push(line.replace(indentation,''));
    } else {
      ret.push(line);
    }
  });
  return ret.join('\n');
}
