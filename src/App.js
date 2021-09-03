import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAll } from './actions';
import { CircularProgress, Container, Grid, Grow } from '@material-ui/core';

function App() {

  const dispatch = useDispatch();

  const alldata = useSelector((store) => store.items)

  useEffect(() =>{
    dispatch(getAll())
  },[])

  return (
    !alldata?.items.length ? <CircularProgress /> : (
    <Grow in>
      <Container>
        <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
          <Grid item xs={12} sm={3}>
            <p>filter section</p>
          </Grid>
          <Grid item xs={12} sm={9}>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <p>navigation bar</p>
              </Grid>
              <Grid container item xs={12}>
                <p>main content</p>
                {console.log(alldata)}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Grow>
    )
  );
}

export default App;
