import React, { useState } from 'react';
import { Step, Typography, Button } from '@material-ui/core';
import { InputStyles } from './Input.styles';

export default function UploadFile(props) {
  const classes = InputStyles();
  const { step, activeStep } = props;
  const [matLabFile, setMatLabFile] = useState(null);
  const [textFile, setTextFile] = useState(null);

  const handleMatLabChange = (event) => {
    const file = event.target.files[0];
    setMatLabFile(file);
  };
  const handleTextChange = (event) => {
    const file = event.target.files[0];
    setTextFile(file);
  };
  return (
    <div style={{ paddingLeft: 50 }}>
      <Typography>
        Please upload the conductivity map in form of a .mat file,
      </Typography>
      <Typography>
        and positions of points of electrodes in form of a .txt file.
      </Typography>
      <br></br>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          //   width: 250,
          height: 100,
          width: 1000,
          justifyContent: 'space-between',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <div style={{ width: 250 }}>
            <Button
              onChange={handleMatLabChange}
              className={classes.button}
              variant='contained'
              color='default'
              component='label'
            >
              Choose MATLAB File
              <input id='files' type='file' hidden />
            </Button>
          </div>
          <Typography style={{ marginTop: 8 }}>
            {matLabFile ? matLabFile.name : 'No file uploaded'}
          </Typography>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <div style={{ width: 250 }}>
            <Button
              onChange={handleTextChange}
              className={classes.button}
              variant='contained'
              color='default'
              component='label'
            >
              Choose Text File
              <input id='files' type='file' hidden />
            </Button>
          </div>
          <Typography style={{ marginTop: 8 }}>
            {textFile ? textFile.name : 'No file uploaded'}
          </Typography>
        </div>
      </div>
      <Typography style={{ marginTop: 40 }}>
        <i>
          *You should choose files with the correct format accordingly. Only
          MATLAB and Text files (.mat, .txt) are allowed. Please see{' '}
          <a
            target='_blank'
            href='https://drive.google.com/uc?export=download&id=1xZ521buu8jHiim-JvT_umxzoLyeI9Nbo'
          >
            example files
          </a>
          .
        </i>
      </Typography>
    </div>
  );
}
