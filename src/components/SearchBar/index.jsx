import styled from "styled-components";

const SearchForm = styled.div`
  display: flex;
  width: 100%;
  height: 54px;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  `

const StyledSearchBar = styled.input`
  border-width: 2px;
  border-color: rgb(0, 0, 0);
  border-radius: 15px;
  width: 325px;
  height: 48px;
  background-color: rgb(255, 255, 255);
  font-size: 24px;
  font-weight: bold;
  &::-webkit-input-placeholder {
    font-size: 24px;
    font-family: "Serenity";
    color: rgb(38, 38, 38);
    opacity: 0.4;
}
  `

export default function SearchBar({
  setSearchRes,
  searchRes
}) {

  return (
  <SearchForm> 
    <form onSubmit = {e => e.preventDefault}>
    <StyledSearchBar
      type="text"
      placeholder="Search a film title"
      value={searchRes.query}
      onChange={event => setSearchRes(search => ({...search, query: event.target.value}))}
    />
    </form>
  </SearchForm>
  )
}