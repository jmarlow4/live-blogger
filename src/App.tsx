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

  private onDarkModeChange = () => {
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
          <div style={styles}>
            <Navbar darkModeToggle={this.onDarkModeChange} />
          </div>
        </MuiThemeProvider>
      </>
    );
  };
}

export default (process.env.NODE_ENV === 'development' ? hot(module)(App) : App);
