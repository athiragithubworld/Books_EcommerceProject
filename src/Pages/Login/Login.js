import React from "react";
import "./Login.css";
import AuthImg from "../../assets/auth.jpg";
import Navbar from "../../Components/Layouts/Navbar/Navbar";
import AuthForm from "../../Components/Forms/AuthForm/AuthForm";

const Login = () => {
  return (
    <React.Fragment>
      <Navbar darkText={true} />
      <section className="signup-container">
        <div className="signup-img-container">
          <img src={AuthImg} alt="authentication-background" />
        </div>

        <div className="signup-content-container">
          <div className="container">
            <div className="content-wrapper">
              <h2>Login</h2>
              <p>Sign in with email and password</p>
              <AuthForm buttonName="Login" />
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Login;
