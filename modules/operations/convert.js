//convert number to USD string value

function convertToUSD(num) {
  return num.toLocaleString('en', {style: 'currency', currency: 'USD'});
}

module.exports = convertToUSD;

//console.log(convertToUSD(77));
