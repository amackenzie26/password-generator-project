// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() { 
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var charLength = []
var lowerCaseChar = "abcdefghijklmnopqrstuvwxyz"
var upperCaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numbers = "123456789"
var symbolsc= "!@#$%^&*><?][}{"

var generatePassword = function () {
  var passwordLength = prompt ("Choose between 8 - 128 characters");

  function checkInput(passwordLength !== "8"); {
    return;
  }
  function checkInput(passwordLength <== "8" || >== "128");
  console.log (passwordLength)
  var lowerCase = confirm ("Do you want lower case characters?"); 
}

  var charIndex = Math.floor(Math.random() * charLength.length);

  var lowerCase = confirm ("Do you want lower case characters?"); 
  var upperCase = confirm ("Do you want upper case characters?");
  var numericCase = confirm ("Do you want numeric characters?");
  var symbolCase = confirm ("Do you want special characters?");



if (lowercase)

}



