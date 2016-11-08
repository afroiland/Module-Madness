////require module 1 and 2, two export functions: return result of first module
//being passed into second, and return text “Account balance: \n”

var random = require('./operations/random');
var convert = require('./operations/convert');


var result1 = convert(random(100, 1000000));
var result2 = "Account balance: \n";

module.exports.result1 = result1;
module.exports.result2 = result2;

console.log(convert);
