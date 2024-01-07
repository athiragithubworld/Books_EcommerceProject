import React, { useContext } from "react";
import "./CartItemContainer.css";
import CartImg from "../../../assets/books-images/1984.webp";
import CartItemCard from "../../Cards/Cart_ItemCard/CartItemCard";
import { CartContext, UserContext } from "../../../App";
import StripeCheckout from "react-stripe-checkout";
import { useNavigate } from "react-router-dom";

const CartItemContainer = () => {
  const { cartItems, totalAmount } = useContext(CartContext);
  const stripeKey =
    "pk_test_51OVv3nSF6lED8C5KAXco5xIqp9CsHYPkFxqQJsP7H9sK0r9OZIopWwsbWBtvRrLjBrSyjsb7m9MKdZFdeqi1KLAb00LdE9KE0S";

  const navigate = useNavigate();

  const onToken = (token) => {
    console.log(token);
    alert("Your payment is has been processed");
    navigate("/books");
  };

  return (
    <section className="cart-items-container">
      <div className="container">
        {totalAmount === 0 ? (
          <h2>Currently your cart is empty</h2>
        ) : (
          <>
            <h2>Cart </h2>
            {cartItems.length !== 0 &&
              cartItems.map((item) => (
                <CartItemCard key={item.id} bookData={item} />
              ))}
            <h2> Total Amount = &#8377; {totalAmount} </h2>

            <StripeCheckout
              name="Book Checkout"
              description="Please fill in the details below"
              amount={totalAmount * 100}
              currency="INR"
              stripeKey={stripeKey}
              token={onToken}
              billingAddress
            >
              <button className="button-primary">Procced To Checkout</button>
            </StripeCheckout>
          </>
        )}
      </div>
    </section>
  );
};

export default CartItemContainer;
