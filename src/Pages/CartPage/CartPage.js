import React from "react";
import Navbar from "../../Components/Layouts/Navbar/Navbar";
import Footer from "../../Components/Layouts/Footer/Footer";
import CartItemContainer from "../../Components/Layouts/CartItemContainer/CartItemContainer";

const CartPage = () => {
  return (
    <section>
      <Navbar darkTheme={true} />
      <CartItemContainer />
      <Footer />
    </section>
  );
};

export default CartPage;
