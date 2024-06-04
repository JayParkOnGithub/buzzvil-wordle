import { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Intro from './Components/Intro';
import Wordle from './Components/Wordle';

function App() {
  const [solution, setSolution] = useState('world');
  const [startGame, setStartGame] = useState(false);

  const handleSetSolution = (newSolution) => {
    setSolution(newSolution);
    setStartGame(true);
  };

  const handleStartGame = () => {
    setStartGame(true);
  };

  return (
    <Router>
      <div className='App'>
        <h1>Buzzle</h1>
        {!startGame ? (
          <Intro
            handleSetSolution={handleSetSolution}
            handleStartGame={handleStartGame}
          />
        ) : (
          <Wordle solution={solution} />
        )}
      </div>
    </Router>
  );
}

export default App;
