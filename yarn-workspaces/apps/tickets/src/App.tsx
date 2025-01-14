import { useState } from 'react';
import { Button } from '@gc-packages/ui/button';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Button
      color='mediumblue'
      label={'Tickets Button ' + count}
      onClick={() => setCount(count + 1)}
    />
  );
}

export default App;
