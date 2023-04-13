// Check if localStorage.sbloggerVisit exists
if (localStorage.sbloggerVisit) {
      // Retrieve the value of sbloggerVisit key and save to storedLastDate variable
      var storedLastDate = localStorage.sbloggerVisit;
    
      // Display storedLastDate as the text content of the lastVisitDate object
      document.getElementById("lastVisitDate").textContent = storedLastDate;
    
      // Declare lastDate variable and store a Date object using the value of storedLastDate
      var lastDate = new Date(storedLastDate);
    
      // Iterate through each item in the articleDates collection
      var articleDates = document.getElementsByClassName("posttime");
      for (var i = 0; i < articleDates.length; i++) {
        // Declare articleDate variable and store a Date object containing the date text of the current item in the loop
        var articleDate = new Date(articleDates[i].textContent);
    
        // If articleDate is greater than lastDate, add "<strong>new</strong>" to the HTML content of the current item in the articleDates collection
        if (articleDate > lastDate) {
          articleDates[i].innerHTML += "<strong>new</strong>";
        }
      }
    } else {
      // If localStorage.sbloggerVisit does not exist, set the text content of the lastVisitDate object to "Welcome to SBlogger!"
      document.getElementById("lastVisitDate").textContent = "Welcome to SBlogger!";
    
      // Iterate through each item in the articleDates collection and add "<strong>new</strong>" to the HTML content of the current date item
      var articleDates = document.getElementsByClassName("posttime");
      for (var i = 0; i < articleDates.length; i++) {
        articleDates[i].innerHTML += "<strong>new</strong>";
      }
    }
    
    // Update the stored date value in sbloggerVisit key
    var currentDate = new Date("9/12/2024");
    localStorage.sbloggerVisit = currentDate.toLocaleDateString();
    