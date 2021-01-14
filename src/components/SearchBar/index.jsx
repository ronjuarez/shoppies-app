

export default function SearchBar({
  setSearchRes,
  searchRes
}) {

  return (
  <form onSubmit = {e => e.preventDefault}>
    <input
      type="text"
      placeholder="Search a film title"
      value={searchRes.query}
      onChange={event => setSearchRes(search => ({...search, query: event.target.value}))}
    />
  </form>
  )
}