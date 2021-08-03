import { makeStyles } from '@material-ui/core/styles';

const homePageStyles = makeStyles(theme => ({
  inner: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    padding: theme.spacing(4, 4, 0.2, 4),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(6, 6, 2, 6),
    },
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6, 0, 2, 0),
      width: theme.spacing(110),
    },
  },
  reverse: {
    flexDirection: 'row-reverse',
  },
  image: {

  },
  imageReverse: {

  }
}));

export default homePageStyles;
