import { useEffect, useState } from 'react';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import './App.css';
import { display } from '@mui/system';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center'
}));

function App() {

  const [state, setState] = useState("users");
  const [posts, setPosts] = useState([]);

  useEffect( () => {
    fetch(`https://jsonplaceholder.typicode.com/${state}`)
    .then(response => response.json())
    .then(json => setPosts(json))
  }, [state])


  return (
    <div className="App">
      <section className='section-one'>
      <AppBar position="static" sx={{ boxShadow: 2 }}>
      <Container maxWidth="xl">
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }} disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            Resourse: {state}
          </Typography>
          <div className='end'>
            <Button
              onClick={() => setState("users")}
              variant="outlined"
              sx={{ m: ".25rem" }}
            >Users
            </Button>
            <Button
              onClick={() => setState("posts")}
              variant="outlined"
              sx={{ m: ".25rem" }}
            >Posts
            </Button>
            <Button
              onClick={() => setState("todos")}
              variant="outlined"
              sx={{ m: ".25rem" }}
            >Todos
            </Button>
          </div>
            
        </Toolbar>
      </Container>
      </AppBar>
      </section>
      <section className='section-two'>
        <ul>
          {posts.map(post => (
          // <li key={post.id}>{post.name}{post.completed}{post.title}</li>
          <React.Fragment>
            <Grid key={post.id} xs={{ display: 'flex' }}>
              <Item>{post.name}{post.title}</Item>
            </Grid>
          </React.Fragment>
          
        ))}
        </ul>
        {/* <div>{JSON.stringify(posts, null, 2)}</div> */}
      </section>
    </div>
  );
}

export default App;
