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

export const UserContext = createContext({});

const App = () => {
  const [authenticatedUser, setAuthenticatedUser] = useState(null);

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

  return (
    <UserContext.Provider value={authenticatedUser}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/books" element={<BookPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/books-details/:id" element={<BookDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </UserContext.Provider>
  );
};

export default App;
