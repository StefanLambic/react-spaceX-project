import "../styling/searchBar.css";

function SearchBar ({post, setSearchResults})  {

  const handleSubmit = (event) => event.preventDefault()

  const handleSearchChange = (event) => {
    if (!event.target.value) return setSearchResults([]) 
    const resultsArray = post.filter(post => post.mission_name.toLowerCase().includes(event.target.value))
        setSearchResults(resultsArray)
    }

  return (
    <header className="container">
      <form className="search" onSubmit={handleSubmit}>
        <input
         className="search__input"
          type="text"
          onChange={handleSearchChange}
          placeholder="Search..."
        />
        <button className="search__button">
          Click
        </button>
      </form>

    </header>
  )
}

export default SearchBar