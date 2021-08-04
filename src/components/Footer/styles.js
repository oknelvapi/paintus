import { makeStyles } from '@material-ui/core/styles';
import colors from 'Colors';

const { primary } = colors;

const footerStyles = makeStyles(theme => ({
  footer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: primary._footer_bg,
    backgroundImage: 'linear-gradient(to top, rgba(46, 49, 65, 0.8), rgba(46, 49, 65, 0.8)), url("../../assets/img/bg.jpg")',
    backgroundSize: 'auto, cover',
    backgroundPosition: 'center, center',
    marginTop: theme.spacing(-13),
    paddingTop: theme.spacing(13),
  },
  inner: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    padding: theme.spacing(0, 4),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(6, 6, 2, 6),
    },
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6, 0, 2, 0),
      width: theme.spacing(110),
    },
    [theme.breakpoints.down('xs')]: {
      paddingTop: theme.spacing(9.3),
    },
  },
  titleWrap: {

  },
  contactsWrap: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
    },
  },
  title: {
    paddingBottom: theme.spacing(2),
    borderBottom: `solid 2px ${primary._border_color}`,
  },
  mapWrap: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: primary._border_color,
    minHeight: theme.spacing(50),
  },
  contactsInnerWrap: {
    flex: 1,
    '&> ul': {
      [theme.breakpoints.down('sm')]: {
        paddingTop: theme.spacing(3),
      },
    }
  },
  copyrightWrap: {
    display: 'flex',
    flexDirection: 'row',
    borderTop: `solid 2px ${primary._border_color}`,
    margin: theme.spacing(8, 0, 4, 0),
    padding: theme.spacing(4, 0, 0, 0),
    width: '100%',
    '& > li': {
      color: primary._link_color,
      width: 'unset',
    },
    '& > li:first-child': {
      paddingLeft: 0
    },
    '& p': {
      fontFamily: 'Raleway Light, Arial',
      fontSize: theme.spacing(1.75),
    },
    '& a': {
      marginLeft: '5px',
      borderBottom: `dotted 1px ${primary._link_color}`
    },
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      '& > li': {
        padding: theme.spacing(0.5, 0),
      },
      '&  p, span ': {
        margin: 0
      }
    },
  },
  link: {
    borderBottom: `dotted 1px ${primary._link_color}`
  },
  icon: {
    color: primary._white,
    backgroundColor: 'transparent',
    border: `solid 2px ${primary._border_color}`,
  }

}));

export default footerStyles;
