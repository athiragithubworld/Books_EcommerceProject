import React, { createContext, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import app from "./Firebase/Firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";

import HomePage from "./Pages/HomePage/HomePage";
import BookPage from "./Pages/BookPage/BookPage";
import BookDetails from "./Pages/BookDetailsPage/BookDetails";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";
import CartPage from "./Pages/CartPage/CartPage";
import ScrollToTop from "./util/ScrollToTop";
import SearchPage from "./Pages/SearchPage/SearchPage";

export const UserContext = createContext({});
export const CartContext = createContext({});

const App = () => {
  const [authenticatedUser, setAuthenticatedUser] = useState(null);
  const [cartItems, setcartItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user);
        setAuthenticatedUser(user);
      } else {
        setAuthenticatedUser(null);
      }
    });
  }, []);

  useEffect(() => {
    let total = 0;
    cartItems.forEach((item) => {
      total = total + Number(item.price);
    });

    setTotalAmount(total);
  }, [cartItems]);

  return (
    <ScrollToTop>
      <UserContext.Provider value={authenticatedUser}>
        <CartContext.Provider value={{ cartItems, totalAmount, setcartItems }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/books" element={<BookPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/books-details/:id" element={<BookDetails />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </CartContext.Provider>
      </UserContext.Provider>
    </ScrollToTop>
  );
};

export default App;
