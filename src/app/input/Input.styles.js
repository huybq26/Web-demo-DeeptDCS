import { makeStyles } from '@material-ui/core';

export const InputStyles = makeStyles((theme) => ({
  paper: {
    marginTop: 90,
    marginRight: 15,
    marginLeft: 15,
    marginBottom: 15,
  },
  title: {
    paddingTop: 25,
    textAlign: 'center',
    color: '#17a2b8',
    fontFamily: 'Raleway',
    fontSize: '28px',
    fontWeight: 'bold',
  },
  stepper: {
    paddingLeft: 50,
    paddingTop: 50,
    paddingRight: 50,
    paddingBottom: 50,
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginRight: 40,
  },
}));
