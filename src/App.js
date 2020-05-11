import React, { useState } from 'react';
import { Grid, Typography, Hidden } from '@material-ui/core';

import TableList from './TableList';
import ShowTable from './ShowTable';

import useStyles from './App.style';

const TITLE = 'OO DATABASE';

function App() {
  const classes = useStyles();
  const [tblName, setTblName] = useState('');
  const onChange = (val) => {
    setTblName(val);
  };

  return (
    <Grid container>
      <Grid item sm={12} className={classes.title}>
        <Typography variant='h1'>{TITLE}</Typography>
      </Grid>
      <Hidden mdDown>
        <Grid item lg={2} className={classes.tableList}>
          <Typography variant='h6'>List of Tables</Typography>
          <TableList onChange={onChange} />
        </Grid>
      </Hidden>
      <Hidden lgUp>
        <p>Dropdown</p>
      </Hidden>
      <Grid item sm={12} lg={10} className={classes.tableData}>
        <Grid container>{tblName && <ShowTable tableName={tblName} />}</Grid>
      </Grid>
    </Grid>
  );
}

export default App;
