/*    JavaScript 7th Edition
      Chapter 2
      Project 02-01

      Celsius <-> Farenheit Coverter
      Author: 
      Date:   

      Filename: project02-01.js
 */

      function farenheitToCelsius(degree){
            return (degree - 32) / 1.8
      }
      function celsiusToFarenheit(degree){
            return (degree * 1.8) + 32
      }
      document.getElementById("cValue").onchange = function() {
            var cDegree = document.getElementById("cValue").value;
            document.getElementById("fValue").value = celsiusToFarenheit(cDegree);
          }
      document.getElementById("fValue").onchange = function() {
            var fDegree = document.getElementById("fValue").value;
            document.getElementById("cValue").value = farenheitToCelsius(fDegree);
          }
