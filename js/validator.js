
// Define variables
const bannedChars = /^[a-zA-Z0-9_@!]*$/; // Banned characters

// Returns value of selected text input elements
function getTextInput(element) {
    return document.getElementById(element).value;
}

// Toggles the element's functionality and changes the styling.
function changeStyle(element, disabled, background, color, border, message) {
    element = document.getElementById(element);
    element.disabled = disabled;
    element.style.background = background;
    element.style.color = color;
    element.style.border = border;
}

// Listens for key to be lifted and compares input value to list of banned characters.
document.getElementById('password').addEventListener('keyup', function() {
    
    let password = getTextInput('password');

    // Disable button if banned characters are present and changes styling to grey it out
    if (!bannedChars.test(password)) {
        changeStyle('submit', true, 'grey', '#5a5a5a', null);
        changeStyle('password', null, null, null, "1px red solid", );
        console.log("Password is BAD!");

    // Enable button if password is okay and changes styling to show it's enabled
    } else {
        changeStyle('submit', true, 'orange', 'white', null);
        changeStyle('password', null, null, null, null, null);
        console.log("Password is OK!");
    }
});


