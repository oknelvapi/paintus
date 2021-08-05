import { makeStyles } from '@material-ui/core/styles';
import colors from 'Colors';

const { primary } = colors;

const headerStyles = makeStyles(theme => ({
  buttonMobile: {
    display: 'flex',
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  buttonDesktop: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
    },
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    transition: 'background-color 0.2s ease-in-out',
    backgroundColor: 'transparent',
    height: theme.spacing(7),
    left: 0,
    lineHeight: theme.spacing(7),
    padding: '0 1.25em',
    position: 'fixed',
    top: 0,
    width: '100%',
    zIndex: '10000'
  },
  alt: {
    backgroundColor: primary._header_bg,
    transition: 'background-color .25s ease-in-out '
  }
}));

export default headerStyles;
