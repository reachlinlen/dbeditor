import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  title: {
    color: 'red',
    textAlign: 'center',
    textDecoration: 'underline',
    paddingBottom: theme.spacing(4),
  },
  tableList: {
    paddingLeft: theme.spacing(3),
  },
  tableData: {
    textAlign: 'center',
    borderLeft: '1rem solid blue',
  },
}));

export default useStyles;
