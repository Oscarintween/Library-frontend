import React,{useState,useEffect} from 'react';
import '../App.css';
import axios from 'axios'
import BookCard from '../components/BookCard';

function Home() {

  // const [input, setInput] = useState('')
  const [books,setBooks] = useState([])

  const getBooks = async() => {
    const url = `http://localhost:5000/books`
    const data = await axios.get(url)
    const response = data.data
    return response
}

  const handleClick = ()=>{
    getBooks()
    .then( setBooks)
    .then(()=>console.log(books))
  }

  useEffect(()=>{
    handleClick()
  },[])

  return (
    <div className="App">
        <h1 className='title'>LIBRARY OF ALEXANDRIA</h1>        
        <div className='books'>
            {books.map((book)=>(
              <div  key={book._id}>
                <BookCard book ={book} />
              </div>
              
            ))}
        </div>
    </div>
  );
}

export default Home;