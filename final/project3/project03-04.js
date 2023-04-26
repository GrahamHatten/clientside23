/*    JavaScript 7th Edition
      Chapter 3
      Project 03-04

      Application to write a list of customer reviews
      Author: 
      Date:   

      Filename: project03-04.js
*/

let reviewers = ["WillHa85", "GoldFry26", "Mittens41", "Tompkins8", "DanceQueen99"];
let reviewType = ["P", "N", "", "", "P"];
let stars = [5, 2, 1, 4, 5];
let reviewDates = ["11/18/2024", "11/17/2024", "11/15/2024", "11/10/2024", "11/23/2024"];
let reviews = [
   "I've owned all of the Dance Off games from the beginning. I have lost 6 pounds since I started playing.",
   "A so-so release of this well-established game. Where this release fails is in the choreography. Many of the moves follow predictable patterns. I hope the next release improves the choreography .",
   "The installation was buggy and kept crashing my gaming console. I spent several hours on tech support with no solution to my problem. I finally returned it and got my money back. I wish I could give it a zero star rating.",
   "The latest version of Dance Off improves upon the 8th Edition only slightly; still is one of the best dance-style games on the market.",
   "Dance Off ver. 9 is my absolute favorite! The choreography is so much fun and the music is amazing. I've played it every day since I got it and I can't get enough!"
];
let reviewTitles = ["My Favorite Workout Game", "Poor Choreography", "Buggy with Poor Tech Support", "Nice Improvement", "Best Dance Game Ever!"];

function starImages(rating) {
      let imageText = ""; // Declare a variable to store the HTML tags for star images
      for (let i = 1; i <= rating; i++) { // Loop through the rating value
        imageText += "<img src='star.png' alt=''>"; // Add star image tag to imageText variable
      }
      return imageText; // Return the generated HTML tags for star images
    }
    for (let i = 0; i < reviewers.length; i++) { // Loop through the reviewers array
      let reviewCode = ""; // Declare a variable to store the HTML code for the review table
      if (reviewType[i] === "P") { // Check if review type is positive
        reviewCode += "<table class='prime'>"; // Add HTML code for positive review table
      } else if (reviewType[i] === "N") { // Check if review type is negative
        reviewCode += "<table class='new'>"; // Add HTML code for negative review table
      } else {
        reviewCode += "<table>"; // Add HTML code for normal review table
      }
      reviewCode += "<tr><th>Review Titles</th><td>" + reviewTitles[i] + "</td></tr>"; // Add HTML code for review title
      reviewCode += "<tr><th>By</th><td>" + reviewers[i] + "</td></tr>"; // Add HTML code for reviewer name
      reviewCode += "<tr><th>Review Date</th><td>" + reviewDates[i] + "</td></tr>"; // Add HTML code for review date
      reviewCode += "<tr><td colspan='2'>" + reviews[i] + "</td></tr></table>"; // Add HTML code for review content
      document.getElementsByTagName("article")[0].insertAdjacentHTML("beforeend", reviewCode); // Insert reviewCode into the first article tag in the document
    }
    
    // Sort reviews by stars in descending order
    let sortedReviews = reviewers.map((reviewer, i) => ({reviewer, i})).sort((a, b) => stars[b.i] - stars[a.i]);
    
    