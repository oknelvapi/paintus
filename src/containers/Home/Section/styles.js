import { makeStyles } from '@material-ui/core/styles';
import colors from 'Colors';
import triangle1 from 'Assets/img/triangle1.svg';
import triangle2 from 'Assets/img/triangle2.svg';
import triangle3 from 'Assets/img/triangle3.svg';

const { primary } = colors;

const sectionStyles = makeStyles(theme => ({
  section: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: primary._section_bg,
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
      backgroundImage: `url(${triangle1})`,
      boxShadow: 'inset 0 -1px 0 0 #4c5c96, 0 1px 0 0 #4c5c96',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100% 100%',
      display: 'block',
      height: theme.spacing(13),
    },
    '&:before': {
      left: 0,
      top: theme.spacing(-13),
    },
    '&:after': {
      transform: 'scaleY(-1)',
      bottom: theme.spacing(-13),
      left: 0
    }
  },
  style2: {
    backgroundColor: '#45558d',
    '&:before, &:after': {
      backgroundImage: `url(${triangle2})`,
      boxShadow: 'inset 0 -1px 0 0 #45558d, 0 1px 0 0 #45558d',
    },
    '&:before': {
      transform: 'scaleX(-1)'
    },
    '&:after': {
      transform: 'scaleY(-1) scaleX(-1)'
    }
  },
  style3: {
    backgroundColor: '#3f4e85',
    '&:before, &:after': {
      backgroundImage: `url(${triangle3})`,
      boxShadow: 'inset 0 -1px 0 0 #3f4e85, 0 1px 0 0 #3f4e85',
    }
  },
  inner: {
    display: 'flex',
    flexDirection: 'column-reverse',
    alignItems: 'flex-end',
    width: '100%',
    padding: theme.spacing(0, 4, 3, 4),
    [theme.breakpoints.up('sm')]: {
      // padding: theme.spacing(6, 6, 2, 6),
      padding: theme.spacing(0, 6, 2, 6),
      flexDirection: 'row',
      alignItems: 'center',
    },
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(0, 0, 2, 0),
      // padding: theme.spacing(6, 0, 2, 0),
      width: theme.spacing(110),
    },
  },
  innerReverse: {
    flexDirection: 'column-reverse',
    alignItems: 'flex-start',
    [theme.breakpoints.up('sm')]: {
      alignItems: 'center',
      flexDirection: 'row-reverse',
    },
  },
  image: {
    borderRadius: '50%',
    width: theme.spacing(24),
    height: theme.spacing(24),
    margin: theme.spacing(0, 0, 2, 0),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(30),
      height: theme.spacing(30),
      margin: theme.spacing(0, 0, 4, 4),
    },
    [theme.breakpoints.up('md')]: {
      margin: theme.spacing(0, 0, 4, 6),
    },
  },
  imageReverse: {
    [theme.breakpoints.up('sm')]: {
      margin: theme.spacing(0, 4, 4, 0),
    },
    [theme.breakpoints.up('md')]: {
      margin: theme.spacing(0, 6, 4, 0),
    },
  },
  title: {
    paddingBottom: theme.spacing(2),
    borderBottom: `solid 2px ${primary._border_color}`,
  },
  subtitle: {

  }

}));

export default sectionStyles;
