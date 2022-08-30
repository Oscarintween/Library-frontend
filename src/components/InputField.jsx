import React,{useState} from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import axios from 'axios';

const InputField = ({ptitle,pauthor,pyear,pgenre,pimage,pdescription}) => {
    const url = 'http://localhost:5000/books'
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [year, setYear] = useState("");
    const [genre, setGenre] = useState("");
    const [image, setImage] = useState("");
    const [description, setDescription] = useState("");
    

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
        axios.post(url, bod)
      }
    
  return (
    <div>
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
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
                <Button onClick={handleSubmit} variant='contained' color='success'>Add</Button>
            </div>
        </Box>
    </div>
  )
}

export default InputField