import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../FirebaseConfige";

const Navbar = ({ isAuth, setIsAuth }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth).then(() => {
      localStorage.clear();
    });
    setIsAuth(false);
    navigate("/login");
  };

  return (
    <>
      <nav>
        <NavLink to="/" end>
          Home
        </NavLink>

        <NavLink to="/createpost">CreatePost</NavLink>

        {!isAuth ? (
          <NavLink to="/login">Login</NavLink>
        ) : (
          <button className="logout-button" onClick={handleLogout}>
            Logout
          </button>
        )}
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
