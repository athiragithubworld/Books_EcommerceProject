import React, { useEffect, useState } from "react";
import "./SearchPage.css";
import Navbar from "../../Components/Layouts/Navbar/Navbar";
import Footer from "../../Components/Layouts/Footer/Footer";
import { useLocation } from "react-router-dom";
import { BookData } from "../../util/BookData";
import SearchResultCard from "../../Components/Cards/SearchResultCard/SearchResultCard";

const SearchPage = () => {
  const location = useLocation();
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    let searchvalue = [];
    // console.log(location.state);
    searchvalue = BookData.filter((data) =>
      data.book_name.toLowerCase().includes(location.state.toLowerCase())
    );

    setSearchResult(searchvalue);
  }, []);

  return (
    <section>
      <Navbar darkTheme={true} />
      <div className="search-result-container">
        <div className="container">
          <h2>Your Search Results</h2>
          {searchResult.length !== 0 &&
            searchResult.map((result) => (
              <SearchResultCard key={result.id} bookData={result} />
            ))}
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default SearchPage;
