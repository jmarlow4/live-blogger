import React, { Component, createContext } from 'react';
import {
  WithStyles,
  withStyles,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import InvertColors from '@material-ui/icons/InvertColors';
import { navbarStyles } from './styles';

export interface Props extends WithStyles<typeof navbarStyles> {
  darkModeToggle: () => void;
}

export interface State {
  isAuthenticated: boolean;
  anchorEl: null | HTMLElement;
}

class Navbar extends Component<Props, State> {
  public state = {
    isAuthenticated: false,
    anchorEl: null,
  };

  private handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  private handleClose = () => {
    this.setState({ anchorEl: null });
  };

  private toggleDarkMode = () => {
    this.props.darkModeToggle();
  };

  public render() {
    const { classes } = this.props;
    const { isAuthenticated, anchorEl } = this.state;
    const open = !!anchorEl;

    return (
      <AppBar position="static">
        <Toolbar className={classes.toolBar}>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" color="inherit" className={classes.grow}>
            Live Blogger
          </Typography>
          <div>
            <IconButton onClick={this.toggleDarkMode} color="inherit">
              <InvertColors />
            </IconButton>
          </div>
          {!isAuthenticated && (
            <div>
              <IconButton
                aria-owns={open ? 'menu-appbar' : undefined}
                aria-haspopup="true"
                onClick={this.handleMenu}
                color="inherit">
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={this.handleClose}>
                <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                <MenuItem onClick={this.handleClose}>My account</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(navbarStyles)(Navbar);
