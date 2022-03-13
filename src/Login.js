import React, { useState } from "react";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newUser, setNewUser] = useState([]);

  const submitForm = (e) => {
    e.preventDefault();
    const newEntry = { email: email, password: password };
    setNewUser([...newUser, newEntry]);
    console.log(newUser);
  };

  return (
    <div className="container">
      <form action="" onSubmit={submitForm}>
        <div className="email">
          <label htmlFor="email">Login ID</label>
          <input
            type="text"
            name="email"
            id="email"
            autoComplete="off"
            placeholder="username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="password">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            autoComplete="off"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button className="loginBtn" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
