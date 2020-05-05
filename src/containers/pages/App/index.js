import React, {useEffect} from 'react';

function App() {
  useEffect(() => {
    document.getElementById('init').remove();
  }, [])

  return (
    <div>
      <p>App</p>
    </div>
  );
}

export default App;
