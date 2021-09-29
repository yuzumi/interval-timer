import React from 'react';
import ReactDOM from 'react-dom';

import { ThemeProvider } from 'styled-components';

import App from 'App';
import theme from 'styles/theme';
import { NotificationProvider } from 'contexts/notification';

import reportWebVitals from 'reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <NotificationProvider>
        <App />
      </NotificationProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
