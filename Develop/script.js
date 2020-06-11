// Assignment code here

window.alert("Click the 'Generate Password' button to begin")

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");;

// Write password to the #password input
function writePassword() {
  passwordLength();
  specialCharacters();
  numericCharacters();
  lowercaseCharacters();
  uppercaseCharacters();
  if (specialConfirm === false && numericConfirm === false && lowercaseConfirm === false && uppercaseConfirm === false) {
    alert("Error no password parameters selected. Please select at least one.");
    return writePassword();
  }

  var password = generatePassword();
  
  
  

  var passwordText = document.querySelector("#password");


  

  passwordText.value = password;

};

var lengthPrompt;
function passwordLength() {
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
  console.log("password length is " + lengthPrompt)
};

// var specialCharacters 
var specialConfirm;
function specialCharacters() {
  specialConfirm = window.confirm(" Would you like to have special characters in your password?");
  if (specialConfirm) {
    window.alert("Special characters have been added to your password.");
  }
  else {
    window.alert("Special characters have NOT been added to your password.");

  }
    console.log("Special characters " + specialConfirm);
}

// var numericCharacters
var numericConfirm;
function numericCharacters(){
  numericConfirm = window.confirm("Would you like to have numbers in your password?");
  if (numericConfirm) {
    window.alert("Numbers have been added to your password.");
  } 
  else{
    window.alert("Numbers have NOT been added to your password.");
  }
  console.log("Numeric characters " + numericConfirm);
};

// var lowercaseCharacters
var lowercaseConfirm;
function lowercaseCharacters() {
  lowercaseConfirm = window.confirm("Would you like to have lowercase letters in your password?");
  if (lowercaseConfirm) {
    window.alert("Lowercase letters have been added to your password.");
  }
  else {
    window.alert("Lowercase letters have NOT been added to your password.");
  }
  console.log("Lowercase characters " + lowercaseConfirm);
};

// var uppercaseCharacters
var uppercaseConfirm;
function uppercaseCharacters() { 
  uppercaseConfirm = window.confirm("Would you like to have uppercase letters in your password?");
  if (uppercaseConfirm) {
    window.alert("Uppercase letters have been added to your password.")
  }
  else {
    window.alert("Uppercase letters have NOT been added to your password.")
  }
  console.log("Uppercase characters " + uppercaseConfirm);
};

function generatePassword() {
  if (specialConfirm === true) {
    console.log("@#@");
  } else{
    console.log("none here");
  }
}  
  
  //for (var i = 0; i < lengthPrompt.length; i++) {
    //var num = Math.floor(Math.random() * lengthPrompt.length) + 1;
    //console.log(num);
 // }



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
