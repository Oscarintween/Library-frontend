import React,{useState} from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Alert, Button, Snackbar } from '@mui/material';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import '../index.css'

const UpdateBook = () => {

  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
          setOpen(true);
        };
  const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
         return;
            }
        setOpen(false);
        };

    const url = 'http://localhost:5000/books/'
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [year, setYear] = useState("");
    const [genre, setGenre] = useState("");
    const [image, setImage] = useState("");
    const [description, setDescription] = useState("");
    const params = useParams();

    const getBookInfo = async() => {
      const response = await axios.get(url + params.id )
      const bookInfo = response.data
      setAuthor(bookInfo.author)
      setDescription(bookInfo.description)
      setTitle(bookInfo.title)
      setImage(bookInfo.image)
      setYear(bookInfo.year)
      setGenre(bookInfo.genre)
    }

    useEffect(() => {
      getBookInfo() 
    },[])
    

    const handleTitle = (e) =>{
        setTitle(e.target.value)
    }
    const handleAuthor = (e) =>{
        setAuthor(e.target.value)
    }
    const handleYear = (e) =>{
        setYear(e.target.value)
    }
    const handleGenre = (e) =>{
        setGenre(e.target.value)
    }
    const handleImage = (e) =>{ 
        setImage(e.target.value)
    }
    const handleDescription = (e) =>{
        setDescription(e.target.value)
    }
    const handleSubmit = () => {
        const bod = {
          title: title,
          author:author,
          year:year,
          genre:genre,
          image:image,
          description:description
        }
        console.log(bod)
        axios.patch(url + '/' + params.id, bod)
      }
    
  return (
    <div>
      <div className="inputField">
      <h1 align="center">Update a book</h1>
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '35ch' },
            }}
            noValidate
            autoComplete="off"
            >
            <div align="center">
                <TextField
                    value={title}                    
                    label="Title"
                    placeholder="title"
                    size="normal"
                    onChange={handleTitle}
                />
            </div>
            <div align="center">
                <TextField 
                    value={author}
                    label="Author" 
                    placeholder="author" 
                    onChange={handleAuthor}
                />
            </div>    
            <div align="center">
                <TextField 
                    value={image}
                    label="Image" 
                    placeholder="link" 
                    onChange={handleImage}
                />
            </div>    
            <div align="center">
                <TextField 
                    value={description}
                    label="Description" 
                    placeholder="description" 
                    onChange={handleDescription}
                />
            </div>    
            <div align="center">
                <TextField
                    value={year}
                    label="Year"
                    placeholder="year"
                    size="normal"
                    onChange={handleYear}
                />
            </div>
            <div align="center">
                <TextField
                    value={genre}
                    label="Genre"
                    placeholder="genre"
                    size="normal"
                    onChange={handleGenre}
                />
            </div>
            <div align="center">
                <Button onClick={()=>{handleSubmit();handleClick()}} variant='contained' color='success'>
                  Update
                </Button>
                <Snackbar open={open}>
                  <Alert variant='filled' onClose={handleClose} severity='success'>
                    Book has been updated successfully
                  </Alert>
                </Snackbar>
            </div>
        </Box>
      </div>
        
    </div>
  )
}

export default UpdateBook