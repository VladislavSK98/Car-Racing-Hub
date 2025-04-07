import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import styles from "./Header.module.css";
import navStyles from "../navigation/Navigation.module.css";
import logo from "../../assets/logo2.png";

export default function Header() {
  const { email, isAuthenticated } = useAuth();

  return (
    <>
      <header className={styles.header}>
        <img src={logo} alt="Logo" className={styles.logo} />
        <h1 className={styles.title}>Car Racing Hub</h1>
      </header>

      <nav className={navStyles.navbar}>
        <Link to="/">Home</Link>
        <Link to="/parking">Parking</Link>
        <Link to="/tracks">Tracks</Link>

        {isAuthenticated ? (
          <>
            <Link to="/garage">My Garage</Link>
            <Link to="/admin">Admin</Link>
            <Link to="/logout">Logout</Link>
            <span style={{ color: 'white', marginLeft: '10px' }}>{email}</span>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </nav>
    </>
  );
}
