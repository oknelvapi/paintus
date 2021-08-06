import { makeStyles } from '@material-ui/core/styles';
import colors from 'Colors';

const { primary } = colors;

const menuStyles = makeStyles(theme => ({
  wrapper: {
    '& .MuiDialog-paper': {
      backgroundColor: 'transparent'
    }
  },
  header: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    maxWidth: theme.spacing(40),
    margin: '0 auto',
    padding: theme.spacing(2),
    transition: 'transform 0.35s ease-out, opacity 0.35s ease, visibility 0.35s',
    transform: 'rotateX(20deg)',
  },
  transform: {
    transform: 'none',
  },
  button: {
    fontFamily: 'Raleway Bold',
    margin: theme.spacing(4, 0),
  },
  menuList: {
    width: '100%',
    '&>:nth-child(n+2)': {
      borderTop: `solid 1px ${theme.palette.divider}`,
    },
  },
  link: {
    justifyContent: 'center',
    fontSize: theme.spacing(1.6),
    letterSpacing: theme.spacing(0.5),
    lineHeight: '4em',
    textTransform: 'uppercase',
    textAlign: 'center',
    cursor: 'pointer',
    margin: 0,
    fontFamily: 'Raleway Bold',
    borderRadius: theme.spacing(0.5),
    '&:hover': {
      borderBottomColor: 'transparent',
      color: primary._link_color_hover
    },
    '&:active': {
      borderBottomColor: 'transparent',
      color: primary._link_color_active
    }
  }
}));

export default menuStyles;
