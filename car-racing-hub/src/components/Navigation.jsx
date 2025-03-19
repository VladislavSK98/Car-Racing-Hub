import { Link } from 'react-router-dom';
import styles from '../components/Navigation.module.css';

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <Link to="/">Home</Link>
            <Link to="/parking">Parking</Link>
            <Link to="/garage">My Garage</Link>
            <Link to="/tracks">Tracks</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
        </nav>
    );
};

export default Navbar;
