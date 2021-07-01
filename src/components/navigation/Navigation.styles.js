import { makeStyles } from '@material-ui/core';

export const NavigationStyles = makeStyles({
  navButton: {
    display: 'flex',
    listStyle: 'none',
  },
  projectButton: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'normal',
    fontFamily: 'Raleway',
    '&:hover': {
      color: '#17a2b8',
    },
    fontWeight: 'normal',
  },
  button: {
    display: 'flex',
    color: 'white',
    fontFamily: 'Raleway',
    fontSize: 14,
    '&:hover': {
      color: '#17a2b8',
    },
  },
});
