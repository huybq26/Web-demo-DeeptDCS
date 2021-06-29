import { makeStyles } from '@material-ui/core';

export const NavigationStyles = makeStyles({
  navButton: {
    display: 'flex',
    // flexDirection: 'row',
    // alignItems: 'right',
    // justifyContent: 'right',
    listStyle: 'none',
  },
  projectButton: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'normal',
    fontFamily: 'railway',
    '&:hover': {
      color: '#17a2b8',
    },
  },
  button: {
    display: 'flex',
    color: 'white',
    fontFamily: 'railway',
    fontSize: 14,
    '&:hover': {
      color: '#17a2b8',
    },
    // cursor: 'pointer',
  },
});
