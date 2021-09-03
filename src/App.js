import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getAll } from './actions';
import { CircularProgress, Container, Grid, Grow } from '@material-ui/core';
import Filter from './components/filter/Filter';
import NavBar from './components/navBar/NavBar';
import ItemCard from './components/itemCard/ItemCard';

function App() {
  const [filteredData, setFilteredData] = useState(useSelector((store) => store.items.items));

  const dispatch = useDispatch();

  const alldata = useSelector((store) => store.items)

  const filterHandler = (s) => {
    console.log(s);
    if(s.name==='all') {
      setFilteredData(alldata.items);
    }
    else{
      setFilteredData(
        alldata.items.filter((item) => {
          if(s.name === item.details.size) return item;
        })
      )
    }
  }

  useEffect(() =>{
    dispatch(getAll())
  },[dispatch])

  return (
    !alldata?.items.length ? <CircularProgress /> : (
    <Grow in>
      <Container>
        {console.log(filteredData)}
        <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
          <Grid item xs={12} sm={3}>
            <Filter filterHandler={filterHandler}/>
          </Grid>
          <Grid item xs={12} sm={9}>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <NavBar count={filteredData?.length}/>
              </Grid>
              <Grid container item xs={12}>
                {
                  filteredData?.map((item) => {
                    return(
                    <ItemCard key={item.id} item={item} />
                    )
                  })
                }
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
