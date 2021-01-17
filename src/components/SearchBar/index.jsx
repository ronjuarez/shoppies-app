import styled from "styled-components";

const SearchForm = styled.form`
  display: flex;
  width: 100%;
  height: 50px;
  `

const StyledSearchBar = styled.input`
  margin: 0 30%;
  border-width: 2px;
  border-color: rgb(0, 0, 0);
  border-radius: 15px;
  width: 500px;
  height: 36px;
  background-color: rgb(255, 255, 255);
  &::-webkit-input-placeholder {
    font-size: 24px;
    font-family: "Serenity";
    color: rgb(38, 38, 38);
}
  `

export default function SearchBar({
  setSearchRes,
  searchRes
}) {

  return (
  <SearchForm onSubmit = {e => e.preventDefault}>
    <StyledSearchBar
      type="text"
      placeholder="Search a film title"
      value={searchRes.query}
      onChange={event => setSearchRes(search => ({...search, query: event.target.value}))}
    />
  </SearchForm>
  )
}