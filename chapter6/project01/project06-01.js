"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Project 06-01

      Project to validate a form used for setting up a new account
      Author:Graham Hatten 
      Date: 03/24/2023  

      Filename: project06-01.js
*/
// Declare variables
const submitButton = document.querySelector('#submitButton');
const pwd = document.querySelector('#pwd');
const pwd2 = document.querySelector('#pwd2');

// Add event listener for click event
submitButton.addEventListener('click', function() {
  // Check password validity and match
  if (!pwd.value.match(/^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{8,}$/)) {
    // Display validation message for invalid password
    alert('Your password must be at least 8 characters with at least one letter and one number');
  } else if (pwd.value !== pwd2.value) {
    // Display validation message for mismatched passwords
    alert('Your passwords must match');
  } else {
    // Clear validation message
    alert('');
  }
});


