var crystal = {
    blue:
    {
      name: "Crystal1",
      value: ""
    },
    green:
    {
      name: "Crystal2",
      value:""
    },
    red:
    {
      name: "Crystal3",
      value: ""
    },
    yellow:
    {
      name: "Crystal4",
      value: ""
    }
  };
  
  // Scores (Current and Target)
  var yourScore = 0;
  var targetScore = 0;
  var winCount = 0;
  var lossCount = 0;
  
  // Helper Function for getting random numbers
  var numGen = function(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; };
  
  var startGame = function() {
  
    currentScore = 0;
  
    targetScore = numGen(19, 120);
  
    crystal.blue.value = numGen(1, 12);
    crystal.red.value = numGen(1, 12);
    crystal.green.value = numGen(1, 12);
    crystal.yellow.value = numGen(1, 12);
  
    // Change the HTML to reflect all of these changes
    $("#your-score").text(currentScore);
    $("#target-score").text(targetScore);
    console.log(targetScore);
  
    console.log("Target Score: " + targetScore);
    console.log("Blue: " + crystal.blue.value + " | Green: " + crystal.green.value + " | Red: " + crystal.red.value + " | Yellow: " + crystal.yellow.value);
  };
  
  // Check if User Won or Lost and Reset the Game
  var checkWin = function() {
  
    // Check if currentScore is larger than targetScore
    if (currentScore > targetScore) {
      alert("You Lose!");
      console.log("You Lost");
  
      // Add to Loss Counter
      lossCount++;
  
      // Change Loss Count HTML
      $("#loss-count").text(lossCount);
  
      // Restart the game
      startGame();
    }
  
    else if (currentScore === targetScore) {
      alert("Congratulations! You Won!");
      console.log("You Won!");
  
      // Add to the Win Counter
      winCount++;
  
      // Change Win Count HTML
      $("#win-count").text(winCount);
  
      // Restart the game
      startGame();
    }
  
  };
  
  var addValues = function(clickedCrystal) 
  { currentScore += clickedCrystal.value;
    $("#your-score").text(currentScore);
    checkWin();
    console.log("Your Score: " + currentScore); };
  

  startGame();
  
  $("#blue").click(function() 
  {  addValues(crystal.blue);  console.log("clicked")});
  
  $("#red").click(function() 
  {  addValues(crystal.red);  });
  
  $("#green").click(function() 
  {  addValues(crystal.green);  });
  
  $("#yellow").click(function() 
  {   addValues(crystal.yellow);  });
  