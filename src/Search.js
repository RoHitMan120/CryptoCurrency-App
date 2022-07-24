import React from "react";
import "./App.css";

function Search({ handleChange }) {
  return (
    <div className="coin-search">
      <h1>Search your desired Crypto</h1>
      <form action="">
        <input
          type="text"
          className="coin-input"
          placeholder="Enter Crypto name..."
          onChange={handleChange}
        />
      </form>
    </div>
  );
}

export default Search;
