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
  var characters = ' '; //empty string, but as the user confirms the following vars then will generate a new string 

  var pLength = prompt("How many characters would you like your password?  8 characters min - 128 characters max.");

  
  if (pLength < 8 || pLength > 128) {
    prompt("Password must be 8 - 128 characters. Try Again."); //Ensures that user only uses the numbers requested

  }
  var isUpperCase = confirm("Do you want it to contain any upper case letters?");
  
  //if user confirms uppercase letters, this will ensure that Upper case letters gets added into the characters string
  if(isUpperCase === true) {
    characters+= upperLetters;
  };

  var symbolEl = confirm("Would you like to include a symbol?");

  //if user confirms symbols, this will ensure that symbols gets added into the characters string
  if(symbolEl === true) {
    characters+= symbol;
  };

  var numberEl = confirm("Would you like to include numbers?");
  
  //if user confirms numbers, this will ensure that numbers gets added into the characters string
  if(numberEl === true) {
    characters+= number;
  };
 
  //if user confirms lower case letters, this will ensure that lower case letters gets added into the characters string
  var isLowerCase = confirm("Would you like to include lower case letters?");

  if(isLowerCase === true) {
    characters+= lowerLetters;
  }

  //for loop generates password with included add-ons to character string and limiting to the length requested
for(var i=0; i < pLength; i++){
  password += characters.charAt(Math.floor(Math.random() * characters.length));
};

return password;

};


//Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


}