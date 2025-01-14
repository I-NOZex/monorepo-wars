import { useState } from 'react';
import './App.css';
import { Button } from '@gc-packages/ui';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>webchat app</h1>
      <div className='card'>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <Button color='red'>Click me</Button>
    </>
  );
}

export default App;
