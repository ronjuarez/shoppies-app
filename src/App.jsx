import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

function App() {
  const TOKEN = process.env.REACT_APP_TOKEN;
  const BASE_URL = "http://www.omdbapi.com/?apikey=";
  const QUERY = "&t=inception"

  useEffect(()=> { 
    axios.get(`${BASE_URL}${TOKEN}${QUERY}`)
    .then(apiSearchResults => console.log(apiSearchResults.data))
  }, []) 
  
  return (

    <div/>


  );
}

export default App;
