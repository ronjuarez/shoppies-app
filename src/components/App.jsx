import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";


const TOKEN = process.env.REACT_APP_TOKEN;
const BASE_URL = "http://www.omdbapi.com/?apikey=";


function App() {
  const [searchRes, setSearchRes] = useState({
    query: "inception",
    movies: [],
  });

  let QUERY = `&t=${searchRes.query}`

  useEffect(()=> { 
    axios.get(`${BASE_URL}${TOKEN}${QUERY}`)
    .then(apiSearchResults => {
      setSearchRes(search => ({
        ...search,
        movies: apiSearchResults.data
      }))
    })
    .catch(error => console.log('Error:', error))
  }, []) 

  console.log('state',searchRes)
  
  return (
  <div>
    <div>  
      <ul>
        <li>
        <p>Search Result: {searchRes.movies.Title} ({searchRes.movies.Year})</p>
        <img src={searchRes.movies.Poster} alt={searchRes.movies.Title}/>
        </li>
      </ul>
    </div>
  </div>
  )
};

export default App;
