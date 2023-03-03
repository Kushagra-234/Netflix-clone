
import React from 'react'
import requests from './data';
import Row from './Row';
import "./App.css"
import Banner from './Banner'
import Nav from "./Nav"

const App = () => {
  return (
    <div className="App">
      <Nav/>
      <Banner/>
      <Row 
      title="NETFLIX ORIGINALS"  
      fetchUrl={requests.fetchNetflixOriginals}
      isLarge
      />
      <Row title="TRENDING NOW"  fetchUrl={requests.fetchTrending}/>
      <Row title="TOP RATED"  fetchUrl={requests.fetchTopRated}/>
      <Row title="ACTION MOVIES"  fetchUrl={requests.fetchActionMovies}/>
      <Row title="COMEDY MOVIES"  fetchUrl={requests.fetchComedyMovies}/>
      <Row title="HORROR MOVIES"  fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="ROMANCE MOVIES"  fetchUrl={requests.fetchRomanceMovies}/>
      <Row title="DOCUMENTARIES"  fetchUrl={requests.fetchDocumantaries}/>
    </div>
  );
}

export default App

