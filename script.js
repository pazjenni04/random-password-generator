// Assignment Code
var generateBtn = document.querySelector("#generate");

//global variables that we'll use to generate our passwords
var number = "0123456789";
var upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var symbol = "!@#$%^&*()-_+={[]}?/";
var lowerLetters = "abcdefghijklmnopqrstuvwxyz";


// addEventListener to generate button
generateBtn.addEventListener("click", writePassword);



//function generates the components of the password to include what the user is requesting
function generatePassword(pLength) {
  var password = ' '; //this variable expects some value to it
  var characters = ' '; //empty string, but as the user confirms the following vars then will generate a new string 

  var pLength = prompt("How many characters would you like your password?  8 characters min - 128 characters max.");

  
  if (pLength < 8 || pLength > 128) {
    prompt("Password must be 8 - 128 characters. Try Again."); //Ensures that user only uses the numbers requested

  };

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
  };

  if(symbolEl !==true && isUpperCase !== true && numberEl !== true && isLowerCase !==true) {
    confirm("You must choose at least one of the criteria's prompted in order to generate password.  Please try again.")
  };

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