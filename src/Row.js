import React, { useEffect, useState } from 'react'
import instance from './axios'

const Row = ({title,fetchUrl}) => {
    const[movies,setMovies]=useState([]);
    useEffect(()=>{
        async function fetchData(){

            const response=await instance.get(fetchUrl);
            setMovies(response.data.results)
            // console.log(response.data.results);

        }

        fetchData();
    },[fetchUrl])
    // whenever fetchurl changes you have to fetch data 
  return (
    <div>
     <h1>{title}</h1> 
    </div>
  )
}

export default Row
