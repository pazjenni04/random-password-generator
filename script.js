// Assignment Code
var generateBtn = document.querySelector("#generate");
var number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var upperLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var symbol = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "?", "/", "[", "]", "{", "}", "+", "=", "-", "_", ".", ","];
var lowerLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var randomValue = symbol[Math.floor(Math.random() * symbol.length)];

//prompt to user how long they choose length?




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





function generatePassword() {
  var password = " "; //this variable expects some value to it
  var passLength= prompt("How many characters would you like your password?  8 characters min - 128 characters max.");
  var isUpperCase = confirm ("Do you want it to contain upper case letters?");
  for(var i=0; i < password.length; i++){

  }

  if (passLength < 8 || passLength > 128) {
    prompt("Password must be 8 - 128 characters.");
  }

  return passwordLength;
}




//Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


}




writePassword();
