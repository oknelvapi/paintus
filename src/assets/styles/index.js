import { makeStyles } from '@material-ui/core/styles';

const rootStyles = makeStyles(() => ({
  blurred: {
    // * first option:
    // filter: 'blur(1.5px)',
    // transition: 'filter 0.25s ease'
    // * second option:
    filter: 'blur(0.5em)',
    transition: 'filter 0.35s ease, -webkit-filter 0.35s ease, opacity 0.375s ease-out'

  }
}));

export default rootStyles;
