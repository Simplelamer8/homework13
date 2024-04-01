import { useEffect, useState } from 'react';
import axios from 'axios';

import { Grid, Typography, Button, Dialog, DialogTitle, DialogContent, DialogContentText, ImageList, ImageListItem, CircularProgress } from '@mui/material';
import CardMui from './components/CardMui';
import { ErrorPage } from './ErrorPage';
import { SceletonMui } from './components/SceletonMui';
import {Routes, Route, useNavigate} from "react-router-dom";
import Header from './components/Header';
import CardsMui from './components/CardsMui';
import ModalWindow from './components/ModalWindow';
import Test from './components/Test';

function App() {
  const [crew, setCrew] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);
  const [window, setWindow] = useState(-1);
  const [personalData, setPersonalData] = useState(null);
  const navigate = useNavigate();

  function getPersonalData(key)
  {
    console.log("I am in getPersonalData!")
    axios.get("https://api.spacexdata.com/v4/launches/" + key)
    .then((response) => {
      setPersonalData(response.data)
    })
    .catch((error) => console.log(error));
  }

  function showModalWindow(index)
  {
    getPersonalData(crew[index].launches[0])
    setWindow(index)
  }

  const getSpaceXData = () => {
    setLoading(true);
    setError(false);
    axios
      .get('https://api.spacexdata.com/v4/crew')
      .then((res) => {
        setCrew(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      });
  };

  if (isLoading) {
    return (
      <Grid container spacing={2} direction='column' p={3}>
        {/* <SceletonMui /> */}
        <Grid item>
          <Typography>SpaceX launches</Typography>
        </Grid>
        <Grid item>
          <Button variant='contained' onClick={getSpaceXData}>
            Get Crew
          </Button>
        </Grid>

        <Grid item>
          <Grid container spacing={4}>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((el) => (
              <Grid item xs={4}>
                {/* <CardMui data={el} /> */}
                <SceletonMui />;
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    );
  }

  if (isError) {
    return <ErrorPage />;
  }


  return (
    <>
    <Grid container spacing={2} direction="column" p={3}>
      <Header getSpaceXData={getSpaceXData}></Header>
      <Routes>
          <Route path="/crew" element={<CardsMui crew={crew} showModalWindow={showModalWindow}/>} >
            <Route path={`:id`} element={
                crew[window] &&
                <ModalWindow crew={crew} window={window} setWindow={setWindow} setPersonalData={setPersonalData} personalData={personalData} navigate={navigate} />
                } />
          </Route>
      </Routes>
    </Grid>
    </>
  );
}

export default App;
