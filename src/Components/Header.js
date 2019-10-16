import React, { Component } from 'react'
import { AppBar, Toolbar, Typography, Button, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const styles = {
  Title: {
    flexGrow: 1,
  },
  Root: {
    flexGrow: 1,
  }
};

class MyHeader extends Component {
  render() {
    return (
      <div style={styles.Root}>
        <AppBar position="static">
          <Toolbar style={{ textAlign:"center", align:"center" }}>
            <IconButton edge="start" color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h3" style={styles.Title}>
              Patrick O'Shea
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

export default MyHeader;
