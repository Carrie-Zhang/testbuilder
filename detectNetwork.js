// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.
  var twoPrefix = cardNumber.slice(0, 2);
  var threePrefix = cardNumber.slice(0, 3);
  var fourPrefix = cardNumber.slice(0, 4);
  var sixPrefix = cardNumber.slice(0, 6);

  if ((twoPrefix === '38' || twoPrefix === '39') && cardNumber.length === 14) {
  	return 'Diner\'s Club';
  }
  if ((twoPrefix === '34' || twoPrefix === '37') && cardNumber.length === 15) {
  	return 'American Express';
  }
  if (cardNumber.charAt(0) === '4' && !(['4903', '4905', '4911', '4936'].includes(fourPrefix)) && (cardNumber.length === 13 || cardNumber.length === 16 || cardNumber.length === 19)) {
  	return 'Visa';
 }

 var masterCardPrefix = ['51', '52', '53', '54', '55'];
 if ((masterCardPrefix.includes(twoPrefix)) && cardNumber.length === 16) {
 	return 'MasterCard';
 }

 var discoverPrefix = ['644', '645', '646', '647', '648', '649'];
 if ((cardNumber.startsWith('6011', 0) || discoverPrefix.includes(threePrefix) || twoPrefix === '65') && (cardNumber.length === 16 || cardNumber.length === 19)) {
 	return 'Discover';
 }

 if ((fourPrefix === '5018' || fourPrefix === '5020' || fourPrefix === '5038' || fourPrefix === '6304') && (cardNumber.length >= 12 && cardNumber.length <= 19)) {
 	return 'Maestro';
 }

 if (((parseInt(sixPrefix) >= 622126 && parseInt(sixPrefix) <= 622925) || (parseInt(threePrefix) >= 624 && parseInt(threePrefix) <= 626) || (parseInt(fourPrefix) >= 6282 && parseInt(fourPrefix) <= 6288)) && (cardNumber.length >= 16 && cardNumber.length <= 19)) {
 	return 'China UnionPay';
 }

 var switch4Prefix = ['4903', '4905', '4911', '4936', '6333', '6759'];
 var switch6Prefix = ['564182', '633110'];
 if ((switch4Prefix.includes(fourPrefix) || switch6Prefix.includes(sixPrefix)) && (cardNumber.length === 16 || cardNumber.length === 18 || cardNumber.length === 19)) {
 	return 'Switch';
 }

};



