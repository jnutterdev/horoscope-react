import React, { useState } from 'react';
import { SelectSign } from './components/SelectSign';
import './App.css';

function App() {
  const [selectedSign, setSelectedSign] = useState(null);

  return (
    <div className="App">
      <h1>Horoscope app</h1>
      {selectedSign}
        <SelectSign onSignSelected={setSelectedSign}/>
    </div>
  )
}

export default App
