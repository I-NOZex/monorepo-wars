import { useState } from 'react';
import { Button } from '@gc-packages/ui/button';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Button
      color='indianred'
      label={'Web Chat Button ' + count}
      onClick={() => setCount(count + 2)}
    />
  );
}

export default App;
