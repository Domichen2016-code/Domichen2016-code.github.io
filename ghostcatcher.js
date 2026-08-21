function restart() {
      location.reload();
    } 
    function setDifficulty(params) {
     if (params == 1) {
        levelsec = 800
     } else if (params == 2) {
        levelsec = 500
     } else if (params == 3) {
        levelsec = 300
     } else if (params == 4) {
        levelsec = 100
     }
      document.getElementById("diff_sel").style.display = "none"
      document.getElementById("ghost").style.display = "block"
     let timerId = setInterval(() => {
      timerText.innerHTML = remainingTime

      remainingTime--
      if (remainingTime == -1) {
        clearInterval(timerId)
      }
    }, 1000);
         let moveTimer = setInterval(() => {
      randomLT()
      if (gameIsDone == true) {
        console.log("game is done now, should stop moving");
        
        clearInterval(moveTimer)
      } else {
        console.log("game is not done");
        
      }
    }, levelsec);
  
    setTimeout(() => {
        console.log("setting gameIsDone to true");
        gameIsDone = true
        document.getElementById("finalScore").style.display = "block"
        document.getElementById("finalScoreValue").innerHTML = finalScore
        document.getElementById("ghost").style.display = "none"
      }, 17000);
  }
    var gameIsDone = false
    var remainingTime = 15 // todo change to 0:xx
    var levelsec
    var finalScore = 0
     
      function moveGhost(l, t) {
        document.getElementById("ghost").style.left = l + "px"
        document.getElementById("ghost").style.top = t + "px"
      }

      function addScore() {
        if (!gameIsDone) {
          finalScore++
          document.getElementById("score").innerHTML = finalScore

        }
      }

      function randomLT(params) {
        if (gameIsDone == false) {
          // game is still going
          var left = Math.floor(Math. random() * (1000 - 1) + 1)
          var top = Math.floor(Math. random() * (661 - 1) + 1)
          moveGhost(left, top)  
        } else {
          // game is done, we block user input
        }
        
      }
      
        
    let timerText = document.getElementById("timer") 
    