export const sortData = (tblData, order, ind, col) => {
  const len = tblData.length;
  const res = [...tblData];

  if (order[ind]) {
    for (let i = 0; i < len - 1; i++) {
      for (let j = i + 1; j < len; j++) {
        if (res[i][col] > res[j][col]) {
          const intVal = res[i];
          res[i] = res[j];
          res[j] = intVal;
        }
      }
    }
  } else {
    for (let i = 0; i < len - 1; i++) {
      for (let j = i + 1; j < len; j++) {
        if (res[i][col] < res[j][col]) {
          const intVal = res[i];
          res[i] = res[j];
          res[j] = intVal;
        }
      }
    }
  }
  return res;
};
