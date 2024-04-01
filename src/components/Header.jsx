import React from 'react'
import { Grid } from '@mui/material'
import{ Typography} from '@mui/material'
import {Button} from '@mui/material'
import {Link} from 'react-router-dom'

export default function Header({getSpaceXData}) {
  return (
    <div>
      <Grid container spacing={2} direction='column' p={3}>
        {/* <SceletonMui /> */}
        <Grid item>
          <Typography>SpaceX launches</Typography>
        </Grid>
        <Grid item>
          <Link to="/crew">
            <Button variant='contained' onClick={getSpaceXData}>
                Get Crew
            </Button>
          </Link>
        </Grid>
        </Grid>
    </div>
  )
}
