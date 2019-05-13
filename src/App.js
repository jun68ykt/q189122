import React from 'react';
import Fluits from './Fluits';

function App() {
  return (
    <div className="App">
      <Fluits
        fluitsList={['peach', 'apple', 'orange', 'banana', ]}
      />
    </div>
  );
}

export default App;
