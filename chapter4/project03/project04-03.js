// Maximum Length of Review
const MAX_REVIEW = 100;
document.getElementById("limit").innerHTML = MAX_REVIEW;

// Reference to elemets in the web page
let wordCountBox = document.getElementById("countValue");
let warningBox = document.getElementById("warningBox");


// Event listener for typing into the comment box
document.getElementById("comment").addEventListener("keyup", updateCount);

// Function to update the count with each keyup event
function updateCount() {
   // Set the warning box to an empty text string 
   warningBox.innerHTML = "";
   
   // Count the number of characters in the comment box
   let commentText = document.getElementById("comment").value;
   let charCount = countCharacters(commentText);

   // Try block to test charCount against MAX_REVIEW
   try {
      if (charCount > MAX_REVIEW) {
         throw new Error("You have exceeded the character count limit");
      }
   }
   // Catch block to handle exceptions
   catch (err) {
      warningBox.innerHTML = err.message;
   }
   // Finally block to update wordCountBox with charCount
   finally {
      wordCountBox.innerHTML = charCount;
   }
}

// Function to count the number of characters in a text string
function countCharacters(textStr) {
   let commentregx = /\s/g;
   let chars = textStr.replace(commentregx, "");
   return chars.length;
}
