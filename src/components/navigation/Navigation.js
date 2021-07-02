import React, { useState, useCallback } from 'react';
import { AppBar, Toolbar, Button } from '@material-ui/core';
import { NavigationStyles } from './Navigation.styles';
import { useHistory } from 'react-router-dom';

export default function Navigation() {
  const classes = NavigationStyles();
  const history = useHistory();

  const handleOnClick = useCallback((url) => history.push(url), [history]);

  return (
    <AppBar>
      <div>
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
            <Button
              className={classes.projectButton}
              onClick={() => handleOnClick('/home')}
            >
              <h1>
                <i class='fas fa-code'></i> {'  '}tDCS Project
              </h1>
            </Button>
            <ul className={classes.navButton}>
              <li>
                <Button
                  className={classes.button}
                  onClick={() => handleOnClick('/home')}
                >
                  Home
                </Button>
              </li>
              <li>
                <Button
                  className={classes.button}
                  onClick={() => handleOnClick('/introduction')}
                >
                  Intro
                </Button>
              </li>
              <li>
                <Button
                  className={classes.button}
                  onClick={() => handleOnClick('/input')}
                >
                  Input
                </Button>
              </li>
              <li>
                <Button
                  className={classes.button}
                  onClick={() => handleOnClick('/result')}
                >
                  Results
                </Button>
              </li>
            </ul>
          </div>
        </Toolbar>
      </div>
    </AppBar>
  );
}
