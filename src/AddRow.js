import React, { Fragment, useState } from 'react';
import {
  Dialog,
  DialogTitle,
  Typography,
  TextField,
  Tooltip,
  Fab,
  Grid,
  Button,
  makeStyles,
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme) => ({
  dialog: {
    paddingBottom: theme.spacing(4),
  },
  iconSize: {
    width: theme.spacing(5),
    height: theme.spacing(4),
  },
  fieldName: {
    paddingTop: theme.spacing(2.5),
  },
}));

function AddRow(props) {
  const { colList } = props;
  const classes = useStyles();
  const fields = colList;
  const [open, setOpen] = useState(false);

  const handleAddRow = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {};
  return (
    <Fragment>
      <Tooltip title='Click to add row to table' aria-label='add'>
        <Fab color='primary'>
          <AddIcon onClick={handleAddRow} className={classes.iconSize} />
        </Fab>
      </Tooltip>
      <Dialog open={open} onClose={handleClose}>
        <Grid container spacing={2} className={classes.dialog}>
          <Grid item sm={12}>
            <DialogTitle>Please add Employee details</DialogTitle>
          </Grid>
          {fields.map((field) => (
            <Fragment key={field}>
              <Grid item sm={12} lg={3}>
                <Grid className={classes.fieldName}>
                  <Typography id={field} component='span'>
                    {field.toUpperCase()} :
                  </Typography>
                </Grid>
              </Grid>
              <Grid item sm={12} lg={7}>
                <TextField id={field} label={field} />
              </Grid>
            </Fragment>
          ))}
          <Grid item sm={6} lg={4}>
            <Button variant='contained' color='primary' onClick={handleSubmit}>
              Submit
            </Button>
          </Grid>
          <Grid item sm={6} lg={4}>
            <Button variant='contained' onClick={() => setOpen(false)}>
              Cancel
            </Button>
          </Grid>
        </Grid>
      </Dialog>
    </Fragment>
  );
}

export default AddRow;
