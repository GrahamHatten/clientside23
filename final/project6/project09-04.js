"use strict";
/*    JavaScript 7th Edition
      Chapter 9
      Project 09-04

      Project to store high scores from a game in a cookie
      Author: 
      Date:   

      Filename: project09-04.js
*/

/* Page Objects */
let bestText = document.getElementById("best");
let clockTimer = document.getElementById("timer");

// Custom event that runs when the puzzle is solved
window.addEventListener("puzzleSolved", updateRecord);

// Event listener that is run when the page loads
window.addEventListener("load", function() {
  if (document.cookie) {
    bestText.textContent = getBestTime() + " seconds";
  }
});

// Function to get the user's current best time
function getBestTime() {
  if (document.cookie) {
    let cookieArray = document.cookie.split("=");
    return parseInt(cookieArray[1]);
  } else {
    return 9999;
  }
}

// Function to update the user's best time
function updateRecord() {
  let solutionTime = parseInt(clockTimer.textContent);
  let bestTime = getBestTime();
  if (solutionTime < bestTime) {
    bestTime = solutionTime;
    bestText.textContent = bestTime + " seconds";
  }
  let date = new Date();
  date.setTime(date.getTime() + (90 * 24 * 60 * 60 * 1000)); // 90 days
  document.cookie = "puzzle8Best=" + bestTime + "; expires=" + date.toUTCString() + "; path=/";
}
