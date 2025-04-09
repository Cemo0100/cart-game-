# card-game-
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Game Score Tracker</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      text-align: center;
      margin-top: 50px;
    }
    .score {
      font-size: 3em;
      margin: 20px;
    }
    button {
      padding: 10px 20px;
      font-size: 1em;
      margin: 5px;
      cursor: pointer;
    }
  </style>
</head>
<body>

  <h1>Game Score Tracker</h1>
  
  <div>
    <div class="score" id="score1">Player 1: 0</div>
    <button onclick="incrementScore(1)">+1 Player 1</button>
  </div>

  <div>
    <div class="score" id="score2">Player 2: 0</div>
    <button onclick="incrementScore(2)">+1 Player 2</button>
  </div>

  <button onclick="resetScores()">Reset</button>

  <script>
    let score1 = 0;
    let score2 = 0;

    function incrementScore(player) {
      if (player === 1) {
        score1++;
        document.getElementById('score1').textContent = `Player 1: ${score1}`;
      } else {
        score2++;
        document.getElementById('score2').textContent = `Player 2: ${score2}`;
      }
    }

    function resetScores() {
      score1 = 0;
      score2 = 0;
      document.getElementById('score1').textContent = `Player 1: ${score1}`;
      document.getElementById('score2').textContent = `Player 2: ${score2}`;
    }
  </script>

</body>
</html>
