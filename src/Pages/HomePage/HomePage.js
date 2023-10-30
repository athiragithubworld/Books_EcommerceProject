import React from "react";
import Showcase from "../../Components/Layouts/Showcase/Showcase";
import ProductList from "../../Components/Layouts/ProductList/ProductList";

const HomePage = () => {
  return (
    <section>
      {/* <h1>Home</h1> */}
      <Showcase />
      <ProductList />
    </section>
  );
};

export default HomePage;
