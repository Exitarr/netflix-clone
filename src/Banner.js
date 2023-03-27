import React, { useEffect, useState } from "react";
import "./Image.css";
import axios from "./axios";
import requests from "./requests";


const Banner = () => {
  const [movie, setMovie] = useState([]);
  const [video, setVideo] = useState(null);
  const [play,setPlay] = useState(false);

  useEffect(() => {
    async function fetchdata() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      const currMovie = request.data.results[
        Math.floor(Math.random() * request.data.results.length - 1)
      ]
      setMovie(currMovie);
      const videoId = await axios.get(requests.fetchVideo(currMovie?.id));
      setVideo(videoId.data.results[0].key);
      return request;
    }
    fetchdata();
  }, []);
  const videoURL = ` https://youtube.com/embed/${video}?rel=0&controls=0&showinfo=0&autohide=1&modestbranding`;
  // const truncate = (data) =>
  //   data?.length > 125 ? `${data.substring(0, 160)}...` : data;
  return (
    <>
      <header
        className="Image"
        style={{
          backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
          backgroundSize: "cover",
        }}
      >
        <div className="Contents">
          {!play&&<h1 className="text-4xl font-bold text-white w-[50%] ">{movie?.title||movie?.name||movie?.original_name}</h1>}

          <div>
          <button onClick={() => setPlay(elem => !elem) }>{!play?<p>watch trailer</p>:<p>close trailer</p>} </button>
            <button>My list</button>
          </div>
          
          
          

          <div>
            {!play && <p className="text-md w-[40%] text-white line-clamp-2 text-ellipsis ">
              {movie?.overview}
           </p>}
          </div>
        </div>
        <div className="fade" />
       
        {play && (<div className="flex flex-col justify-center items-center w-screen ">
          <iframe title='Sourav' src={videoURL} className="h-[400px] w-[50%] "/>
      </div>)}
        
      </header>
      
    </>
  );
};

export default Banner;
