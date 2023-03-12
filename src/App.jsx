import HashStrikeDisplay from './components/HashStrikeDisplay/HashStrikeDisplay';
import HashOpportunityDisplay from './components/HashOpportunityDisplay/HashOpportunityDisplay';
import TopBarDisplay from './components/TopBarDisplay/TopBarDisplay';
import HomePage from './components/HomePage/HomePage';
import { HashRouter, Routes, Route, Navigate} from 'react-router-dom';
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
              <Routes>
                <Route exact path ="/" element={<Navigate to="/home"/>} />
                <Route path="/home" element={<HomePage />}/>
                <Route path="/hashstrikes"
                  element={ <HashStrikeDisplay /> }
                />
                {/* Add the following after we create the new page! */}
                <Route path="/hashopportunities"
                  element={ <HashOpportunityDisplay />}
                />
              </Routes>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </HashRouter>
  );
}

export default App;
