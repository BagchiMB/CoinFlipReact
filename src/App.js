import React from 'react';
import Lottery from './Lottery'
import './App.css';

function App() {
  return (
    <div className="App">
      <Lottery 
        name="High Ball"
        MaxNum={40}
        Nballs={6}
      />  
      <Lottery 
        name="Mini Roll"
        MaxNum={10}
        Nballs={4}
      />
    </div>
  );
}

export default App;
