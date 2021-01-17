import styled from 'styled-components';
import Button from '../Button';


const SearchResultsContainer = styled.div`
  width: 100%;
  height: 600px;
  display: flex;
  align-items: center;
  flex-direction: column;
  align-self: flex-start;
  font-size: 14px;
  font-family: "Serenity";
  color: black;
  font-weight: bold;
  `

const SearchResults = styled.div`
  width: 95%;
  height: 95%;
  border-radius: 30px;
  background-color: rgb(232, 232, 232);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  flex-direction: row;
  order: 1;
  `

const LiveQueryHolder = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  `


const LiveQuery = styled.p`
  align-self: center;
  font-size: 24px;
  font-family: "Serenity";
  color: black;
  font-weight: bold;
  `

const MovieResult = styled.div`
width: 215px;
height: 260px;
display:flex;
justify-content: center;
align-items: center;
flex-direction: column;
  `
const ResultPoster = styled.img`
  width: 100px;
  height: 133px;
  `



export default function SearchRes({
  searchRes,
  setNomination,
  nominations
}) {
    
  const nominate = (movie) => {
    setNomination(nominations => [...nominations, movie])
  }

  const isNominated = (movie) => {
    for (let nomination of nominations) {
      if(movie.imdbID === nomination.imdbID){
        return true
      }
    }
    return false
  }

  return (
    <SearchResultsContainer>
        <LiveQueryHolder>
          <LiveQuery>
            {searchRes.query ? 
              `Search Results for ${searchRes.query}` :
              `Type a title for Search Results`
            }
          </LiveQuery>
        </LiveQueryHolder>
      <SearchResults>
        {searchRes.movies && searchRes.movies.length > 0 && searchRes.movies.map(movie => 
        <MovieResult>    
          <p>{movie.Title} ({movie.Year})</p>
          <ResultPoster 
            src={movie.Poster !== "N/A" ? 
            movie.Poster : `https://www.prokerala.com/movies/assets/img/no-poster-available.jpg`} 
            alt={movie.Title} 
          />
          <Button confirm 
            disabled={isNominated(movie)}
            onClick={()=> nominate(movie)}>
            Nominate
          </Button>
        </MovieResult>            
        )}
      </SearchResults>
    </SearchResultsContainer>
  )
} 