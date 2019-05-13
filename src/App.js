import React from 'react';
import Fruits from './Fruits';

function App() {
  return (
    <div className="App">
      <Fruits
        fruitsList={['peach', 'apple', 'orange', 'banana', ]}
      />
    </div>
  );
}

export default App;
