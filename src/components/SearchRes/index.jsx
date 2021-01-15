import styled from 'styled-components';

const SearchResultsContainer = styled.div`
  width: 100%;
  height: 1200px;
  display: flex;
  align-items: center;
  flex-direction: column;
  `

const SearchResults = styled.div`
  margin: 50px;
  width: 95%;
  height: 80%;
  border-radius: 30px;
  background-color: rgb(232, 232, 232);
  // opacity: 0.4;
  display: flex;
  flex-wrap: wrap-reverse;
  justify-content: space-around;
  flex-direction: row;
  `

const LiveQueryHolder = styled.div`
  width: 100%;
  `


const LiveQuery = styled.p`
  align-self: center;
  font-size: 36px;
  font-family: "Serenity";
  color: black;
  font-weight: bold;
  margin-left: 30%; 
  `

const MovieResult = styled.div`
  width: 300px;
  height: 365px;
  justify-content: center;
`
const ResultPoster = styled.img`
  width: 200px;
  height: 265px;
`


export default function SearchRes({
  searchRes,
  setNomination
}) {
    
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
        {searchRes.movies && searchRes.movies.length && searchRes.movies.map(movie => 
          <MovieResult>    
            <p>{movie.Title} ({movie.Year})</p>
            <ResultPoster 
              src={movie.Poster !== "N/A" ? 
              movie.Poster : `https://www.prokerala.com/movies/assets/img/no-poster-available.jpg`} 
              alt={movie.Title} 
              onClick={()=> setNomination(nominations => [...nominations, movie])}
            />
          </MovieResult>  
        )}
      </SearchResults>
    </SearchResultsContainer>
  )
} 