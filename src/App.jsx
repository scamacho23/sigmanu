import HashStrikeDisplay from './components/HashStrikeDisplay/HashStrikeDisplay';
import TopBarDisplay from './components/TopBarDisplay/TopBarDisplay';
import { HashRouter } from 'react-router-dom';
import { Grid, Paper } from '@mui/material';
import './App.css';

function App() {
  return (
    <HashRouter> 
      <div className="App">
        <Grid container spacing={8}>
          <Grid item xs={12}>
            <TopBarDisplay />
          </Grid>
          <Grid item sm={100}>
            <Paper className="main-page-item">
              <HashStrikeDisplay />
            </Paper>
          </Grid>
        </Grid>
      </div>
    </HashRouter>
  );
}

export default App;
