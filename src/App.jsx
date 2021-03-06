import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Nominations from './components/Nominations'
import SearchBar from "./components/SearchBar";
import SearchRes from "./components/SearchRes";
import Header from "./components/Header"


const TOKEN = process.env.REACT_APP_TOKEN;
const BASE_URL = "https://www.omdbapi.com/?apikey=";


function App() {
  const [searchRes, setSearchRes] = useState({
    query: "",
    movies: [],

  });

  const [nominations, setNomination] = useState([])

  const ref = useRef('');

  useEffect(()=> { 
    if(ref.current === "" && searchRes.query === "") return;

    axios.get(`${BASE_URL}${TOKEN}&s=${searchRes.query}&type=movie`)
    .then(apiSearchResults => {
      setSearchRes(search => ({
        ...search,
        movies: apiSearchResults.data.Search
      }))
    })
    .catch(error => console.log('Error:', error))
    
    ref.current = searchRes.query
  }, [searchRes.query])
  
  useEffect(() => {
    const storageItems = JSON.parse(localStorage.getItem('localStorageState'))
    if (storageItems) {
        setNomination(storageItems)
    }
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [localStorage])


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
