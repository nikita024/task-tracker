import React, { useEffect, useState } from "react";
import users from "../data/users.json";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const user = users.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      localStorage.setItem("loggedIn", true);
      localStorage.setItem("username", user.username);
      navigate("/dashboard");
    } else {
      setError("Invalid email or password");
    }
  };

  useEffect(() => {
    const loggedIn = localStorage.getItem("loggedIn");
    if (loggedIn) {
      navigate("/dashboard");
    }
  }, [navigate]);

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
        </form>
        {error && <p className="error">{error}</p>}
      </div>
    </div>
  );
};

export default Login;
