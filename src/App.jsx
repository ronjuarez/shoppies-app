import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import Nominations from './components/Nominations'
import SearchBar from "./components/SearchBar";
import SearchRes from "./components/SearchRes";
import Header from "./components/Header"


const TOKEN = process.env.REACT_APP_TOKEN;
const BASE_URL = "http://www.omdbapi.com/?apikey=";


function App() {
  const [searchRes, setSearchRes] = useState({
    query: "",
    movies: [],

  });

  const [nominations, setNomination] = useState([])
  const LOCAL_STORAGE_ITEMS = 'localStorageState'

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
  
  useEffect(() => {
    const storageItems = JSON.parse(localStorage.getItem('localStorageState'))
    if (storageItems) {
        setNomination(storageItems)
    }
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [])


  return (
    <div>
      <div>
        <Header/>
      </div>
      <div>
        <Nominations 
          nominations={nominations}
          setNomination={setNomination}
        />
      </div>
      <div>
        <SearchBar
          setSearchRes={setSearchRes}
          searchRes={searchRes}
        />
      </div>
      <div>
        <SearchRes
          searchRes={searchRes}
          setNomination={setNomination}
          nominations={nominations}
        />
      </div>
    </div>
  )
};

export default App;
