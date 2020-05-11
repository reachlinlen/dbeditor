import React, { Fragment, useEffect, useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Paper,
  makeStyles,
  Tooltip,
  Fab,
  Grid,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

import Pagination from './Pagination';
import AddRow from './AddRow';

import getTableData from './api';
import { sortData } from './sort';

const useStyles = makeStyles((theme) => ({
  table: {
    background: 'grey',
  },
  head: {},
  body: {
    background: 'white',
  },
  row: {
    background: 'white',
    '&:hover': {
      background: 'grey',
    },
    '&:last-child': {
      borderRadius: 0,
    },
  },
  pageItems: {
    display: 'flex',
    paddingTop: theme.spacing(4),
  },
  addRow: {
    textAlign: 'initial',
  },
}));

const SELECT_TBL = 'Please select a table';

function ShowTable(props) {
  const { tableName } = props;
  const classes = useStyles();
  const table = (tableName && `${tableName} Table`) || SELECT_TBL;
  const [tblData, setTblData] = useState(undefined);
  const [sortAsc, setSortAsc] = useState([]);
  const colList = (tblData && Object.keys(tblData[0])) || [];

  useEffect(() => {
    async function fetchData() {
      const data = await getTableData(tableName.toLowerCase(), 'get');
      if (data !== 'SERVER ERROR' && data.length > 0) {
        setTblData(data);
        let sortArray = new Array(Object.keys(data[0]).length);
        for (let i = 0; i < sortArray.length; i++) {
          sortArray[i] = true;
        }
        setSortAsc(sortArray);
      } else {
        setTblData(undefined);
      }
    }
    fetchData();
  }, [tableName]);

  const handleSort = (ind, col) => {
    if (tblData.length > 0) {
      const newOrder = [...sortAsc];
      newOrder[ind] = !newOrder[ind];
      setSortAsc(newOrder);
      setTblData(sortData(tblData, newOrder, ind, col));
    }
  };

  return (
    <Fragment>
      <Grid item sm={12}>
        <Typography variant='h6'>{table}</Typography>
        {tblData && (
          <TableContainer component={Paper}>
            <Table className={classes.table}>
              <TableHead className={classes.head}>
                {colList.map((col, ind) => (
                  <TableCell key={col}>
                    {col}
                    {sortAsc[ind] ? (
                      <ArrowDownwardIcon onClick={() => handleSort(ind, col)} />
                    ) : (
                      <ArrowUpwardIcon onClick={() => handleSort(ind, col)} />
                    )}
                  </TableCell>
                ))}
              </TableHead>
              <TableBody className={classes.body}>
                {tblData.map((data, ind) => (
                  <TableRow key={ind + data} className={classes.row}>
                    {colList.map((col, ind) => (
                      <TableCell key={`${data[col] || ind}`}>
                        {data[col] || ''}
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
        {!tblData && (
          <Typography variant='h6' className={classes.addRow}>
            Please add rows
          </Typography>
        )}
      </Grid>
      <Grid item sm={12} className={classes.pageItems}>
        <AddRow colList={colList} />
        {tblData && <Pagination startRow={1} lastRow={5} />}
      </Grid>
    </Fragment>
  );
}

ShowTable.propTypes = {
  tableName: PropTypes.string.isRequired,
};

ShowTable.defaultProps = {};

export default ShowTable;
