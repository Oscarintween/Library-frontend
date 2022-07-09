import React,{useState,useEffect} from 'react';
import '../App.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import axios from 'axios'
import { Card, CardContent,Typography,CardActions } from '@mui/material';

function Home() {

  const [input, setInput] = useState('')
  const [pets,setPets] = useState([])

  const getPets = async() => {
    const url = `http://localhost:4040/pets/`
    const data = await axios.get(url)
    const response = data.data
    return response
}

  const handleClick = ()=>{
    const datos = getPets()
    .then( setPets)
    .then(()=>console.log(pets))
  }

  useEffect(()=>{
    handleClick()
  },[])

  return (
    <div className="App">
      <div>    
            <div>
              <h1>Mascotas</h1>
            </div>
            <div id='form'>
                <form onSubmit={()=>alert('hellow')}>
                <TextField 
                label="Firulais" 
                size='small'
                color="success" focused
                type="text"
                placeholder='Buscar'
                value={input}
                onChange={(ev)=>setInput(ev.target.value)} 
                />
                <Button size="large" color="success" variant="contained" onClick={()=>handleClick()}>
                        Buscar
                </Button>
                </form>
            </div> 
            <h1 style={{"textAlign":"center","color":"#ff0000"}}>{input.toUpperCase()}</h1>   
        </div>
        <div className='mascotas'>
            {pets.map((animal)=>
                 <Card key={animal._id} className='card' sx={{ width: 200 }}>
                 <CardContent>
                   <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                     edad:{animal.edad}
                   </Typography>
                   <Typography variant="h5" component="div">
                   {animal.nombre}
                   </Typography>
                   <Typography sx={{ mb: 1.5 }} color="text.secondary">
                     raza: {animal.raza}
                   </Typography>
                   <Typography variant="body2">
                     vacunas: {animal.vacunas}
                   </Typography>
                   <Button id={animal._id} variant='contained' color='warning' size='small'>Eliminar</Button>
                 </CardContent>
               </Card>
            )}
        </div>
        
    </div>
  );
}

export default Home;