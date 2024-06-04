import { useState } from 'react';

export default function Modal({ handleSetSolution, handleStartGame }) {
  const [newSolution, setNewSolution] = useState('');

  const handleInput = (e) => {
    setNewSolution(e.target.value);
  };

  const handleNewSolution = () => {
    handleSetSolution(newSolution);
  };

  return (
    <div className='modal'>
      <div>
        <h1>Welcome to Buzzle</h1>
        <button onClick={handleStartGame}>Play Wordle</button>
        <input
          type='text'
          value={newSolution}
          onChange={handleInput}
          placeholder='Set your own answer'
        />
        <button onClick={handleNewSolution}>Set Answer</button>
      </div>
    </div>
  );
}
