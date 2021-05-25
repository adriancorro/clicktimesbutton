import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
    <Counter2  />
    </div>
  );
}



function Counter2() {
  const [count, setCount] = useState(0);

  function incrementCount() {
    setCount(count + 1);
  }

  return (
    <div>
      <button onClick={incrementCount}>Hi!! Click HERE please. {count}</button>
      <p>You clicked {count} times</p>
    </div>
  );
}

export default App;
