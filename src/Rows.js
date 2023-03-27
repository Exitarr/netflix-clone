import axios from './axios';
import React, { useEffect, useState } from 'react'

const Rows = ({title,fetchURL,islargerow}) => {

const [movies,setMovies]=useState([]);

const baseURL = "https://image.tmdb.org/t/p/original/";

useEffect(()=>{
    async function fetchdata(){
        const response = await axios.get(fetchURL);
        setMovies(response.data.results);
        return response;
    }
    fetchdata();
},[fetchURL])
  return (
    <div className='flex flex-col p-3 m-2 '>
        <h1 className='text-2xl text-white sticky'>{title}</h1>
        <div className='flex flex-row overflow-x-auto'>{movies.map(movie=>(
          <>
            <img src={`${baseURL}${movie?.backdrop_path}`} alt={movie.name} className='w-[250px] h-[160px] p-1 m-2 shadow-md rounded-md hover:scale-110 ease-in duration-[0.05s] hover:cursor-pointer' key={movie.id}/>
          </>
        ))}</div>
    </div>
  )
}

export default Rows
