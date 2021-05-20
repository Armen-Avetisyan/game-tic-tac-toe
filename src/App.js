import "./App.css";
import React from "react";
import TicTacToe from "./gamesArmen/game-TicTacToe/gameTic-Tac-Toe";
import RockPaperScissors from "./gamesArmen/game-rockPaperScissors/gameRock-Paper-Scissors.js";
import MemoryPokemon from "./gamesArmen/gameMemoryPokemon/gameMemory-Pokemon";





function App() {
  return (
    <div>
  
    <TicTacToe/>
      <hr/>
    <RockPaperScissors/>
    <hr/>
    <MemoryPokemon/>
    </div>
  );
}
;
export default App;
