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
} from '@material-ui/core';
import image1 from '../../assets/4420_head_Jx/fig4.png';
import image2 from '../../assets/4420_head_Jx/fig5.png';
import image3 from '../../assets/4420_head_Jx/fig6.png';
import image4 from '../../assets/4420_head_Jx/fig52.png';

export default function Result(props) {
  const [loading, setLoading] = useState('true');
  const [figure, setFigure] = useState('figure1');

  const handleChange = (event) => {
    setFigure(event.target.value);
  };

  useEffect(() => {
    setTimeout(() => setLoading(false), 4700);
  }, []);

  const FigureRender = () => {
    if (figure == 'figure1') {
      return <img src={image1} alt='Figure 1' width='600'></img>;
    } else if (figure == 'figure2') {
      return <img src={image2} alt='Figure 2' width='600'></img>;
    } else if (figure == 'figure3') {
      return <img src={image3} alt='Figure 3' width='600'></img>;
    } else if (figure == 'figure4') {
      return <img src={image4} alt='Figure 4' width='600'></img>;
    }
  };

  return (
    <React.Fragment>
      {loading == false ? (
        <>
          <Typography
            style={{
              display: 'flex',
              justifyContent: 'center',
              fontSize: '19px',
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
                <MenuItem value={'figure1'}>Figure 1</MenuItem>
                <MenuItem value={'figure2'}>Figure 2</MenuItem>
                <MenuItem value={'figure3'}>Figure 3</MenuItem>
                <MenuItem value={'figure4'}>Figure 4</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div
            style={{ display: 'flex', justifyContent: 'center', marginTop: 20 }}
          >
            <FigureRender />
          </div>
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
