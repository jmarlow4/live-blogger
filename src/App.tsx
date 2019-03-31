import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import Icon from '@material-ui/core/Icon';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, Button, Typography, Paper } from '@material-ui/core';
import { lightTheme, darkTheme } from './theme';
import Navbar from './components/Navbar';

export interface AppState {
  isThemeLight: boolean;
}

class App extends Component<any, AppState> {
  public state = {
    isThemeLight: true,
  };

  private onChange = () => {
    this.setState({ isThemeLight: !this.state.isThemeLight });
  };

  public render = () => {
    const { isThemeLight } = this.state;
    const appTheme = isThemeLight ? lightTheme : darkTheme;
    const styles = {
      backgroundColor: appTheme.palette.background.default,
      color: appTheme.palette.text.primary,
      transition: 'background-color .2s ease-out, color.2s ease-out',
      height: '100vh',
    };

    return (
      <>
        <CssBaseline />
        <MuiThemeProvider theme={appTheme}>
          <div className="lb-app" style={styles}>
            <Navbar />
            <Typography variant="h1" align="center" gutterBottom>
              This is Heading Number 1
            </Typography>
            <Typography variant="h2" align="center" gutterBottom>
              This is Heading Number 2
            </Typography>
            <Typography variant="h3" align="center" gutterBottom>
              This is Heading Number 3
            </Typography>
            <Typography variant="h4" align="center" gutterBottom>
              This is Heading Number 4
            </Typography>
            <Typography variant="h5" align="center" gutterBottom>
              This is Heading Number 5
            </Typography>
            <Typography variant="h6" align="center" gutterBottom>
              This is Heading Number 6
            </Typography>
            <div>
              <Paper elevation={1}>
                <Typography variant="h5">This is a sheet of paper.</Typography>
                <Typography component="p">
                  Paper can be used to build surface or other elements for your application.
                </Typography>
              </Paper>
              <Button color="primary" variant="contained" onClick={this.onChange}>
                Change theme
              </Button>
            </div>
          </div>
        </MuiThemeProvider>
      </>
    );
  };
}

export default (process.env.NODE_ENV === 'development' ? hot(module)(App) : App);
