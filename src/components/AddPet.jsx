import React,{useState} from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Button } from '@mui/material';
import axios from 'axios';

const AddPet = () => {
    const url = 'http://localhost:4040/pets'
    const vacunas = ["parvovirus ","moquillo ","hepatitis ","rabia "];
    const [nombre, setNombre] = useState("");
    const [edad, setEdad] = useState("");
    const [raza, setRaza] = useState("");
    const [vacuna, setVacuna] = useState([]);

    const handleName = (e) =>{
        setNombre(e.target.value)
    }
    const handleAge = (e) =>{
        setEdad(e.target.value)
    }
    const handleRaza = (e) =>{
        setRaza(e.target.value)
    }
    const handleSubmit = () => {
        const db = {
          nombre: nombre,
          edad:edad,
          raza:raza,
          vacunas:vacuna
        }
        console.log(db)
        axios.post(url, db)
      }
    
  return (
    <div>
        <h1 align="center">Agregar una mascota</h1>
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
                    value={nombre}                    
                    label="Nombre"
                    placeholder="Firulais"
                    size="normal"
                    onChange={handleName}
                />
            </div>
            <div align="center">
                <TextField 
                    value={edad}
                    label="Edad" 
                    placeholder="2" 
                    onChange={handleAge}
                />
            </div>    
            <div align="center">
                <TextField
                    value={raza}
                    label="Raza"
                    placeholder="Chihuahua"
                    size="normal"
                    onChange={handleRaza}
                />
                <Autocomplete
                    value={vacuna}
                    multiple 
                    options={vacunas}
                    getOptionLabel={(option) => option.label ?? option}
                    onChange={(e, newValue)=>setVacuna(newValue)}
                    renderInput={(params) => (
                    <TextField
                        {...params}
                        label="Vacunas"
                    />
                    )}
                />
            </div>
            <div align="center">
                <Button onClick={handleSubmit} variant='contained'>Agregar</Button>
            </div>
        </Box>
    </div>
  )
}

export default AddPet