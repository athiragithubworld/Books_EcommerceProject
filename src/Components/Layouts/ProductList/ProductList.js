import React from "react";
import "./ProductList.css";
import { BookData } from "../../../util/BookData";

import ProductListingCards from "../../Cards/ProductListingCards/ProductListingCards";
const ProductList = () => {
  return (
    <div className="product-listing-container">
      <div className="container">
        <h2>
          Here are some <span className="text-primary">books</span> that you
          might like
        </h2>
        <div className="listing-container">
          {BookData.slice(1, 5).map((book) => (
            <ProductListingCards key={book.id} bookData={book} />
          ))}

          {/* <div className="product-listing-card">
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
          </div>*/}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
