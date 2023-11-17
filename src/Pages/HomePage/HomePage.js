import React from "react";
import Showcase from "../../Components/Layouts/Showcase/Showcase";
import ProductList from "../../Components/Layouts/ProductList/ProductList";
import Footer from "../../Components/Layouts/Footer/Footer";

const HomePage = () => {
  return (
    <section>
      {/* <h1>Home</h1> */}
      <Showcase />
      <ProductList />
      <Footer />
    </section>
  );
};

export default HomePage;
