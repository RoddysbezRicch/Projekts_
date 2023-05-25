import React, { useState } from "react";
import { login } from "@/utils/api";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    const response = await login(email, password);

    console.log(response);
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Ielogoties</h2>
      <form className="login-form" onSubmit={handleLogin}>
        <input
          className="login-input"
          type="Epasts"
          placeholder="Epasts"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="login-input"
          type="Parole"
          placeholder="Parole"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="login-button" type="submit">Ielogoties</button>
      </form>
      <div className="login-footer"></div>
    </div>
  );
};

export default LoginPage;