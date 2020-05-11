import React from 'react';
import { Grid, Typography, Button, makeStyles } from '@material-ui/core';
import ArrowBackIosSharpIcon from '@material-ui/icons/ArrowBackIosSharp';
import ArrowForwardIosSharpIcon from '@material-ui/icons/ArrowForwardIosSharp';

const useStyles = makeStyles((theme) => ({
  paginationItems: {
    display: 'flex',
    justifyContent: 'center',
  },
  paginationContainer: {
    alignItems: 'center',
  },
  iconSize: {
    width: theme.spacing(5),
    height: theme.spacing(4),
  },
  rowDetails: {
    lineHeight: '40px',
  },
}));

function Pagination(props) {
  const { startRow, lastRow, onBackClick, onFwdClick } = props;
  const classes = useStyles();

  return (
    <Grid container className={classes.paginationContainer}>
      <Grid item sm={12} className={classes.paginationItems}>
        <Button color='primary'>
          <ArrowBackIosSharpIcon
            onClick={onBackClick}
            className={classes.iconSize}
          />
        </Button>
        <Typography variant='h5' className={classes.rowDetails}>
          {startRow} - {lastRow}
        </Typography>
        <Button color='primary'>
          <ArrowForwardIosSharpIcon
            onClick={onFwdClick}
            className={classes.iconSize}
          />
        </Button>
      </Grid>
    </Grid>
  );
}

export default Pagination;
