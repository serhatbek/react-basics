import './App.css';
import { useState, useEffect } from 'react';

import Desc from './components/Desc/Desc';
import Heading from './components/Heading/Heading';

const App = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('current count is ' + count);
  }, [count]);

  const incCounter = () => {
    setCount((prevCount) => {
      return prevCount + 1;
    });
  };

  const decCounter = () => {
    setCount((prevCount) => {
      return prevCount - 1;
    });
  };

  return (
    <div className='App'>
      <div>
        <h2>{count}</h2>
        <button onClick={incCounter}>+</button>
        <button onClick={decCounter}>-</button>
      </div>

      <div>
        <Desc />
        <Heading />
      </div>
    </div>
  );
};

export default App;
