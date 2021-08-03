import { makeStyles } from '@material-ui/core/styles';
import colors from 'Colors';

import triangle4 from 'Assets/img/triangle4.svg';

const { primary } = colors;

const customersReviewsStyles = makeStyles(theme => ({
  section: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#2e3141',
    margin: theme.spacing(5, 0),
    [theme.breakpoints.up('sm')]: {
      margin: theme.spacing(9.5, 0),
    },
    [theme.breakpoints.up('md')]: {
      margin: theme.spacing(13, 0),
    },
  },
  spotlight: {
    '&:before, &:after': {
      content: '""',
      position: 'absolute',
      width: '100%',
      backgroundImage: `url(${triangle4})`,
      boxShadow: 'inset 0 -1px 0 0 #2e3141, 0 1px 0 0 #2e3141',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100% 100%',
      display: 'block',
      height: theme.spacing(13),
    },
    '&:before': {
      left: 0,
      top: theme.spacing(-13),
      transform: 'scaleX(-1)'
    },
    '&:after': {
      transform: 'scaleY(-1) scaleX(-1)',
      bottom: theme.spacing(-13),
      left: 0
    },
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
  },
  title: {
    paddingBottom: theme.spacing(2),
    borderBottom: `solid 2px ${primary._border_color}`,
  },
  cardsWrap: {
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      alignItems: 'center'
    },
  },
  cardWrap: {
    width: '48%',
    marginBottom: '4%',
    backgroundColor: '#353849',
    [theme.breakpoints.down('sm')]: {
      width: '98%',
    },
  },
  cardMediaWrap: {
    padding: 0,
    alignSelf: 'stretch'
  },
  cardMedia: {
    height: theme.spacing(23),
  },
  cardNoImage: {
    display: 'flex',
    justifyContent: 'center',
    opacity: 0.5,
    background: 'rgba(255, 255, 255, 0.1)',
    '& > img': {
      width: 'unset'
    }
  },
  cardActionWrap: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start'
  }
}));

export default customersReviewsStyles;
