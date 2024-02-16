import axios from 'axios';
import { useState, useEffect } from 'react';
import Videoplayer from './components/Videoplayer';


function App() {
  const [movies, setmovies] = useState([])
    const fetchMovies = async()=>{
        const response = await axios.get('http://127.0.0.1:3001/videos');
        // console.log(response.data);
        // setmovies(response.data);
        setmovies(response.data);
    }
    useEffect(()=>{
        fetchMovies()
    },[])
    
  return (
    <div className="m-4 min-h-screen bg-gray-100 flex justify-center items-start">
      <Videoplayer movies = {movies}/>
    </div>
  );
}

export default App;
