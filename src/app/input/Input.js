import React, { useState } from 'react';
import image from '../../assets/showcase.jpg';
import {
  Button,
  Paper,
  Stepper,
  StepLabel,
  Typography,
  Step,
} from '@material-ui/core';
import { InputStyles } from './Input.styles';
import UploadFile from './UploadFile';
import Result from './Result';

const steps = ['Upload Files', 'Results'];

export default function Input() {
  const classes = InputStyles();
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <Paper className={classes.paper}>
      <Typography className={classes.title}>New tDCS Data</Typography>
      <Stepper activeStep={activeStep} className={classes.stepper}>
        {steps.map((label) => {
          return (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>;
            </Step>
          );
        })}
      </Stepper>
      <React.Fragment>
        <div style={{ position: 'relative' }}>
          {activeStep == 0 ? (
            <UploadFile step={0} activeStep={activeStep} />
          ) : (
            <Result step={1} activeStep={activeStep} />
          )}
        </div>
        <br></br>
        <div className={classes.buttonContainer}>
          {activeStep !== 0 && (
            <Button onClick={handleBack} clasName={classes.button}>
              Back
            </Button>
          )}
          <Button
            variant='contained'
            color='primary'
            onClick={handleNext}
            className={classes.button}
          >
            {activeStep === 0 ? 'Next' : 'Save'}
          </Button>
        </div>
      </React.Fragment>

      <br></br>
      <br></br>
    </Paper>
  );
}
