// import React, { useState } from "react";
// import { useRouter } from "next/router";
// import { login } from "@/utils/api";
// import { RiEyeLine } from 'react-icons/ri';

// const Login = () => {
//   const router = useRouter();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     const response = await login(email, password);

//     console.log(response);

//     // Redirect to the menu page
//     router.push("/");
//   };

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   return (
//     <div className="login-container">
//       <h2 className="login-title">Ielogoties</h2>
//       <form className="login-form" onSubmit={handleLogin}>
//         <input
//           className="login-input"
//           type="email"
//           placeholder="Epasts"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <div className="password-container">
//           <input
//             className="login-input"
//             type={showPassword ? "text" : "password"}
//             placeholder="Parole"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
          
//             <button
//             type="button"
//             className="password-toggle"
//             onClick={togglePasswordVisibility}
//             >
//             {showPassword ? <RiEyeLine /> : <RiEyeLine />}
//             </button>
//           
//         </div>
//         <button className="login-button" type="submit">
//           Ielogoties
//         </button>
//       </form>
//       <div className="login-footer"></div>
//     </div>
//   );
// };

// export default Login;