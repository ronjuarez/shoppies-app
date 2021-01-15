import styled from "styled-components";

const NomContainer = styled.div`
  width: 100%;
  height: 600px;
  display: flex;
  align-items: center;
  flex-direction: column;
  `

const NominatedCollection = styled.div`
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

const NominationTitleHolder = styled.div`
  align-self: flex-start;
  width: 100%;
  `


const NominationCounter = styled.p`
  align-self: flex-start;
  font-size: 36px;
  font-family: "Serenity";
  color: black;
  font-weight: bold;
  margin-left: 30px 
  `

const NominatedMovie = styled.div`
  width: 300px;
  height: 365px;
  justify-content: center;
`
const MoviePoster = styled.img`
  width: 200px;
  height: 265px;
`



export default function Nominations({
  nominations,
  setNomination
}) {

  // remove nom function



return (
    <NomContainer>

      <NominatedCollection>
        <NominationTitleHolder>
          <NominationCounter> 
            You have {5 - nominations.length} Nominations left!
            </NominationCounter>
        </NominationTitleHolder>
        {nominations && nominations.length && nominations.map(movie => 
          <NominatedMovie>
            <p>{movie.Title} ({movie.Year})</p>
            <MoviePoster 
              src={movie.Poster !== "N/A" ? 
              movie.Poster : `https://www.prokerala.com/movies/assets/img/no-poster-available.jpg`} 
              alt={movie.Title} 
              onClick={()=> setNomination(nominations => [...nominations.filter(update => update.imdbID !== movie.imdbID)])}
            />
          </NominatedMovie>
        )}
      </NominatedCollection>
    </NomContainer>
  )
}