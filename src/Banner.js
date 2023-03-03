import React, { useEffect, useState } from "react";
import instance from "./axios";
import requests from "./data";
import "./banner.css"

const Banner = () => {
  const base_url = "https://image.tmdb.org/t/p/original/";

  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await instance.get(requests.fetchNetflixOriginals);
      //  console.log(response.data.results);
      setMovie(
        response.data.results[
          Math.floor(Math.random() * response.data.results.length - 1)
        ]
      );
    }

    fetchData();
  }, []);

  // console.log(movie);
  function truncate(str,n){
    return str ?.length >n ? str.substr(0,n-1) + "..." : str;

  }
  return (
    <header
    className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(
           ${base_url}${movie?.backdrop_path}
       )`,
        backgroundPosition: "top",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">{movie?.title || movie?.name || movie?.original_name}</h1>
        <div className="banner__buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>

        </div>
        <h1 className="banner__description">
          {truncate(movie?.overview,150)}
          </h1>
      </div>
      <div className="banner_fade" />
    </header>
  );
};

export default Banner;
