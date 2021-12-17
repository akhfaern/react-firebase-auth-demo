import { signOut } from "firebase/auth";
import { auth } from "../firebaseConfig";

const Profile = ({user}) => {

  const logout = async () => {
    await signOut(auth);
  };

  return (
    <div>
      <h4>{user.email}</h4>
      <button onClick={logout}> Sign Out </button>
    </div>
  )
}

export default Profile
