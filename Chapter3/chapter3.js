
    const scoreForm = document.getElementById('scoreForm');
    const resultDiv = document.getElementById('result');

    scoreForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const score1 = parseFloat(document.getElementById('score1').value);
      const score2 = parseFloat(document.getElementById('score2').value);
      const score3 = parseFloat(document.getElementById('score3').value);
      const score4 = parseFloat(document.getElementById('score4').value);
      const score5 = parseFloat(document.getElementById('score5').value);
      const average = (score1 + score2 + score3 + score4 + score5) / 5;
      let letterGrade;
      if (average >= 90) {
        letterGrade = "A";
      } else if (average >= 80) {
        letterGrade = "B";
      } else if (average >= 70) {
        letterGrade = "C";
      } else if (average >= 65) {
        letterGrade = "D";
      } else {
        letterGrade = "F";
      }
      resultDiv.textContent = `Your average score is ${average.toFixed(2)} (${letterGrade})`;
    });
  
