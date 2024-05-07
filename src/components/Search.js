import React from 'react'

function Search() {
  return (
    <div className="search-container">
      <input className="search-input" type="text" name="link" value="" placeholder="shorten your link here..."/>
      <button className="search-btn">Shorten it</button>
    </div>
  )
}

export default Search
