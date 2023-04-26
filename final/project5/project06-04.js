"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Project 06-04
      Project to turn a selection list into a selection of hypertext links
      Author: 
      Date:   
      Filename: project06-04.js
*/
// Selection lists in the web form
let make = document.getElementById("make");
let model = document.getElementById("model");
let trim = document.getElementById("trim");
let year = document.getElementById("year"); // Added year selection list
// Option elements within the selection lists
let makeOptions = document.querySelectorAll("select#make option");
let modelOptions = document.querySelectorAll("select#model option");
let trimOptions = document.querySelectorAll("select#trim option");
let yearOptions = document.querySelectorAll("select#year option"); // Added year option elements
// The number of options within each selection list
let makes = makeOptions.length;
let models = modelOptions.length;
let trims = trimOptions.length;
let years = yearOptions.length; // Added number of options for year
// Form button to generate the complete text of the selected vehicle
let selectVehicle = document.getElementById("selectVehicle");
// Paragraph containing the text of the selected vehicle
let vehicle = document.getElementById("vehicle");
// Function to show all options within a selection list
function showAll(selectList) {
   let options = selectList.options;
   let optionLength = options.length;
   
   for (let i = 0; i < optionLength; i++) {
      options[i].style.display = "block";
   }
}
// Function to filter options within a selection list based on a category
function filterSelect(selectList, category) {
   let options = selectList.options;
   let optionLength = options.length;
   
   for (let i = 0; i < optionLength; i++) {
      if (options[i].className === category) {
         options[i].style.display = "block";
      } else {
         options[i].style.display = "none";
      }
   }
}
// Event handler to modify the content of the Model selection list
// when the Make selection list changes
make.onchange = function() {
   let makeIndex = make.selectedIndex;
   let makeCategory = make.options[makeIndex].text;
   if (makeIndex === 0) {
      showAll(model);
   } else {
      filterSelect(model, makeCategory);
   }  
}
// Event handler to modify the content of the Trim selection list
// when the Model selection list changes
model.onchange = function() {
   let modelIndex = model.selectedIndex;
   let modelCategory = model.options[modelIndex].text;
   if (modelIndex === 0) {
      showAll(trim);
   } else {
      filterSelect(trim, modelCategory);
   }     
}
// Onclick event handler for the selectVehicle button
selectVehicle.onclick = function() {
   let makeIndex = make.selectedIndex;
   let modelIndex = model.selectedIndex;
   let trimIndex = trim.selectedIndex;
   let yearIndex = year.selectedIndex; // Added year selection index
   let makeText = make.options[makeIndex].text;
   let modelText = model.options[modelIndex].text;
   let trimText = trim.options[trimIndex].text;
   let yearText = year.options[yearIndex].text; // Added year text
   vehicle.textContent = yearText + " " + makeText + " " + modelText + " " + trimText; // Modified to include yearText
}
