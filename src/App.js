import React from 'react';
import AnalogClock from './Components/AnalogClock/AnalogClock.jsx';
// import Container from './Components/Container/Container.jsx'

function App() {
  return (
    <div>
      <AnalogClock title="London" dateDiff={-3}/>
      <AnalogClock title="Tokyo" dateDiff={5}/>
      <AnalogClock title="New York" dateDiff={-8}/>
    </div>
  );
}

export default App;