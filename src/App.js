import './App.css';
import LudoApp from "./Component/LudoApp/LudoApp";
import Instructions from './Component/Instructions/Instructions';

function App() {
  return (
    <div className="App">
      <Instructions />
      <LudoApp />
    </div>
  );
}

export default App;

/*
      <h1>Instructions</h1>
          <p>
          Instructions
1. Clicking on New Game sets all scores to 0 and sets Player 1 as starting player 
2. Current player is shown with highlighted background
3. Each time player clicks on Roll Dice, the dice generates new random value and the previously displayed dice value gets added to Current score
4. If dice generates 1 then player switch happens automatically
5. When User clicks on Save Score, current score gets added to Total and then switches to the other player
6. The first user who scores a total of 100 points wins the game.
Best of Luck!
          </p>
          <br />*/