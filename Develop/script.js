// Assignment code here

window.alert("Click the 'Generate Password' button to begin")

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");;
// Write password to the #password input
function writePassword() {
  debugger;
  passwordLength();
  specialCharacters();
  numericCharacters();
  lowercaseCharacters();
  uppercaseCharacters();

  var password = generatePassword();
  
  
  

  var passwordText = document.querySelector("#password");


  

  passwordText.value = password;

};

var passwordLength = function() {
  var length = "";
  
  // if nothing is written in
  if (length === "" || length === null) {
    lengthPrompt = prompt("How many characters would you like your password to contain? Please enter a number between 8 and 128.");
    
    if (lengthPrompt >= 8 && length <= 128){
      window.alert("Character length is " + lengthPrompt );
    
    } 
    else {
        window.alert("Please enter a number between 8 and 128");
        return passwordLength();
    }
  }
  console.log("password length is " + length)
};

var specialCharacters = function() {
  var specialConfirm = window.confirm(" Would you like to have special characters in your password?");
  if (specialConfirm) {
    window.alert("Special characters have been added to your password.");
  }
  else {
    window.alert("Special characters have NOT been added to your password.");

  }
    console.log("Special characters " + specialConfirm);
    return specialConfirm;
};

var numericCharacters = function() {
  var numericConfirm = window.confirm("Would you like to have numbers in your password?");
  if (numericConfirm) {
    window.alert("Numbers have been added to your password.");
  } 
  else{
    window.alert("Numbers have NOT been added to your password.");
  }
  console.log("Numeric characters " + numericConfirm);
  return numericConfirm;
};

var lowercaseCharacters = function() {
  var lowercaseConfirm = window.confirm("Would you like to have lowercase letters in your password?");
  if (lowercaseConfirm) {
    window.alert("Lowercase letters have been added to your password.");
  }
  else {
    window.alert("Lowercase letters have NOT been added to your password.");
  }
  console.log("Lowercase characters " + lowercaseConfirm);
  return lowercaseConfirm;
}

var uppercaseCharacters = function() {
  var uppercaseConfirm = window.confirm("Would you like to have uppercase letters in your password?");
  if (uppercaseConfirm) {
    window.alert("Uppercase letters have been added to your password.")
  }
  else {
    window.alert("Uppercase letters have NOT been added to your password.")
  }
  console.log("Uppercase characters " + uppercaseConfirm);
  return uppercaseConfirm;
}

 function generatePassword() {
   for (var i = 0; i < passwordLength.length; i++) {
     password = password + passwordLength;
     console.log();
   }
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
