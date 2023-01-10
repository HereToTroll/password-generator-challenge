// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];
let passwordArr =[];
let passwordLength = 0;
let specialCharactersConfirmation = undefined;
let numericCharactersConfirmation = undefined;
let lowerCasedCharactersConfirmation = undefined;
let upperCasedCharactersConfirmation = undefined;
// Pseudocode 
// Ask about password length
// Ask about special characters and generate random ammount < passwordLength  and push to array
// Ask about numeric characters and generate random ammount < passwordLength - amount of special characters generated and push to array
// Ask about lower case characters generate random ammount < passwordLength - amount of special characters generated - numeric characters generated and push to array
// Ask about upper case characters generate random ammount < passwordLength - amount of special characters generated - numeric characters generated - amount of lower case generated and push to array
// Mix password array using sort with random
// Use for/for each to display every character of Array


// Function to prompt user for password options
function getPasswordOptions() { 
  passwordLength = prompt ("Please enter desirable password length from 10 to 64");
    if (passwordLength >= 10 && passwordLength <= 64 ) { // Making sure user selects password length in the given range
      
      specialCharactersConfirmation = confirm("Would you like to include special characters?"); // making boolean promt answers to be a variable to reuse it later in functions.
      numericCharactersConfirmation = confirm ("Would you like to include numeric characters?");
      lowerCasedCharactersConfirmation = confirm ("Would you like to include lower cased characters?");
      upperCasedCharactersConfirmation = confirm ("Would you like to include upper cased characters?");
      
    }
    else alert("PLease enter length from 10 to 64");
}
// Function for getting a random element from an array
function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];  
}


//Function to get random amount of  "random!" elements 
// function rand(bool,arr,arr2,psw) {
//   for (let i = 0 ; i < psw; i++) {
//     if (bool === true && arr2[psw-1] === undefined) {
//       for (let i = 0; i < arr2.length - Math.floor(Math.random()*(arr2.length + 1)) +1; i++){
//         arr2.unshift(getRandom (arr));
//       }
//     }
// }
// }

function rand1(bool,arr,arr2){        // function to add random character random amount of times in the password array. For some reason this random is "Pseudo?". 
  if (bool === true && arr[passwordLength-1] === undefined) { // After initial password generation it seem to give almost identical password to the initial, but as soon as you refresh the page everything changes.
    for (let i = 0; i < arr.length - Math.floor(Math.random()*(arr.length + 1)) +1; i++){  // So it seems to be random only during initial generation and after page was refreshed. Maybe it only sorts existing array after pressing the button
      arr.unshift(getRandom (arr2));
    }
  }
}

// Function to generate password with user input
function generatePassword() {
  for (let i = 0 ; i < passwordLength; i++) {
    rand1(specialCharactersConfirmation,passwordArr,specialCharacters); 
    rand1(numericCharactersConfirmation,passwordArr,numericCharacters);
    rand1(lowerCasedCharactersConfirmation,passwordArr,lowerCasedCharacters);
    rand1(upperCasedCharactersConfirmation,passwordArr,upperCasedCharacters);
  // if (specialCharactersConfirmation === true && passwordArr[passwordLength-1] === undefined) {
  //   for (let i = 0; i < passwordArr.length - Math.floor(Math.random()*(passwordArr.length + 1)) +1; i++){
  //     passwordArr.unshift(getRandom (specialCharacters));
  //   }
  // }
  // if (numericCharactersConfirmation === true && passwordArr[passwordLength-1] === undefined) {
  //   for (let i = 0; i < passwordArr.length - Math.floor(Math.random()*(passwordArr.length + 1)) +1; i++){
  //     passwordArr.unshift(getRandom (numericCharacters));
  //   }
  // }
  // if (lowerCasedCharactersConfirmation === true && passwordArr[passwordLength-1] === undefined) {
  //   for (let i = 0; i < passwordArr.length - Math.floor(Math.random()*(passwordArr.length + 1)) +1; i++){
  //     passwordArr.unshift(getRandom (lowerCasedCharacters));
  //   }
  // }
  // if (upperCasedCharactersConfirmation === true && passwordArr[passwordLength-1] === undefined) {
  //   for (let i = 0; i < passwordArr.length - Math.floor(Math.random()*(passwordArr.length + 1)) +1; i++){
  //     passwordArr.unshift(getRandom (upperCasedCharacters));
  //   }
  // } 
}
  // rand(specialCharactersConfirmation,specialCharacters,passwordArr,passwordLength);
  // rand(numericCharactersConfirmation,numericCharacters,passwordArr,passwordLength);
  // rand(lowerCasedCharactersConfirmation,lowerCasedCharacters,passwordArr,passwordLength);
  // rand(upperCasedCharactersConfirmation,upperCasedCharacters,passwordArr,passwordLength);
  passwordArr.sort(() => .5 - Math.random() );
  console.log(passwordArr); // Used for testing 
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');
  
  passwordText.value = passwordArr.join(""); // used join method to remove array comma separation 
}
// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
getPasswordOptions();
generatePassword();

// for (let i = 0; i < passwordArr.length - Math.floor(Math.random()*(passwordArr.length + 1)) + 10; i++){
//   passwordArr.unshift(getRandom (specialCharacters));
// }
// for (let i = 0; i < passwordArr.length - Math.floor(Math.random()*(passwordArr.length + 1)) + 10; i++){
//   passwordArr.unshift(getRandom (numericCharacters));
// }
// for (let i = 0; i < passwordArr.length - Math.floor(Math.random()*(passwordArr.length + 1)) + 10; i++){
//   passwordArr.unshift(getRandom (numericCharacters));
// }
// for (let i = 0; i < passwordArr.length - Math.floor(Math.random()*(passwordArr.length + 1)) + 10; i++){
//   passwordArr.unshift(getRandom (numericCharacters));
// }


//Math.floor(Math.random() * (maximum - minimum + 1)) + minimum