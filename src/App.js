import axios from 'axios';
import { useState, useEffect } from 'react';
import Videoplayer from './components/Videoplayer';


function App() {
  const [movies, setmovies] = useState([])
  const apiUrl = process.env.REACT_APP_API_URL || 'http://127.0.0.1:3001/videos';

    const fetchMovies = async()=>{
        // const response = await axios.get('http://127.0.0.1:3001/videos');
        const response = await axios.get(apiUrl);
        // console.log(response.data);
        // setmovies(response.data);
        setmovies(response.data);
    }
    useEffect(()=>{
        fetchMovies()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    
  return (
    <div className="m-4 min-h-screen bg-gray-100 flex justify-center items-start">
      <Videoplayer movies = {movies}/>
    </div>
  );
}

export default App;
