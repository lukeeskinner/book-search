import "../Styles/SearchBar.css";
import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState(""); // hook to create query, stores it. Set query updates when input is changed.

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    if (searchTerm.trim()) {
      onSearch(searchTerm);
    }
  };

  return (
    <>
      <div className="search-bar">
        <input
          className="search-input"
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          placeholder="Search for books..."
        />
        <button onClick={handleSearch} className="search-button">
          Search Books
        </button>
      </div>
    </>
  );
};

export default SearchBar;
