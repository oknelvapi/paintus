import React from 'react';
// import PropTypes from 'prop-types';
import { ThemeProvider } from '@material-ui/core/styles';

import Root from 'Containers/Root';
import Routes from 'Source/routes/Routes';

import { paintusTheme } from 'Configs/theme';

// import Typography from '@material-ui/core/Typography';


function App() {
  return (
    <ThemeProvider theme={paintusTheme}>
      <Routes>
        <Root />
      </Routes>
    </ThemeProvider>
  );
}

// App.propTypes = {
//   /**
//    * Injected by the documentation to work in an iframe.
//    * You won't need it on your project.
//    */
// };

export default App;
