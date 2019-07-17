import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
// ICONS
import { Add, Delete } from '@material-ui/icons';

//LIST
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';

import { makeStyles } from '@material-ui/core/styles';

import './App.css';

const useStyles = makeStyles({
  root: {
    textAlign: 'center',
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
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
  type FormElem = React.FormEvent<HTMLFormElement>;
  interface ITodo {
    text: string
    complete: boolean
  }

  const [value, setValue] = React.useState<string>('');
  const [todos, setTodos] = React.useState<ITodo[]>([]);

  const handleSumbit = (e: FormElem): void => {
    e.preventDefault()
    addTodo(value)
    setValue('')
  }

  const addTodo = (text: string): void => {
    const newTodos: ITodo[] = [...todos, { text, complete: false }]
    setTodos(newTodos)
  }

  const completeTodo = (index: number): void => {
    const newTodos: ITodo[] = [...todos]
    newTodos[index].complete = !newTodos[index].complete
    setTodos(newTodos)
  }

  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Typography variant="h1" component="h2" align="center">
          TODO list
      </Typography>
        <form onSubmit={handleSumbit}>
          <Paper className={classes.root}>
            <InputBase
              required
              className={classes.input}
              value={value}
              placeholder="Add new task"
              onChange={e => setValue(e.target.value)}
            />
            <Divider className={classes.divider} />
            <IconButton type="submit" color="primary" className={classes.iconButton} aria-label="Add">
              <Add />
            </IconButton>
          </Paper>
        </form>

        <List>
          {todos.map((todo: ITodo, index: number) => {
            return (
              <ListItem key={index}>
                <ListItemIcon>
                  <Checkbox
                    checked={todo.complete}
                    onClick={() => completeTodo(index)}
                  />
                </ListItemIcon>
                <ListItemText
                  primary={todo.text}
                />
                <ListItemSecondaryAction>
                  <IconButton edge="end" aria-label="Delete">
                    <Delete />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            )
          })}
        </List>
      </Container>
    </React.Fragment>
  );
}

export default App;
