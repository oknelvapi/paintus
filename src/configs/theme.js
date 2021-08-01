import { createMuiTheme } from '@material-ui/core/styles';

export const paintusTheme = createMuiTheme({
  // overrides: {
  //   MuiContainer : {
  //     root: {
  //       height: 'calc(var(--vh, 1vh) * 100)'
  //     },
  //   },
  // },
  palette: {
    type: 'dark',
  },
  typography: {
    fontFamily: [
      'Lato Medium',
      'Arial',
      'sans-serif'
    ].join(','),
  },
});