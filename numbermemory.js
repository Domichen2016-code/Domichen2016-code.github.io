        var currentLevel = 1;
        var isWrongOnce = false;
        
        function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }   
        function countdown(seconds) {
            var countdownElement = document.getElementById("countdownTimer");
            countdownElement.innerHTML = "Memorize the number: " + seconds;
            if (seconds > 0) {
                setTimeout(function() {
                    countdown(seconds - 1);
                }, 1000);
            } else {
                countdownElement.innerHTML = "Time's up! Enter the number.";
                document.getElementById("numberDisplay").style.display = "none";
                document.getElementById("confirmNumber").style.display = "block";
                document.getElementById("userInput").style.display = "block";
            }
            
        }
        function confirmNumber() {
            var userInput = document.getElementById("userInput").value;
            document.getElementById("confirmNumber").style.display = "none";
            document.getElementById("userInput").style.display = "none";
            document.getElementById("countdownTimer").style.display = "none";
            if (parseInt(userInput) == targetNumber) {
                currentLevel++;
                document.getElementById("msg").style.display = "block";
                document.getElementById("msg").innerHTML = "Correct! Click here to move to the next level.";
            } else {
                if (!isWrongOnce) {
                    isWrongOnce = true;
                    document.getElementById("msg").style.display = "block";
                    document.getElementById("msg").innerHTML = "Incorrect. Try again!";
                } else {
                    document.getElementById("refreshGame").style.display = "block";
                    document.getElementById("msg").style.display = "none";
                    document.getElementById("refreshGame").innerHTML = "Incorrect. Game over! You got to level " + currentLevel + ". Click here to try again." ;
                }
            }
        }

        var targetNumber = 0;

        function nextLevel() {
            document.getElementById("startGame").style.display = "none";
            document.getElementById("nextLevel").style.display = "none";
            document.getElementById("giveUp").style.display = "none";
            document.getElementById("confirmNumber").style.display = "none";
            document.getElementById("userInput").style.display = "none";
            
            document.getElementById("countdownTimer").style.display = "block";


            document.getElementById("msg").innerHTML = "";
            const scale = Math.pow(10, currentLevel - 1);
            var min = 1 * scale;
            var max = 9 * scale;
            console.log(min, max);
            
            targetNumber = getRandomInt(min, max);
            document.getElementById("numberDisplay").innerHTML = targetNumber;
            document.getElementById("numberDisplay").style.display = "block";
            countdown(3);
        }
        function pressearly() {
            confirmNumber();
        }

        function rg() {
            location.reload();
        }

        function initGame(params) {
        currentLevel = 1;
        isWrongOnce = false;
        document.getElementById("numberDisplay").style.display = "none";
        document.getElementById("confirmNumber").style.display = "none";
        document.getElementById("userInput").style.display = "none";
        document.getElementById("nextLevel").style.display = "none";
        document.getElementById("giveUp").style.display = "none";
        document.getElementById("refreshGame").style.display = "none";
        document.getElementById("msg").style.display = "none";
    }

    
    document.addEventListener(
        'keyup', function(event){     
            console.log(event.key);
            if (event.key == "Enter") {
                confirmNumber();
            } 
        }
    ); 