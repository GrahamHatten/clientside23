"use strict";
/* JavaScript 7th Edition
Chapter 12
Project 12-03

Project to show a recipe with expanding/contracting content
Author:
Date:

Filename: project12-03.js
*/
/**
 * Make sure to click the word Ingredients
 * and Directions for the js to work properly
 */
// apply the click() method to the article > h2 selector
$("article > h2").click(function (e) {
      let heading = $(e.target);
      let list = heading.next();
      let headingImage = $(heading).children("img");

$(list).slideToggle(500);

let src = $(headingImage).attr("src");
// If src attribute value is equal to “plus.pg”, apply the attr() method to headingImage to set the src attribute value to “minus.png”;
if (src == "plus.png") {
      $(headingImage).attr("src", "minus.png");
} else {
// otherwise set the src attribute value to “plus.png”.
      $(headingImage).attr("src", "plus.png");
}
});