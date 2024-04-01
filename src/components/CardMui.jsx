import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Link} from 'react-router-dom'

export default function CardMui({ data, ind, showModalWindow, crew }) {
  return (
    <Card sx={{ maxWidth: 345 }} key={data.id}>
      <CardMedia sx={{ height: 400 }} image={data.image} title='green iguana' />
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          {data.name}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          <Typography>{data.agency}</Typography>
          <Typography>{data.status}</Typography>
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={crew[ind].launches[0]}>
          <Button size='small' onClick={() => showModalWindow(ind)}>Show more</Button>
        </Link>
      </CardActions>
    </Card>
  );
}

// <div
//   key={el.id}
//   style={{ border: 'solid 1px black', padding: '.5rem' }}
// >
//   <a href={el.wikipedia} target='_blank'>
//     <p>{el.name}</p>
//   </a>
//   <p>Agency: {el.agency}</p>
//   <img src={el.image} alt={el.name} style={{ width: '200px' }} />
//   <p>status : {el.status}</p>
//   <button>Show more</button>
// </div>
