import React from "react";
import "./BookPage.css";
import Navbar from "../../Components/Layouts/Navbar/Navbar";
import SearchInputForm from "../../Components/Forms/SearchInputForm/SearchInputForm";
import ProductListingAll from "../../Components/Layouts/ProductListingAll/ProductListingAll";
import Footer from "../../Components/Layouts/Footer/Footer";

const BookPage = () => {
  return (
    <section>
      {/* <h1>Book Pages</h1> */}
      <Navbar darkTheme={true} />
      <div className="search-container">
        <h2>
          Find the <span className="text-primary">Books</span> that you want
        </h2>
        <SearchInputForm darkTheme={false} />
      </div>
      <ProductListingAll />
      <Footer />
    </section>
  );
};

export default BookPage;
