import React from "react";
import "./Showcase.css";
import { NavLink } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import SearchInputForm from "../../Forms/SearchInputForm/SearchInputForm";

const Showcase = () => {
  return (
    <section className="showcase-container">
      <Navbar darkTheme={false} />
      <div className="overlay"></div>
      <div className="showcase-content">
        <h1>
          Best <span className="text-primary">Books</span> Available
        </h1>
        <p>Buy quality books at cheap price</p>
        <SearchInputForm />
      </div>
    </section>
  );
};

export default Showcase;
