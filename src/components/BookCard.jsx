import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import '../App.css'
import { IconButton, Link } from '@mui/material';
import axios from 'axios';

const BookCard = ({book}) => {

  const deleteBook = (id) =>{
    const url = `http://localhost:5000/books/${id}`
    axios.delete(url)  
    window.location.reload(false )  
  }

  return (
    <Card className='card' sx={{ maxWidth: 345 }}>
    <CardHeader
      title={book.title}
      action={
        <>
          <Link href={`http://localhost:3000/updateBook/${book._id}`}>
            <IconButton>
              <EditIcon color='primary' />
            </IconButton>
          </Link>
          <IconButton onClick={ ()=>deleteBook(book._id) }>
            <DeleteForeverIcon color='warning' />
          </IconButton>
          <Link href={`http://localhost:3000/product/${book._id}`}>
            <button>Ver Detalles</button>
          </Link>
        </>
      }
    />
    <CardMedia
      component="img"
      image={book.image}
      alt={book.title}
    />
    <CardContent>
      <Typography sx={{ mb: 1.5 }} variant="body2" color="white">
        {book.author}
        ({book.year})
      </Typography>
      <Typography variant="body2" color="white">
        {book.description}
      </Typography>
    </CardContent>
  </Card>
  );
}

export default BookCard