import './App.css';
import LudoApp from "./Component/LudoApp/LudoApp";
import Instructions from './Component/Instructions/Instructions';

function App() {
  return (
    <div className="App">
      <h1>Ludo Game</h1>
      <p> Scroll Down for Instructions </p>
      <LudoApp />
      <Instructions />
    </div>
  );
}

export default App;
