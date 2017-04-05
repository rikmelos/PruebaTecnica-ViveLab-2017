var Combinatorics = require('js-combinatorics');

exports.add = (a, b) => a+b;

exports.permute = function permute(array){
  cmb = Combinatorics.permutation(array);
  return cmb.toArray();
}

exports.concat = function concat(array){
  var concatenatedList = [];
  for (var element of array){
    link = element.join('');
    concatenatedList.push(parseInt(link));
  }
  return concatenatedList;
}

exports.max = function max(array){
  return Math.max.apply(null, array);
}

exports.dispart = function dispart(string){
  var temp = new Array();
  temp = string.split(",");
  var disengaged = [];
  for (var element of temp){
    disengaged.push(element.trim());
  }
  return disengaged;
}
