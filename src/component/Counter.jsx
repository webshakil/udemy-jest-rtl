import React, { useState } from 'react';
import './Counter.css';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="container">
      <p data-testid="count">{count}</p>
      <div>
        <button data-testid="decrement-button" onClick={decrement}>Decrement</button>
        <button data-testid="increment-button" onClick={increment}>Increment</button>
      </div>
    </div>
  );
}

export default Counter;
