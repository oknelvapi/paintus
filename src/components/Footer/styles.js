import { makeStyles } from '@material-ui/core/styles';

const footerStyles = makeStyles(theme => ({
  footer: {
    [theme.breakpoints.down('lg')]: {
      backgroundColor: '#2e3141',
      backgroundImage: 'linear-gradient(to top, rgba(46, 49, 65, 0.8), rgba(46, 49, 65, 0.8)), url("../../assets/img/bg.jpg")',
      backgroundSize: 'auto, cover',
      backgroundPosition: 'center, center',
      marginTop: theme.spacing(-13),
      paddingTop: theme.spacing(13),
    }
  },
}));

export default footerStyles;