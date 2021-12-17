import { useState } from "react";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../firebaseConfig";
import { Link } from "react-router-dom";


const Login = ({ setUser }) => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });


  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <h3> Login </h3>
        <p>
          <input
            placeholder="Email"
            onChange={(event) => {
              setLoginEmail(event.target.value);
            }}
          />
        </p>
        <p>
          <input
            placeholder="Password"
            type="password"
            onChange={(event) => {
              setLoginPassword(event.target.value);
            }}
          />
        </p>
        <p>
          <button onClick={login}> Login</button>
        </p>
        <p>
          <Link to="/register" className="App-link">Register</Link>
        </p>
    </div>
  )
}

export default Login
