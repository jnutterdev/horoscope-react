import React, { useState } from 'react';
import { SelectSign } from './components/SelectSign';
import { SelectTimeframe } from './components/SelectTimeframe';
import { Horoscope } from './components/Horoscope';
import './App.css';

function App() {
  const [selectedSign, setSelectedSign] = useState(null);
  const [selectedTimeframe, setSelectedTimeframe] = useState(null);
  const restart = () => {
    setSelectedSign(null);
    setSelectedTimeframe(null);
  }

  return (
    <div className="App">
      <h1>Horoscope</h1>
        {!selectedSign && (<SelectSign 
        onSignSelected={setSelectedSign}
        />
        )}
        {selectedSign && !selectedTimeframe &&
        (<SelectTimeframe 
        onTimeframeSelected={setSelectedTimeframe} 
        />
        )}
        {selectedSign && selectedTimeframe && ( 
        <Horoscope 
          sign={selectedSign} 
          timeframe={selectedTimeframe} 
          />)}
        <button style={{ margin: "12px 0 0 0" }} onClick={restart}>Restart</button>
    </div>
  )
}

export default App
