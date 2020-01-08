/*

Version 1.0

Goal: Allow users to input data into a text field and prevent submitting the form if the input field contains banned characters.

Steps:
1. Define valid characters
2. Get the text input value
3. Listen for keypresses adding values to the input
4. Compare the input value to valid input characters to check for banned characters
5. If input contains banned characters, set the submit button to disabled and display a message that indicates the problem.
6. If the input does not contain banned characters, enable the submit button.

*/

var inputPassword = document.getElementById('password');
var submitButton = document.getElementById('submit');
var bannedChars = /^[a-zA-Z0-9_@!$]*$/;

// Returns value of selected text input element
function getTextInput(textInput) {
    var userInput = document.getElementById(textInput).value;
    return userInput;
}

// Listens for key to be lifted and compares input value to list of banned characters.
inputPassword.addEventListener('keyup', function() {
    
    var password = getTextInput('password');

    // Disable button if banned characters are present and changes styling to grey it out
    if (!bannedChars.test(password)) {
        console.log("Password is BAD");
        submitButton.disabled = true;
        submitButton.style.background = "grey";
        submitButton.style.color = "#5a5a5a";

    // Enable button if password is okay and changes styling to show it's enabled
    } else {
        console.log("Password is OK");
        submitButton.disabled = false;
        submitButton.style.background = "orange";
        submitButton.style.color = "white";
    }
});


