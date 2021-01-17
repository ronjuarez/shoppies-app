import classNames from 'classnames'
import Button from '../Button';
import "./Nominations.scss";





export default function Nominations({
  nominations,
  setNomination
}) {

  let spots = 5 - nominations.length;

  const nomClass = classNames("nominations",{
    "nominations--completed" : spots === 0
  })

  const formatSpots = (spots) => {
    const pluralResult = "nominations remaining!"
    const result = "nomination remaining!"
    if (spots === 0) {
      return `You have filled your ballot! Save now?`
    } 
    return spots === 1 ?  `You have ${spots} ${result}` : `You have ${spots} ${pluralResult}`
  }

  const save = () => {
    localStorage.setItem('localStorageState', JSON.stringify(nominations))
  }

return (
    <div className="nominations-container">
      <div className={nomClass}>
        <div className="nominations-titleholder">
          <p className="nominations-counter"r> 
            {formatSpots(spots)}
          </p>
          {spots === 0 ?
            <Button confirm
              onClick={save}>
              Save
          </Button> : null}
        </div>
        {nominations && nominations.length > 0 && nominations.map(movie => 
          <div className="nominations-movie">
            <p>{movie.Title} ({movie.Year})</p>
            <img
              className="movie-poster"
              src={movie.Poster !== "N/A" ? 
              movie.Poster : `https://www.prokerala.com/movies/assets/img/no-poster-available.jpg`} 
              alt={movie.Title} 
              
            />
            <Button danger
              onClick={()=> setNomination(nominations => [...nominations.filter(update => update.imdbID !== movie.imdbID)])}>
                Remove
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}