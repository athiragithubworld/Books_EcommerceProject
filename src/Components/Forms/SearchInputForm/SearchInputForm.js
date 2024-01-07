import React, { useState } from "react";
import "./SearchInputForm.css";
import { useNavigate } from "react-router-dom";

const SearchInputForm = ({ darkTheme }) => {
  const [searchField, setSearchField] = useState("");
  const navigate = useNavigate();

  const searchHandler = (e) => {
    setSearchField(e.target.value);
  };

  const searchNavigatePageHandler = () => {
    if (searchField === "") {
      alert("Search Field is Empty");
    } else {
      navigate("/search", { state: searchField });
    }
  };

  return (
    <div
      className={`search-input-form-container ${
        darkTheme ? "dark-box-shadow" : "light-box-shadow"
      }`}
    >
      <input
        type="text"
        className="search-input"
        placeholder="Search books"
        value={searchField}
        onChange={searchHandler}
      />
      <button onClick={searchNavigatePageHandler} className="search-button">
        Search
      </button>
    </div>
  );
};

export default SearchInputForm;
