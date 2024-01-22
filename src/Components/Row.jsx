/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import axios from "axios";
import { useEffect, useState, } from "react";
import {FaHeart, FaRegHeart} from 'react-icons/fa';
import MovieComponent from "./MovieComponent";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";


const Row = ({title,fetchURL, rowID}) => {
    const [movies, setMovies] = useState([]);//movies states
  
    useEffect(() => {
     axios.get(fetchURL).then((response)=>{
        setMovies(response.data.results);
     })
    }, [fetchURL]);
    
    //The slide left and right arrows
    const slideLeft = ()=>{
        var slider = document.getElementById('slider' + rowID);
        slider.scrollLeft = slider.scrollLeft - 500;
    }

    const slideRight = () => {
      var slider = document.getElementById("slider" + rowID);
      slider.scrollLeft = slider.scrollLeft + 500;
    };
  return (
    <div>
      <h2 className="text-gray-200 font-bold md:text-xl p-4">{title}</h2>

      <div className="relative flex items-center group">
        <FaChevronCircleLeft
          onClick={slideLeft}
          size={40}
          className="bg-gray-200  left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
        />
        <div
          id={"slider" + rowID}
          className="w-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
        >
          {movies.map((item, id) => (
            <MovieComponent className="" key={id} item={item} />
          ))}
        </div>
        <FaChevronCircleRight
          size={40}
          onClick={slideRight}
          className="bg-gray-200 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block right-0"
        />
      </div>
    </div>
  );
}

export default Row