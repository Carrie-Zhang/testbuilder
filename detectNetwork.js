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
  var startNum = cardNumber.substr(0, 2);
  if ((startNum === '38' || startNum === '39') && cardNumber.length === 14) {
  	return 'Diner\'s Club';
  }
  if ((startNum === '34' || startNum === '37') && cardNumber.length === 15) {
  	return 'American Express';
  }
  if (cardNumber.charAt(0) === '4' && (cardNumber.length === 13 || cardNumber.length === 16 || cardNumber.length === 19)) {
  	return 'Visa';
 }

 var masterCardPrefix = ['51', '52', '53', '54', '55'];
 if ((masterCardPrefix.includes(startNum)) && cardNumber.length === 16) {
 	return 'MasterCard';
 }

 var discoverPrefix = ['644', '645', '646', '647', '648', '649'];
 var discoverCardStart = cardNumber.slice(0, 3);
 if ((cardNumber.startsWith('6011', 0) || discoverPrefix.includes(discoverPrefix) || startNum === '65') && (cardNumber.length === 16 || cardNumber.length === 19)) {
 	return 'Discover';
 }

 var maestroStartNum = cardNumber.slice(0, 4);
 var maestroCardLength = [12, 13, 14, 15, 16, 17, 18, 19];
 if ((maestroStartNum === '5018' || maestroStartNum === '5020' || maestroStartNum === '5038' || maestroStartNum === '6304') && maestroCardLength.includes(cardNumber.length)) {
 	return 'Maestro';
 }
};



