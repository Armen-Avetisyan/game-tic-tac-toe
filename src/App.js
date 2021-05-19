import "./App.css";
import React from "react";
import TicTacToe from "./gamesArmen/game-TicTacToe/gameTic-Tac-Toe";
import RockPaperScissors from "./gamesArmen/game-rockPaperScissors/gameRock-Paper-Scissors.js";





function App() {
  return (
    <div>
  
    <TicTacToe/>
      <hr/>
    <RockPaperScissors/>
    </div>
  );
}
;
export default App;
