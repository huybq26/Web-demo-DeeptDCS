import React, { useState, useEffect } from 'react';
import { Paper, Typography } from '@material-ui/core';
import { InputStyles } from '../input/Input.styles';

export default function Introduction() {
  const classes = InputStyles();

  return (
    <>
      <Paper className={classes.paper}>
        <Typography className={classes.title}>Introduction</Typography>
        <div
          style={{
            marginLeft: 40,
            marginRight: 40,
            marginTop: 30,
            marginBottom: 20,
          }}
        >
          <Typography>
            <b>Transcranial direct current stimulation (tDCS)</b>, is a
            non-invasive, painless brain stimulation treatment that uses direct
            electrical currents to stimulate specific parts of the brain. A
            constant, low intensity current is passed through two electrodes
            placed over the head which modulates neuronal activity. There are
            two types of stimulation with tDCS: anodal and cathodal stimulation.
            Anodal stimulation acts to excite neuronal activity while cathodal
            stimulation inhibits or reduces neuronal activity.
          </Typography>
          <br></br>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <img
              height='400'
              src='https://www.mdpi.com/ijerph/ijerph-18-03678/article_deploy/html/images/ijerph-18-03678-g001.png'
            ></img>
          </div>

          <br></br>
          <Typography>
            Although tDCS is still an experimental form of brain stimulation, it
            potentially has several advantages over other brain stimulation
            techniques. It is cheap, non-invasive, painless and safe. It is also
            easy to administer and the equipment is easily portable. The most
            common side effect of tDCS is a slight itching or tingling on the
            scalp.
          </Typography>
          <br></br>
          <Typography>
            Several studies suggest it may be a valuable tool for the treatment
            of neuropsychiatric conditions such as depression, anxiety,
            Parkinson’s disease, and chronic pain. Research has also
            demonstrated cognitive improvement in some patients undergoing tDCS.
            Currently, tDCS is not an FDA-approved treatment.
          </Typography>
        </div>
        <br></br>
      </Paper>
    </>
  );
}
