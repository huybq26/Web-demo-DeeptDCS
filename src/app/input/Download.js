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

export default function Download() {
  return (
    <>
      <Typography
        style={{
          display: 'flex',
          justifyContent: 'center',
          fontSize: '19px',
          fontWeight: 'bold',
        }}
      >
        Your data are ready! You can download these 3D and 4D files below:
      </Typography>

      <br />
      <div style={{ display: 'flex', flexDirection: 'column', marginLeft: 15 }}>
        <div>
          <Typography style={{ marginLeft: 10, fontWeight: 'bold' }}>
            {' '}
            3D figures:{' '}
          </Typography>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
          }}
        >
          <a
            href='../../../static/figures/4420_head_Jx/3D_brain.fig'
            download='Jx_3D_brain.fig'
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
              Download Jx 3D figure
            </Button>
          </a>
          <a
            href='../../../static/figures/4420_head_Jy/3D_brain.fig'
            download='Jy_3D_brain.fig'
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
              Download Jy 3D figure
            </Button>
          </a>
          <a
            href='../../../static/figures/4420_head_Jz/3D_brain.fig'
            download='Jz_3D_brain.fig'
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
              Download Jz 3D figure
            </Button>
          </a>
        </div>
        <div>
          <Typography
            style={{ marginLeft: 10, fontWeight: 'bold', marginTop: 20 }}
          >
            {' '}
            4D figures:{' '}
          </Typography>
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
          }}
        >
          <a
            href='../../../static/raw_data_mat/test_pred_4420_Jx.mat'
            download='test_pred_4420_Jx.mat'
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
              Download Jx 4D figure
            </Button>
          </a>
          <a
            href='../../../static/raw_data_mat/test_pred_4420_Jy.mat'
            download='test_pred_4420_Jy.mat'
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
              Download Jy 4D figure
            </Button>
          </a>
          <a
            href='../../../static/raw_data_mat/test_pred_4420_Jz.mat'
            download='test_pred_4420_Jz.mat'
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
              Download Jz 4D figure
            </Button>
          </a>
          <a
            href='../../../static/raw_data_mat/test_pred_4420_J_4D.mat'
            download='test_pred_4420_J_4D.mat'
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
              Download Full 4D figure
            </Button>
          </a>
        </div>
      </div>
    </>
  );
}
