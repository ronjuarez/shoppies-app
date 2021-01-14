import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";


const TOKEN = process.env.REACT_APP_TOKEN;
const BASE_URL = "http://www.omdbapi.com/?apikey=";


function App() {
  const [searchRes, setSearchRes] = useState({
    query: "",
    movies: [],

  });

  const [nominations, setNomination] = useState([])


  useEffect(()=> { 
    if(searchRes.query === "") return;

    axios.get(`${BASE_URL}${TOKEN}&s=${searchRes.query}&type=movie`)
    .then(apiSearchResults => {
      setSearchRes(search => ({
        ...search,
        movies: apiSearchResults.data.Search
      }))
    })
    .catch(error => console.log('Error:', error))
  }, [searchRes.query]) 

  
  return (
  <div>
    <div>
      {nominations && nominations.length && 
        <ul>
          {nominations.map(movie => 
            <li>
              <p>Nominations: {movie.Title} ({movie.Year})</p>
              <img src={movie.Poster} alt={movie.Title}/>
            </li>
          )}  
        </ul>
      }
    </div>
    <div>
      <form onSubmit = {e => e.preventDefault}>
        <input
          type="text"
          placeholder="Search a film title"
          value={searchRes.query}
          onChange={event => setSearchRes(search => ({...search, query: event.target.value}))}
        />
      </form>
    </div>
    <div>
      {searchRes.movies && searchRes.movies.length && 
        <ul>
          {searchRes.movies.map(movie => 
            <li>
              <p>Search Result: {movie.Title} ({movie.Year})</p>
              <img src={movie.Poster} alt={movie.Title} onClick={()=> setNomination(nominations => [...nominations, movie])}/>
            </li>
          )}  
        </ul>
      }
    </div>
  </div>
  )
};

export default App;
