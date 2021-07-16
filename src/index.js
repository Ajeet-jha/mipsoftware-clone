import React from 'react';
import { render } from 'react-dom';
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import { blueGrey, orange } from "@material-ui/core/colors";
import App from './App';


const theme = createTheme({
  typography: {
    h1: {
      fontSize: "3rem"
    }
  },
  palette: {
    type: "light",
    primary: {
      main: blueGrey[600]
    },
    secondary: {
      main: orange[400]
    }
  }
});

render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
  ,
  document.getElementById('root')
);