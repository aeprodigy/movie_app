import { useEffect, useState } from "react";
import requests from "../Request";
import axios from "axios";
const Main = () => {
  const [movies, setMovies] = useState([]);

  //This helps pick a random movies from the list of movies fetched from the api
  const movie = movies[Math.floor(Math.random() * movies.length)];
  useEffect(() => {
    axios.get(requests.requestPopular).then((response) => {
      setMovies(response.data.results);
    });
  }, []);
  console.log(movie);
  //Truncate  the text of the length of the string of the movie overview
  const truncateString =(str, num)=>{
    if(str?.length > num){
        return str.slice(0, num) + "....";
    }else{
        return str;
    }
  }
  return (
    <div className="w-full h-[550px] text-white">
      <div className="w-full h-full">
        <div className="absolute w-full h-[550px] bg-gradient-to-r from-black"></div>
        <img
          className="w-full h-full object-cover"
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
        />
        <div className="w-full absolute top-[20%] p-4 md:p-8">
          <h1 className="text-3xl md:text-5xl font-bold">{movie?.title}</h1>
          <div className="my-4">
            <button className="border  bg-gray-300 text-black border-gray-300 py-2 px-4">
              Watch
            </button>
            <button className="border ml-2 text-white border-gray-300 py-2 px-4">
              Watch Later
            </button>
          </div>
          <p className="text-gray-300 text-sm">
            Released: {movie?.release_date}
          </p>
          <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[45%] text-gray-200">
            {truncateString(movie?.overview,100)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
