import React, { useState } from "react";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    const response = await register(username, email, password);

    console.log(response);
  };

  return (
    <div className="register-container">
      <h2 className="register-title">Reģistreties</h2>
      <form className="register-form" onSubmit={handleRegister}>
        <input
          className="register-input"
          type="text"
          placeholder="Lietotajvards"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="register-input"
          type="Epasts"
          placeholder="Epasts"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="register-input"
          type="Parole"
          placeholder="Parole"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="register-button" type="submit">Reģistreties</button>
      </form>
      <div className="register-footer"></div>
    </div>
  );
};

export default RegisterPage;