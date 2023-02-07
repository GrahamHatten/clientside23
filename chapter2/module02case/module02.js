/*    JavaScript 7th Edition
      Chapter 2
      Project 02-02 Case

      Author: Graham Hatten
      Date:  01/31/23 

      Filename: module02.js
 */

      function squareRoot(number){
       return Math.sqrt(number);
  }
  function squaredNumber(number){
        return number * number;
  }
  document.getElementById("squareRoot").onchange = function() {
        var sRoot = document.getElementById("squareRoot").value;
        document.getElementById("number").value = squareRoot(sRoot);
      }
  document.getElementById("number").onchange = function() {
        var nSquare = document.getElementById("number").value;
        document.getElementById("squareRoot").value = squaredNumber(nSquare);
      }
