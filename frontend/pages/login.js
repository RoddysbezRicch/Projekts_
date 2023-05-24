import { login } from "@/utils/api";
import { useState } from "react";


const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    
    const response = await login(email, password);
    
    console.log(response);
  };

  return (
    <div>
      <h2>Ielogoties</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Ielogoties</button>
      </form>
    </div>
  );
};

export default LoginPage;