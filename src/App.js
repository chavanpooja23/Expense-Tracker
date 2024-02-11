import React from 'react';
import { Grid } from '@mui/material';

import Details from './components/Details/Details';
import Main from './components/Main/Main';

function App() {

  return (
      <div>
        <Grid container spacing={2} alignItems='center' justifyContent='center' style={{height: '100vh'}}>
          
          <Grid item xs={12} sm={3}>
            <Details title="Income"/>
          </Grid>

          <Grid item xs={12} sm={3}>
            <Main title="Main"/>
          </Grid>

          <Grid item xs={12} sm={3}>
            <Details title="Expense"/>
          </Grid>
        </Grid>
      </div>
  );
}

export default App;
