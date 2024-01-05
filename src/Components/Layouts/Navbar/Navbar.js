import React, { useContext } from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../../App";
import { ReactComponent as Cart } from "../../../assets/CartImg.svg";
import { getAuth, signOut } from "firebase/auth";
import app from "../../../Firebase/Firebase";

const Navbar = ({ darkTheme, darkText }) => {
  const user = useContext(UserContext);

  const auth = getAuth(app);
  const navigate = useNavigate();

  console.log(user);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const showLoginAndSignUp = (
    <nav className="nav-links-container">
      <Link to="/" className={`${darkText ? "nav-links-dark" : "nav-links"}`}>
        Home
      </Link>
      <Link
        to="/books"
        className={`${darkText ? "nav-links-dark" : "nav-links"}`}
      >
        Books
      </Link>
      <Link
        to="/login"
        className={`${darkText ? "nav-links-dark" : "nav-links"}`}
      >
        Login
      </Link>
      <Link
        to="/signup"
        className={`${darkText ? "nav-links-dark" : "nav-links"}`}
      >
        Sign Up
      </Link>
    </nav>
  );

  const showLogoutAndCart = (
    <nav className="nav-links-container">
      <Link to="/" className={`${darkText ? "nav-links-dark" : "nav-links"}`}>
        Home
      </Link>
      <Link
        to="/books"
        className={`${darkText ? "nav-links-dark" : "nav-links"}`}
      >
        Books
      </Link>
      <a
        onClick={handleLogout}
        to="/"
        className={`${darkText ? "nav-links-dark" : "nav-links"}`}
      >
        Logout
      </a>
      <Link to="/cart" className="cart-link">
        <Cart />
      </Link>
    </nav>
  );

  return (
    <section
      // className={
      //   darkTheme ? "background-dark" + " navbar-container"
      //     : "background-transparent" + " navbar-container"
      // }

      className={`navbar-container ${
        darkTheme ? "background-dark relative" : "background-transparent"
      }`}
    >
      <div className="container flex justify-between align-center">
        <a href="#" className="logo">
          Book<span className="text-primary">World</span>
        </a>
        {user ? showLogoutAndCart : showLoginAndSignUp}
      </div>
    </section>
  );
};

export default Navbar;
