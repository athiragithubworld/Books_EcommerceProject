import React from "react";
import "./SearchInputForm.css";

const SearchInputForm = () => {
  return (
    <div className="search-input-form-container">
      <input type="text" className="search-input" placeholder="Search books" />
      <button className="search-button">Search</button>
    </div>
  );
};

export default SearchInputForm;
