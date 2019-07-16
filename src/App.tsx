import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import { Add } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

import './App.css';

const useStyles = makeStyles({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
  },
  input: {
    marginLeft: 8,
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    width: 1,
    height: 28,
    margin: 4,
  },
});

function App() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Typography variant="h1" component="h2" gutterBottom>
          TODO list
      </Typography>
        <form action="">
          <Paper className={classes.root}>
            <InputBase
              className={classes.input}
              placeholder="Add new task"
            />
            <Divider className={classes.divider} />
            <IconButton color="primary" className={classes.iconButton} aria-label="Add">
              <Add />
            </IconButton>
          </Paper>
        </form>
      </Container>
    </React.Fragment>
  );
}

export default App;
