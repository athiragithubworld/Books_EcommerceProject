import React, { useState, useEffect, useContext } from "react";
import "./DetailSection.css";
import BookDetailingImg from "../../../assets/books-images/atomic-habits.jpg";
import { useNavigate, useParams } from "react-router-dom";
import { BookData } from "../../../util/BookData";
import app from "../../../Firebase/Firebase";
import { CartContext, UserContext } from "../../../App";

const DetailSection = () => {
  const { id } = useParams();
  const [bookData, setBookData] = useState({});
  const user = useContext(UserContext);
  const { cartItems, setcartItems } = useContext(CartContext);

  const navigate = useNavigate();

  useEffect(() => {
    let newData = BookData.filter((book) => book.id === parseInt(id));
    setBookData(newData[0]);

    // console.log(newData);
    // console.log(newData[0]);
  }, []);

  const handleCart = () => {
    if (user) {
      setcartItems([...cartItems, bookData]);
      alert(`The book ${bookData.book_name} is added to the cart`);
    } else {
      navigate("/login");
      alert("Please login or Sign Up");
    }
  };

  return (
    <section className="detail-section-container">
      <div className="container">
        <div className="flex-container">
          <div className="book-img-container">
            <img src={bookData.book_url} alt="book" />
          </div>
          <div className="book-detail-container">
            <h2>{bookData.book_name}</h2>
            <p className="text-primary">{bookData.author_name}</p>
            <p className="book-description">{bookData.book_description}</p>
            <p>
              <b>Language : </b>
              {bookData.language}
            </p>
            <p>
              <b>Book Length :</b> {bookData.print_length}
            </p>
            <h3>&#8377;{bookData.price}</h3>

            <a onClick={handleCart} className="button-primary">
              Add To Cart
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailSection;
