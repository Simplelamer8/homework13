import React from 'react'
import { Grid } from '@mui/material'
import CardMui from './CardMui'
import { Outlet } from 'react-router-dom';

export default function CardsMui({crew, showModalWindow}) {
    console.log(crew);
  return (
    <>
    
    <Grid item>
        <Grid container spacing={2}>
        {
      crew.map((el, ind) => (
              <Grid item xs={4}>
                <CardMui data={el} ind={ind} showModalWindow={showModalWindow} crew={crew}/>
              </Grid>
            ))
    }
        </Grid>
        <Outlet />

    </Grid>
    </>
  )
}
