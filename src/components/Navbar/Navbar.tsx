import * as React from 'react';
import {
  WithStyles,
  withStyles,
  AppBar,
  Toolbar,
  IconButton,
  Icon,
  Typography,
  Menu,
  MenuItem,
} from '@material-ui/core';
import { navbarStyles } from './styles';

export interface Props extends WithStyles<typeof navbarStyles> {}

export interface State {
  isAuthenticated: boolean;
  anchorEl: null | HTMLElement;
}

class Navbar extends React.Component<Props, State> {
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

  public render() {
    const { classes } = this.props;
    const { isAuthenticated, anchorEl } = this.state;
    const open = !!anchorEl;

    return (
      <AppBar position="static">
        <Toolbar className={classes.toolBar}>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <Icon>menu_icon</Icon>
          </IconButton>
          <Typography variant="h5" color="inherit" className={classes.grow}>
            Live Blogger
          </Typography>
          {!isAuthenticated && (
            <div>
              <IconButton
                aria-owns={open ? 'menu-appbar' : undefined}
                aria-haspopup="true"
                onClick={this.handleMenu}
                color="inherit">
                <Icon>account_circle</Icon>
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
