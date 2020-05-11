import React from 'react';
import axios from 'axios';

const ADDRESS = 'http://localhost:8081';

const headers = {
  'Content-Type': 'application/json',
  crossDomain: true,
  'X-Content-Type-Options': 'nosniff',
  Pragma: 'no-cache',
};

function getTableData(tbl, method, data = {}) {
  return (
    axios({
      method: method,
      url: `${ADDRESS}/${tbl}`,
      data: data,
      headers: headers,
    })
      // axios
      // .get(`${ADDRESS}/${tbl}`, { headers: headers })
      .then((res) => res.data)
      .catch((err) => 'SERVER ERROR')
  );
}

export default getTableData;
