import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import BookPage from "./Pages/BookPage/BookPage";
import BookDetails from "./Pages/BookDetailsPage/BookDetails";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/books" element={<BookPage />} />
        <Route path="/books-details/:id" element={<BookDetails />} />
      </Routes>
    </div>
  );
};

export default App;
