import React from 'react';
import ReactDOM from 'react-dom';

import moment from 'moment';

import { BrowserRouter } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';

import { ApolloProvider } from 'react-apollo';
import { client } from './utils/apollo';

import App from './App';

import theme from './Theme';

import 'typeface-roboto';
// import { setContext } from 'apollo-link-context';
// import Cookies from 'universal-cookie';


// Configure moment to use shorthand relative time
moment.updateLocale('en', {
  relativeTime: {
    future: 'in %s',
    past: '%s ago',
    s: '%ds',
    ss: '%ds',
    m: '%dm',
    mm: '%dm',
    h: '%dh',
    hh: '%dh',
    d: '%dd',
    dd: '%dd',
    M: '%dm',
    MM: '%dm',
    y: '%dy',
    yy: '%dy'
  }
});

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <BrowserRouter>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </BrowserRouter>
  </MuiThemeProvider>,
  document.getElementById('root')
);
