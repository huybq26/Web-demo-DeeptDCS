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
              fontSize: '3.7rem',
              lineHeight: 1.2,
              marginBottom: '1rem',
              fontFamily: 'Raleway',
              marginBottom: 15,
              marginTop: 20,
            }}
          >
            TDCS Project
          </h1>
          <p style={{ fontSize: 26.5, marginTop: 0, fontFamily: 'Raleway' }}>
            An electromagnetic research on brain signals using Deep Learning
            techniques
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: 35,
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
                onClick={() => handleOnClick('/introduction')}
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
