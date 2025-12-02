import React, { useState } from 'react'

export default function SearchBar({ onSearch }) {
  const [input, setInput] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    onSearch(input)
  }

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        placeholder="Search city (e.g. London)"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="search-input"
      />
      <button type="submit" className="search-button">Search</button>
    </form>
  )
}
