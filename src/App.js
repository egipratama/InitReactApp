import React, {useEffect} from 'react';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

function App() {
  useEffect(() => {
    document.getElementById('init').remove();
  }, [])

  return (
    <div>
      <CircularProgress />
      <Button variant="contained" color="primary">
        Primary
      </Button>
    </div>
  );
}

export default App;
