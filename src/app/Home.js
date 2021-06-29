import React, { useState } from 'react';
import image from '../assets/showcase.jpg';

export default function Home() {
  return (
    <div
      style={{
        position: 'relative',
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        height: '100vh',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
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
              fontFamily: 'Railway',
            }}
          >
            TDCS Project
          </h1>
          <p style={{ fontSize: 25, marginTop: -10 }}>
            An electromagnetic analysis research on brain signals using Deep
            Learning techniques
          </p>
        </div>
      </div>
    </div>
  );
}
