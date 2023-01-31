/*    JavaScript 7th Edition
      Chapter 2
      Project 02-02

      Application to test for completed form
      Author: 
      Date:   

      Filename: project02-02.js
 */
      function verifyForm() {
            let name = document.getElementById("name").value;
            let email = document.getElementById("email").value;
            let phone = document.getElementById("phone").value;
            const checkForAt = email.indexOf("@");
                
            (name && email && phone)
                        ? window.alert("Thank you!")
                        : window.alert("Please fill in all fields");

            if(checkForAt !== -1){
                window.alert("Thank you for the email address");
            } else{
                window.alert("Please enter a valid email address");
            }
            
      }
            document.getElementById("submit").addEventListener("click",verifyForm);
