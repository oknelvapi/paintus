import { createTheme } from '@material-ui/core/styles';
import colors from 'Colors';

const { primary } = colors;

export const paintusTheme = createTheme({

  palette: {
    type: 'dark',
    divider: 'rgba(212, 212, 255, 0.1)'
  },
  typography: {
    fontFamily: [
      'Raleway',
      'Arial',
      'sans-serif'
    ].join(','),
    h2: {
      color: primary.white,
      fontSize: '1.2em',
      fontFamily: 'Raleway Bold, Helvetica, sans-serif',
      fontWeight: 700,
      letterSpacing: '0.1em',
      margin: '0 0 1em 0',
      textTransform: 'uppercase'
    },
    body1: {
      margin: '0 0 2em 0'
    }
  },
});
