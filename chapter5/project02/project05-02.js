"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Project 05-02

      Project to move images between a photo bucket and photo list.
      Author: 
      Date:   

      Filename: project05-02.js
*/
// Get all images in the document
var images = document.getElementsByTagName("img");

// Get the elements with the ids "photo_bucket" and "photo_list"
var photoBucket = document.getElementById("photo_bucket");
var photoList = document.getElementById("photo_list");

// Loop through all the images and add an onclick event handler to each
for (var i = 0; i < images.length; i++) {
  images[i].onclick = function() {
    // If the parent element is photo_bucket, move the image to photo_list
    if (this.parentNode.id === "photo_bucket") {
      var newItem = document.createElement("li");
      photoList.appendChild(newItem);
      newItem.appendChild(this);
    }
    // Otherwise, move the image to photo_bucket
    else {
      var oldItem = this.parentNode;
      photoBucket.appendChild(this);
      oldItem.parentNode.removeChild(oldItem);
    }
  };
}

