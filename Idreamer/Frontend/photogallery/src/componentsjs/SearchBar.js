import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!query) {
      setError('Please enter a search query.');
      return;
    }

    onSearch(query);
    setQuery('');
    setError('');
  };

  const handleQueryChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="query">Search:</label>
        {/* <input type="text" id="query" value={query} onChange={handleQueryChange} /> */}
        <input type="text" id="id" value={query} onChange={handleQueryChange} />

      </div>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;



// import React, { useState } from 'react';

// function SearchBar(props) {
//   const [searchTerm, setSearchTerm] = useState('');

//   function handleSearchTermChange(event) {
//     setSearchTerm(event.target.value);
//   }

//   function handleSearch() {
//     props.onSearch(searchTerm);
//   }

//   return (
//     <div className="search-bar">
//       <input
//         type="text"
//         placeholder="Search by label"
//         value={searchTerm}
//         onChange={handleSearchTermChange}
//       />
//       <button onClick={handleSearch}>Search</button>
//     </div>
//   );
// }

// export default SearchBar;
