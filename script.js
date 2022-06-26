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

///////////////////////////////////////////////////////

 //function as defined by assignment started code 
function generatePassword(){

  //Create a prompt for password length.
  let passwordLength= prompt("How many characters in your password? (Enter a number between 8 and 128.)");
  let characterAmount = parseInt(passwordLength);

    //If a input is not number return an error and restart the function.
    if (isNaN(characterAmount)){
      alert("Please enter a number.");
      return(" ");
    }

    //If input is less than 8 return an error and restart the function.
    if (passwordLength < 8) {
      alert("Please enter a number between 8 and 128.");
      return(" ");
    }
    //If input is greater than 128 return an error and restart the function.
    if (passwordLength > 128){
      alert("Please enter a number between 8 and 128.");
      return(" ");
    }
   
//Confirm prompts - lowercase, uppercase, numbers, spacial characters
  var includeLowercase = confirm("This password must include lowercase letter?"); 
  
  var includeUppercase= confirm("This password must include uppercase letters?");

  var includeNumbers= confirm("This password must include numbers?");

  var includeSpecialCharacters=confirm("Password must include special characters?");
    
  //If all confirm prompts are false display an error message and restart the function.
  if ((includeLowercase | includeUppercase | includeNumbers | includeSpecialCharacters) != true) {
     alert("Password must contain at least one character type.");
    return ("");
    }
    //ASCII Arrays for possible character types.
    var entireLower = arrayFromLowToHigh(97, 123);
    var entireUpper = arrayFromLowToHigh(65, 91);
    var entireNumber = arrayFromLowToHigh(48, 58);
    var entireSpecialChar = arrayFromLowToHigh(33, 48).concat(
      arrayFromLowToHigh(58, 65)
  ).concat(arrayFromLowToHigh(91, 97)
  ).concat(arrayFromLowToHigh(123, 127)
  );

    //Create an array based upon user input of desired character types. Concatenate one array.
    let passwordCharacters = [];
      if (includeLowercase === true) {
        passwordCharacters = passwordCharacters.concat(entireLower);
      }
      if (includeUppercase === true){
        passwordCharacters = passwordCharacters.concat(entireUpper);
      }
      if (includeNumbers === true){
        passwordCharacters = passwordCharacters.concat(entireNumber);
      }
      if (includeSpecialCharacters === true) {
        passwordCharacters = passwordCharacters.concat(entireSpecialChar);
      }

  //Assign a variable which will hold the password after the for loop runs.
  var passwordDisplay = [];

   //Loop for character passworddisplay - integer
  for (let i = 0; i <  characterAmount; i++) {
  var characterCode = passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)]
  passwordDisplay.push(String.fromCharCode(characterCode));
  }
  return passwordDisplay.join(''); 
  /*turn array into a string*/
}
//Loop through low to high characters
function arrayFromLowToHigh(low, high) {
  const array = [];
  for (let i = low; i < high; i++) {
      array.push(i);
  }
  return array;
}