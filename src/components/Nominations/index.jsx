






export default function Nominations({
  nominations,
  setNomination
}) {

  // remove nom function



return (
    <div>
      <p>Nominations {nominations.length}/5</p>
      {nominations && nominations.length && 
        <ul>
          {nominations.map(movie => 
            <li>
              <p>{movie.Title} ({movie.Year})</p>
              <img src={movie.Poster !== "N/A" ? movie.Poster : `https://www.prokerala.com/movies/assets/img/no-poster-available.jpg`} alt={movie.Title} onClick={()=> setNomination(nominations => [...nominations.filter(update => update.imdbID !== movie.imdbID)])}/>
            </li>
          )}  
        </ul>
      }
    </div>
  )
}