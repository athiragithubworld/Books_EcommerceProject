import React, { useContext } from "react";
import "./SearchResultCard.css";
import { Link } from "react-router-dom";
// import { CartContext } from "../../../App";

const SearchResultCard = ({ bookData }) => {
  // const { cartItems, setcartItems } = useContext(CartContext);

  return (
    <section className="cart-item">
      <div className="cart-item-img-container">
        <img
          src={bookData.book_url}
          alt="cart-item-img"
          className="cart-item-img"
        ></img>
      </div>
      <div className="cart-item-content-container">
        <h2>{bookData.book_name}</h2>
        <p>{bookData.author_name}</p>
        {/* <h3 className="cart-item-price">&#8377; {bookData.price}</h3> */}
        <Link to={`/books-details/${bookData.id}`} className="button-primary">
          Product Details
        </Link>
      </div>
    </section>
  );
};

export default SearchResultCard;
