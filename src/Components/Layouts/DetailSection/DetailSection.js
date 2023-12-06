import React from "react";
import "./DetailSection.css";
import BookDetailingImg from "../../../assets/books-images/atomic-habits.jpg";

const DetailSection = () => {
  return (
    <section className="detail-section-container">
      <div className="container">
        <div className="flex-container">
          <div className="book-img-container">
            <img src={BookDetailingImg} alt="book" />
          </div>
          <div className="book-detail-container">
            <h2>Automic Habits</h2>
            <p className="text-primary">James Clear</p>
            <p className="book-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              purus diam, aliquam nec elit id, blandit iaculis velit. Integer
              sapien mi, gravida ac nisl id, pretium lacinia sapien. Nulla
              lacinia, mi sit amet volutpat tincidunt, tortor ligula porta
              lacus, bibendum vulputate libero erat a urna. Maecenas lacinia
              blandit tellus at molestie. Donec tempus odio lacus, non ultricies
              arcu tincidunt id. Proin ullamcorper scelerisque orci sit amet
              gravida. Mauris viverra imperdiet ipsum, in luctus arcu ultrices
              eget. Phasellus vestibulum tempus erat. In imperdiet velit id urna
              elementum tempus vel ut tellus. Pellentesque posuere metus
              efficitur nisl maximus, sed aliquam lorem ultrices. Fusce in
              commodo ex, in facilisis ante. Aliquam id imperdiet eros. Proin
              bibendum, velit pharetra gravida euismod, tellus urna rhoncus
              urna, a mollis turpis nunc in lectus. In pellentesque tellus sit
              amet nibh ornare ullamcorper vitae a neque. Quisque euismod lectus
              in sagittis ullamcorper. Fusce eu viverra velit.
            </p>
            <p>
              <b>Language : </b>English
            </p>
            <p>
              <b>Book Length :</b> 300 pages
            </p>
            <h3>&#8377;450</h3>

            <a href="#" className="cart-button">
              Add To Cart
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailSection;
