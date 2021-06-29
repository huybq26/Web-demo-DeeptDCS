import React, { useState } from 'react';
import { AppBar, Toolbar, Button } from '@material-ui/core';
import { NavigationStyles } from './Navigation.styles';

export default function Navigation() {
  const classes = NavigationStyles();
  return (
    <AppBar style={{}}>
      <div style={{}}>
        <Toolbar
          style={{
            backgroundColor: '#343a40',
            borderColor: '#17a2b8',
            borderBottomWidth: 3,
          }}
        >
          <div
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Button className={classes.projectButton}>
              <h1>
                <i class='fas fa-code'></i> {'  '}tDCS Project
              </h1>
            </Button>
            <ul className={classes.navButton}>
              <li>
                <Button className={classes.button}>Home</Button>
              </li>
              <li>
                <Button className={classes.button}>Tutorial</Button>
              </li>
              <li>
                <Button className={classes.button}>Input</Button>
              </li>
              <li>
                <Button className={classes.button}>Results</Button>
              </li>
            </ul>
          </div>
        </Toolbar>
      </div>
    </AppBar>
  );
}
