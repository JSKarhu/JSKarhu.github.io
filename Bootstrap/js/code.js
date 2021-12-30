/* Function for the hamburger menu */
function hamburgerFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  function checkAnswer() {
      if (document.getElementById('correct').checked) {
          alert('Correct answer!')
      }
      else if (document.getElementById('incorrect').checked) {
          alert('Oops, you must have misclicked. You might want to try again!')
      }
  }

 

  