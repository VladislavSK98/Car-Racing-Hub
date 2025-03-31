import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import styles from "../components/Navigation.module.css";

const Navigation = () => {
  const { user, setUser } = useAuth();

  const handleLogout = () => {
    fetch("http://localhost:5000/api/logout", {
      method: "POST",
      credentials: "include",
    }).then(() => {
      setUser(null);
      localStorage.removeItem("user"); // Изчистване на локалното хранилище
    });
  };

  return (
    <nav className={styles.navbar}>
      <Link to="/">Home</Link>
      <Link to="/parking">Parking</Link>
      <Link to="/tracks">Tracks</Link>

      {user ? (
        <>
          <Link to="/garage">My Garage</Link>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </>
      )}
    </nav>
  );
};

export default Navigation;
