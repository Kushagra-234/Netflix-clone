
import React from 'react'
import requests from './data';
import Row from './Row';
import "./App.css"

const App = () => {
  return (
    <div className="App">
      <Row title="NETFLIX ORIGINALS"  fetchUrl={requests.fetchNetflixOriginals}/>
      <Row title="TRENDING NOW"  fetchUrl={requests.fetchTrending}/>
    </div>
  );
}

export default App

