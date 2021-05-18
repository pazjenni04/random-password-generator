// Assignment Code
var generateBtn = document.querySelector("#generate");

//generates a random upper letter
function randomUpperCase() {
  var upperLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  let randomValue = upperLetters[Math.floor(Math.random() * upperLetters.length)];
  
  return console.log(randomValue);

}

//generates a random lower letter
function randomLowerCase() {
  var lowerLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  let randomValue = lowerLetters[Math.floor(Math.random() * lowerLetters.length)];

  return console.log(randomValue);
}

//generates a random number
function randomNumber() {
  var number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  let randomValue = number[Math.floor(Math.random() * number.length)];

  return console.log(randomValue);
}

//generates a random symbol
function randomSymbol() {
  var symbol = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "?", "/", "[", "]", "{", "}", "+", "=", "-", "_", ".", ","];
  let randomValue = symbol[Math.floor(Math.random() * symbol.length)];

  return console.log(randomValue);
}
  

randomLowerCase();
randomUpperCase();
randomNumber();
randomSymbol();


//generatePassword(upperCase.length);

// Write password to the #password input
//function writePassword() {
  //var password = generatePassword();
  //var passwordText = document.querySelector("#password");

  //passwordText.value = password;

//}


// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);

//writePassword();