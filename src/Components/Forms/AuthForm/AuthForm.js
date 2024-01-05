import React, { useState } from "react";
import app from "../../../Firebase/Firebase";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

const AuthForm = ({ buttonName }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUserName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log("Form Submitted", username, email, password);

    const auth = getAuth(app);

    if (buttonName === "Login") {
      signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          navigate("/");
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredentails) => {
          userCredentails.user.displayName = username;
          // console.log(username);
          navigate("/");
        })
        .catch((err) => {
          console.log("Error", err);
        });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {buttonName === "Sign Up" && (
          <div className="form-group">
            <label>User Name</label>
            <input
              type="text"
              className="form-input"
              placeholder="Enter your username"
              value={username}
              onChange={(event) => setUserName(event.target.value)}
              required
            />
          </div>
        )}

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-input"
            placeholder="Enter your email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-input"
            placeholder="Enter your password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <input type="submit" className="button-primary" value={buttonName} />
        </div>
      </form>
    </div>
  );
};

export default AuthForm;
