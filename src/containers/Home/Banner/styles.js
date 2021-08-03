import { makeStyles } from '@material-ui/core/styles';
import colors from 'Colors';

const { primary } = colors;

const bannerStyles = makeStyles(theme => ({
  banner: {
    display: 'flex',
    justifyContent: 'center',
    padding: theme.spacing(10, 4, 8.5, 4),
    marginBottom: theme.spacing(-5),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(24, 6, 24.75, 6),
      marginBottom: theme.spacing(-9.5),
    },
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(14, 0, 16.5, 0),
      marginBottom: theme.spacing(-13),
    },
    [theme.breakpoints.up('lg')]: {
      padding: theme.spacing(20, 0, 9.5, 0),
    }
  },
  inner: {
    width: theme.spacing(110),
  },
  logoWrap: {
    marginBottom: theme.spacing(2.5),
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(2),
    },
  },
  logo: {
    borderRadius: '100%',
    border: `solid 2px ${primary._border_color}`,
    cursor: 'default',
    fontSize: '2em',
    height: '2.25em',
    lineHeight: '2.25em',
    width: '2.25em',
    padding: theme.spacing(1.5),
  },
  title: {
    opacity: 1,
    borderBottom: `solid 2px ${primary._border_color}`,
    fontSize: '2.25em',
    fontFamily: 'Raleway Bold',
    marginBottom: '0.8em',
    paddingBottom: '0.4em',
    cursor: 'crosshair',
    textTransform: 'uppercase'
  },
  subtitle: {
    opacity: 1,
    fontFamily: 'Raleway Light',
    textTransform: 'uppercase',
    fontWeight: 200,
    letterSpacing: '0.1em'
  }
}));

export default bannerStyles;
// -moz-transition: opacity 0.5s ease, -moz-transform 0.5s ease, -moz-filter 0.25s ease;
// -webkit-transition: opacity 0.5s ease, -webkit-transform 0.5s ease, -webkit-filter 0.25s ease;
// -ms-transition: opacity 0.5s ease, -ms-transform 0.5s ease, -ms-filter 0.25s ease;
// transition: opacity 0.5s ease, transform 0.5s ease, filter 0.25s ease;
// -moz-transform: translateX(0);
// -webkit-transform: translateX(0);
// -ms-transform: translateX(0);
// transform: translateX(0);
// -moz-transition-delay: 0.8s;
// -webkit-transition-delay: 0.8s;
// -ms-transition-delay: 0.8s;
// transition-delay: 0.8s;
// -moz-filter: blur(0);
// -webkit-filter: blur(0);
// -ms-filter: blur(0);
// filter: blur(0);
// opacity: 1;
// font-family: Raleway, Helvetica, sans-serif;
// font-size: 1em;
// font-weight: 200;
// letter-spacing: 0.1em;
// line-height: 2;
// text-transform: uppercase;
