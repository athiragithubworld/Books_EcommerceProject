import React from "react";
import "./ProductListingCards.css";
import ProductImage from "../../../assets/books-images/jungle-book.webp";

const ProductListingCards = () => {
  return (
    <div>
      <div className="product-listing-card">
        <div className="product-listing-img-container">
          <img
            src={ProductImage}
            alt="product-listing-image"
            className="product-listing-image"
          />
        </div>
        <div className="product-listing-details-container">
          <h3>Book Name</h3>
          <p className="author-name">Author Name</p>
          <p className="pricing">&#8377; 300</p>
          <a href="#" className="product-listing-button">
            Button
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductListingCards;
