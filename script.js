// Assignment Code
var generateBtn = document.querySelector("#generate");

//global variables that we'll use to generate our passwords
var number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var upperLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var symbol = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "?", "/", "[", "]", "{", "}", "+", "=", "-", "_", ".", ","];
var lowerLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


// addEventListener to generate button
generateBtn.addEventListener("click", writePassword);




//function generates the components of the password to include what the user is requesting
function generatePassword() {
  var password = ' '; //this variable expects some value to it
  var characters = []; //creates new array from the chosen components the user chooses in order to get password generated from

  var passLength = prompt("How many characters would you like your password?  8 characters min - 128 characters max.");
  
  if (passLength < 8 || passLength > 128) {
    prompt("Password must be 8 - 128 characters."); //Ensures that user only uses the numbers requested

  var isUpperCase = confirm("Do you want it to contain upper case letters?");
  
  //if user confirms uppercase letters, this will ensure that it's included in the password
  if(isUpperCase) {
    characters.push(upperLetters);
  };

  var symbolEl = confirm("Would you like to include a symbol?");

  //if user confirms symbols, this will ensure that it's included in the password
  if(symbolEl) {
    characters.push(symbol);
  };

  var numberEl = confirm("Would you like to include a number?");
  
  //if user confirms numbers, this will ensure that it's included in the password
  if(numberEl) {
    characters.push(number);
  };
 
  //for loop generates password with included add-ons to character array and limiting to the length requested
for(var i=0; i < passLength.length; i++){
  password += characters.charAt(Math.floor(Math.random() * passLength.length));
};

return password;

};


//Write password to the #password input
//function writePassword() {
  //var password = generatePassword();
  //var passwordText = document.querySelector("#password");

 // passwordText.value = password;


//}
