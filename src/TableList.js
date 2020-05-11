import React, { useEffect, useState } from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  tableName: {
    lineHeight: '24px',
    '&:hover': {
      fontSize: '18px',
      cursor: 'pointer',
    },
  },
}));

function TableList(props) {
  const { onChange } = props;
  const classes = useStyles();
  const [tableList, setTableList] = useState([]);
  useEffect(() => {
    setTableList(['Employee', 'Vendor', 'Services']);
  }, []);

  const handleClick = (e) => {
    e.persist();
    onChange(e._targetInst.memoizedProps.children);
  };

  return (
    (tableList &&
      tableList.map((table) => (
        <Typography
          variant='subtitle1'
          className={classes.tableName}
          key={table}
        >
          <div onClick={(table) => handleClick(table)}>{table}</div>
        </Typography>
      ))) ||
    null
  );
}

TableList.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default TableList;
