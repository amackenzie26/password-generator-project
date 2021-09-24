// Assignment Code

const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateBtn = document.getElementById('generate');

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input

function writePassword() { 
  console.log("cheese");
  var password = passwordPrompt();
  var passwordText = document.querySelector("#password");
  

  passwordText.value = password;

}

var passwordPrompt = function () {
  let length = prompt ("Choose between 8 - 128 characters");
    if (length < 8) {
    alert("Minimum characters: 8, assinging value as 8");
    length = 8;
    }
    if (length > 128) {
      alert("Maximum characters: 128, assinging value as 128");
      length = 128;
      }
  let lower = confirm ("Do you want lower case characters?");
    
  let upper = confirm ("Do you want upper case characters?");
   
  let number = confirm ("Do you want numeric characters?");
    
  let symbol = confirm ("Do you want special characters?");
    
  // If user does not choose any character type above, default to lower case
  if (!lower && !upper && !number && !symbol) {
    alert("Must choose at least one character type, default to lower case");
    lower = true;
  }
    
    
    return generatePassword(lower, upper, number, symbol, length);
    
}

function generatePassword(lower, upper, number, symbol, length) {
 let generatedPassword = '';

const typesCount = lower + upper + number + symbol;

const typesArr = [{lower}, {upper}, {number}, {symbol}].filter
  (item => Object.values(item)[0]
  );
  
  console.log('typesArr: ', typesArr);

  if(typesCount == 0) {
    return '';
  }

  for(let i=0; i<length; i += typesCount) {
    typesArr.forEach(type => {
      const funcName = Object.keys(type)[0];
      console.log('funcName', funcName);

      generatedPassword += randomFunc[funcName]();
    });
  }

  const finalPassword = generatedPassword.slice(0, length);
  console.log(finalPassword);
  return finalPassword;

}
    function getRandomLower(){
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
function getRandomUpper(){
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function getRandomNumber(){
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
function getRandomSymbol(){
  const symbols = '!@#$%^&*(){}[]=<>/,.'
  return symbols[Math.floor(Math.random() * symbols.length)];
}


