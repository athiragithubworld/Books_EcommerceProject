import React from "react";
import "./ProductListingCards.css";
// import ProductImage from "../../../assets/books-images/jungle-book.webp";
import { Link } from "react-router-dom";

const ProductListingCards = (props) => {
  return (
    <div>
      <div className="product-listing-card">
        <div className="product-listing-img-container">
          <img
            src={props.bookData.book_url}
            alt="product-listing-image"
            className="product-listing-image"
          />
        </div>
        <div className="product-listing-details-container">
          <h3>{props.bookData.book_name}</h3>
          <p className="author-name">{props.bookData.author_name}</p>
          <p className="pricing">&#8377; {props.bookData.price}</p>
        </div>
        <div className="card-btn-container">
          <Link
            to={`/books-details/${props.bookData.id}`}
            className="product-listing-button"
          >
            Add To cart
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductListingCards;
