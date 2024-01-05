import React from "react";
import "./ProductListingAll.css";
import ProductListingCards from "../../Cards/ProductListingCards/ProductListingCards";
import { BookData } from "../../../util/BookData";

const ProductListingAll = () => {
  return (
    <section className="product-listing-all-cointainer">
      <div className="container">
        <div className="grid-cointainer">
          {BookData.map((book) => {
            return (
              <div className="grid-item">
                <ProductListingCards bookData={book} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductListingAll;
