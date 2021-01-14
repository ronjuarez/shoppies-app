  


export default function SearchRes({
  searchRes,
  setNomination
}) {
    
  return (
    <div>
      <p>Search Results:</p>
      {searchRes.movies && searchRes.movies.length && 
        <ul>
          {searchRes.movies.map(movie => 
            <li>
              <p>{movie.Title} ({movie.Year})</p>
              <img src={movie.Poster !== "N/A" ? movie.Poster : `https://www.prokerala.com/movies/assets/img/no-poster-available.jpg`} alt={movie.Title} onClick={()=> setNomination(nominations => [...nominations, movie])}/>
            </li>
          )}  
        </ul>
      }
    </div>
  )
} 