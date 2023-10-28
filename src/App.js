import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
};

export default App;
