import React, { useState, useEffect } from 'react';
import {
  Step,
  Typography,
  Button,
  FormControl,
  FormHelperText,
  Select,
  InputLabel,
  MenuItem,
  Stepper,
  StepLabel,
} from '@material-ui/core';
import image4x from '../../assets/Jx/fig4.png';
import image5x from '../../assets/Jx/fig5.png';
import image6x from '../../assets/Jx/fig6.png';
import image4y from '../../assets/Jy/fig4.png';
import image5y from '../../assets/Jy/fig5.png';
import image6y from '../../assets/Jy/fig6.png';
import image4z from '../../assets/Jz/fig4.png';
import image5z from '../../assets/Jz/fig5.png';
import image6z from '../../assets/Jz/fig6.png';
import image4n from '../../assets/normJ/fig4.png';
import image5n from '../../assets/normJ/fig5.png';
import image6n from '../../assets/normJ/fig6.png';
import { InputStyles } from './Input.styles';
import Download from './Download';

const steps = ['Results', 'Download'];
export default function Result(props) {
  const classes = InputStyles();
  const [loading, setLoading] = useState('true');
  const [figure, setFigure] = useState('Jx Figure 4');
  const [activeStep, setActiveStep] = useState(0);

  const handleChange = (event) => {
    setFigure(event.target.value);
  };

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  useEffect(() => {
    setTimeout(() => setLoading(false), 4700);
  }, []);

  const FigureRender = () => {
    if (figure == 'Jx Figure 4') {
      return <img src={image4x} alt='Jx Figure 4' width='600'></img>;
    } else if (figure == 'Jx Figure 5') {
      return <img src={image5x} alt='Jx Figure 5' width='600'></img>;
    } else if (figure == 'Jx Figure 6') {
      return <img src={image6x} alt='Jx Figure 6' width='600'></img>;
    } else if (figure == 'Jy Figure 4') {
      return <img src={image4y} alt='Jy Figure 4' width='600'></img>;
    } else if (figure == 'Jy Figure 5') {
      return <img src={image5y} alt='Jy Figure 5' width='600'></img>;
    } else if (figure == 'Jy Figure 6') {
      return <img src={image6y} alt='Jy Figure 6' width='600'></img>;
    } else if (figure == 'Jz Figure 4') {
      return <img src={image4z} alt='Jz Figure 4' width='600'></img>;
    } else if (figure == 'Jz Figure 5') {
      return <img src={image5z} alt='Jz Figure 5' width='600'></img>;
    } else if (figure == 'Jz Figure 6') {
      return <img src={image6z} alt='Jz Figure 6' width='600'></img>;
    } else if (figure == 'NormJ Figure 4') {
      return <img src={image4n} alt='NormJ Figure 4' width='600'></img>;
    } else if (figure == 'NormJ Figure 5') {
      return <img src={image5n} alt='NormJ Figure 5' width='600'></img>;
    } else if (figure == 'NormJ Figure 6') {
      return <img src={image6n} alt='NormJ Figure 6' width='600'></img>;
    }
  };

  return (
    <React.Fragment>
      {/* <Stepper activeStep={activeStep} className={classes.stepper}>
        {steps.map((label) => {
          return (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>;
            </Step>
          );
        })}
      </Stepper> */}
      {/* <div style={{ position: 'relative' }}>
        {activeStep == 0 ? (
          <Result step={0} activeStep={activeStep} />
        ) : (
          <Download step={1} activeStep={activeStep} />
        )}
      </div> */}
      {loading == false ? (
        <>
          <Typography
            style={{
              display: 'flex',
              justifyContent: 'center',
              fontSize: '19px',
              fontWeight: 'bold',
            }}
          >
            Your results are ready! You can now choose which side of the map to
            see below.
          </Typography>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'row',
              marginTop: 20,
              marginRight: 15,
            }}
          >
            <Typography
              style={{
                marginTop: 7,
                marginRight: 12,
                fontSize: '17px',
                fontWeight: 'bold',
              }}
            >
              Choose figure:
            </Typography>
            <FormControl>
              <Select
                labelId='choose-image'
                id='choose-image'
                value={figure}
                onChange={handleChange}
              >
                <MenuItem value={'Jx Figure 4'}>Jx Figure 4</MenuItem>
                <MenuItem value={'Jx Figure 5'}>Jx Figure 5</MenuItem>
                <MenuItem value={'Jx Figure 6'}>Jx Figure 6</MenuItem>
                <MenuItem value={'Jy Figure 4'}>Jy Figure 4</MenuItem>
                <MenuItem value={'Jy Figure 5'}>Jy Figure 5</MenuItem>
                <MenuItem value={'Jy Figure 6'}>Jy Figure 6</MenuItem>
                <MenuItem value={'Jz Figure 4'}>Jz Figure 4</MenuItem>
                <MenuItem value={'Jz Figure 5'}>Jz Figure 5</MenuItem>
                <MenuItem value={'Jz Figure 6'}>Jz Figure 6</MenuItem>
                <MenuItem value={'NormJ Figure 4'}>NormJ Figure 4</MenuItem>
                <MenuItem value={'NormJ Figure 5'}>NormJ Figure 5</MenuItem>
                <MenuItem value={'NormJ Figure 6'}>NormJ Figure 6</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div
            style={{ display: 'flex', justifyContent: 'center', marginTop: 20 }}
          >
            <FigureRender />
          </div>
          <br />

          {/* <form method='get' action='../../../static/fig4.png'>
            <button type='submit'>Download!</button>
          </form> */}
          <br />

          {/* <div className={classes.buttonContainer}> */}
          {/* <div>
              <form>
                <Button
                  clasName={classes.button}
                  color='primary'
                  variant='contained'
                  onClick={handleNext}
                >
                  Download 3D and 4D figures
                </Button>
              </form>
            </div>
            <div style={{ marginLeft: 10, marginRight: 10 }}>
              <a href='http://localhost:5000/input'>
                <Button
                  clasName={classes.button}
                  color='secondary'
                  variant='contained'
                >
                  Upload another data
                </Button>
              </a>
              {/* <form action='http://localhost:5000/input'></form> */}

          <br></br>
          <br></br>
        </>
      ) : (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <img src='http://thanjavurmedicalcollege1970batch.com/images/loader.gif'></img>
        </div>
      )}
    </React.Fragment>
  );
}
