import React from "react";
import "./ProductListingAll.css";
import ProductListingCards from "../../Cards/ProductListingCards/ProductListingCards";

const ProductListingAll = () => {
  return (
    <section className="product-listing-all-cointainer">
      <div className="container">
        <div className="grid-cointainer">
          <div className="grid-item">
            <ProductListingCards />
          </div>
          <div className="grid-item">
            <ProductListingCards />
          </div>
          <div className="grid-item">
            <ProductListingCards />
          </div>
          <div className="grid-item">
            <ProductListingCards />
          </div>
          <div className="grid-item">
            <ProductListingCards />
          </div>
          <div className="grid-item">
            <ProductListingCards />
          </div>
          <div className="grid-item">
            <ProductListingCards />
          </div>
          <div className="grid-item">
            <ProductListingCards />
          </div>
          <div className="grid-item">
            <ProductListingCards />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductListingAll;
