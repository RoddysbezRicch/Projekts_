import { useState } from "react"


const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    
    const response =  await register(username, email, password);
    
    console.log(response);
  };

  return (
    <div>
      <h2>Reģistreties</h2>
      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
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
        <button type="submit">Reģistreties</button>
      </form>
    </div>
  );
};

export default RegisterPage;