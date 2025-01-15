import { Button } from '@gocontact-packages/ui/button';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Button
        color="mediumblue"
        label={'Tickets Button ' + count}
        onClick={() => setCount(count + 1)} />
    </>
  );
}

export default App;
