import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../firebaseConfig";
import { Link } from "react-router-dom";

const Register = ({ setUser }) => {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <h3> Register User </h3>
      <p>
        <input
          placeholder="Email"
          onChange={(event) => {
            setRegisterEmail(event.target.value);
          }}
        />
      </p>
      <p>
        <input
          placeholder="Password"
          type="password"
          onChange={(event) => {
            setRegisterPassword(event.target.value);
          }}
        />
      </p>
      <p>
        <button onClick={register}>Register User</button>
      </p>
      <p>
          <Link to="/" className="App-link">Login</Link>
        </p>
    </div>
  )
}

export default Register
