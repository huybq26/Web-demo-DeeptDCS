import React, { useState, useCallback } from 'react';
import image from '../../assets/showcase.jpg';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

export default function Home() {
  const history = useHistory();

  const handleOnClick = useCallback((url) => history.push(url), [history]);

  return (
    <div
      style={{
        position: 'relative',
        // backgroundImage: `url(${image})`,
        backgroundImage: `url('https://wallpaperaccess.com/full/1426870.png')`,
        backgroundSize: 'cover',
        height: '100vh',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.75)',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
      >
        <div
          style={{
            color: '#fff',
            height: '100%',
            width: '80%',
            margin: 'auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
          }}
        >
          <h1
            style={{
              fontSize: '3.5rem',
              lineHeight: 1.2,
              marginBottom: '1rem',
              fontFamily: 'Raleway',
              paddingBottom: 5,
              marginTop: 20,
            }}
          >
            TDCS Project
          </h1>
          <p style={{ fontSize: 25, marginTop: -10, fontFamily: 'Raleway' }}>
            An electromagnetic analysis research on brain signals using Deep
            Learning techniques
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                paddingTop: 20,
                textAlign: 'center',
              }}
            >
              <Button
                style={{
                  display: 'flex',
                  // backgroundColor: '#28a745',
                  backgroundColor: '#17a2b8',
                  color: 'white',
                  // minWidth: 12,
                  marginRight: 15,
                  textAlign: 'center',
                  fontFamily: 'Raleway',
                }}
              >
                About us
              </Button>
              <Button
                style={{
                  display: 'flex',
                  backgroundColor: '#28a745',
                  color: 'white',
                  textAlign: 'center',
                  fontFamily: 'Raleway',
                }}
                onClick={() => handleOnClick('/input')}
              >
                Get started!
              </Button>
            </div>
          </p>
        </div>
      </div>
    </div>
  );
}
