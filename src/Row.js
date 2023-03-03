import React, { useEffect, useState } from "react";
import instance from "./axios";
import "./row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const Row = ({ title, fetchUrl, isLarge }) => {
  const base_url = "https://image.tmdb.org/t/p/original/";

  const [movies, setMovies] = useState([]);

  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    async function fetchData() {
      const response = await instance.get(fetchUrl);
      setMovies(response.data.results);
      // console.log(movies);
      // console.log(response.data.results);
    }

    fetchData();
  }, [fetchUrl]);
  // whenever fetchurl changes you have to fetch data

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || "").then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
          // by this we can get value of v
        })
        .catch((error) => console.log(error));
    }
  };
   console.log(movieTrailer);
  return (
    <div className="row">
      <h1>{title}</h1>
      <div className="row__posters">
        {movies.map((movie) => {
          return (
            <img
              onClick={() => handleClick(movie)}
              className={`row__poster ${isLarge && `row__posterLarge`}`}
              key={movie.id}
              src={`${base_url}${
                isLarge ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
            />
          );
        })}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      {/* <YouTube videoId="XtMThy8QKqU" opts={opts} /> */}
    </div>
  );
};

export default Row;  
